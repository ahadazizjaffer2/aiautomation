import { useEffect, useState } from "react"
import Boy from "../assets/Boy.png"
import { usePipelineQuery } from "../reactQuery/hooks/usePipelineQuery"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  useDroppable,
} from "@dnd-kit/core"
import { restrictToWindowEdges } from "@dnd-kit/modifiers"
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

// Pipeline stages
const pipelineStages = [
  { name: "Discovery", color: "bg-green-200" },
  { name: "Evaluation", color: "bg-red-200" },
  { name: "Proposal", color: "bg-yellow-200" },
  { name: "Negotiation", color: "bg-blue-200" },
  { name: "Commit", color: "bg-purple-200" },
  { name: "Closed", color: "bg-[#D4E6A2]" },
]

// Draggable Lead Card Component
const SortableLeadCard = ({ lead, stage }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: lead.id,
    data: {
      type: "lead",
      lead,
      stage,
    },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="group rounded-xl transition-all md:w-56 w-70 hover:bg-gray-400 hover:text-white bg-white cursor-grab active:cursor-grabbing"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <img src={Boy || "/placeholder.svg"} alt="Profile" className="w-10 h-10 rounded-full" />
        <div>
          <p className="">{lead.name}</p>
          <p className="text-sm group-hover:text-white text-gray-500">
            {lead.title} @ {lead.company}
          </p>
        </div>
      </div>
      <p className="text-sm group-hover:text-white text-gray-500 mt-2 px-4">{lead.phone}</p>
      <p className="text-sm group-hover:text-white text-gray-500 px-4 overflow-hidden text-ellipsis pb-4">
        {lead.email}
      </p>
    </div>
  )
}

// Static Lead Card for Drag Overlay
const LeadCard = ({ name, phone, email, title, company }) => {
  return (
    <div className="group rounded-xl transition-all md:w-56 w-70 bg-white shadow-lg">
      <div className="flex items-center gap-3 px-4 py-3">
        <img src={Boy || "/placeholder.svg"} alt="Profile" className="w-10 h-10 rounded-full" />
        <div>
          <p className="">{name}</p>
          <p className="text-sm text-gray-500">
            {title} @ {company}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2 px-4">{phone}</p>
      <p className="text-sm text-gray-500 px-4 overflow-hidden text-ellipsis pb-4">{email}</p>
    </div>
  )
}

// Droppable Stage Container
const StageContainer = ({ stage, children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `stage-${stage.name}`,
    data: {
      type: "stage",
      stageName: stage.name,
    },
  })

  return (
    <div key={stage.name} className="flex justify-center">
      <div className="w-full md:max-w-[256px] flex flex-col items-center">
        <div className={`p-3 rounded-lg text-center ${stage.color} md:w-56 w-full h-10 flex items-center justify-center`}>
          {stage.name}
        </div>
        <div
          ref={setNodeRef}
          className={`space-y-3 mt-3 min-h-[100px] p-2 rounded-lg w-full transition-colors ${isOver ? "bg-gray-200" : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

const Pipelines = () => {
  const { allLeads, isLoading, isError, changeLeadStatus } = usePipelineQuery()
  const [leadsByStage, setLeadsByStage] = useState({})
  const [activeId, setActiveId] = useState(null)
  const [activeLead, setActiveLead] = useState(null)
  const [activeStage, setActiveStage] = useState(null)

  // Set up sensors for drag detection
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  useEffect(() => {
    // localStorage.removeItem("token")
    if (allLeads?.leads) {
      // Group leads by their status (pipeline stage)
      const groupedLeads = allLeads.leads.reduce((acc, lead) => {
        const { status } = lead

        if (!acc[status]) {
          acc[status] = []
        }

        acc[status].push(lead)
        return acc
      }, {})

      // Initialize empty arrays for stages with no leads
      pipelineStages.forEach((stage) => {
        if (!groupedLeads[stage.name]) {
          groupedLeads[stage.name] = []
        }
      })

      setLeadsByStage(groupedLeads)
    }
  }, [allLeads])

  // Handle drag start
  const handleDragStart = (event) => {
    const { active } = event
    setActiveId(active.id)
    setActiveLead(active.data.current?.lead)
    setActiveStage(active.data.current?.stage)
  }

  // Handle drag end
  const handleDragEnd = (event) => {
    const { active, over } = event

    if (!over) {
      // Dropped outside a droppable area
      setActiveId(null)
      setActiveLead(null)
      setActiveStage(null)
      return
    }

    // Get the data from the active and over elements
    const activeData = active.data.current
    const overData = over.data.current

    // Check if we're dropping on a stage
    if (overData?.type === "stage") {
      const newStage = overData.stageName
      const oldStage = activeStage

      // Only proceed if the stage has changed
      if (newStage !== oldStage) {
        // Move lead to new stage
        setLeadsByStage((prev) => {
          const updatedLeads = { ...prev }

          // Find and remove lead from old stage
          const leadIndex = updatedLeads[oldStage].findIndex((lead) => lead.id === active.id)
          if (leadIndex !== -1) {
            const [movedLead] = updatedLeads[oldStage].splice(leadIndex, 1)

            // Update lead status to new stage
            movedLead.status = newStage

            // Add lead to new stage
            updatedLeads[newStage].push(movedLead)
          }

          return updatedLeads
        })

        // Here you would typically call an API to update the lead's status
        console.log(`Moved lead ${active.id} from ${oldStage} to ${newStage}`)
        // Example API call (uncomment and adapt as needed):
        // updateLeadStatus(active.id, newStage);
        changeLeadStatus({ id: active.id, status: newStage });
      }
    }

    // Reset active states
    setActiveId(null)
    setActiveLead(null)
    setActiveStage(null)
  }

  if (isLoading) return <p className="p-6">Loading leads...</p>
  if (isError) return <p>Error fetching leads.</p>

  return (
    <div className="px-[10px] pt-[30px] bg-gray-100 min-h-screen overflow-x-auto flex justify-center">
      <div className="w-full max-w-[1600px]">
        <h1 className="text-3xl font-bold">Lead's Pipeline</h1>
        <p className="text-gray-500 mb-6">Monitor the current stage of each lead in the sales process.</p>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToWindowEdges]}
        >
          <div className="grid md:grid-cols-6 gap-4 justify-items-center">
            {pipelineStages.map((stage) => (
              <StageContainer key={stage.name} stage={stage}>
                <SortableContext
                  items={leadsByStage[stage.name]?.map((lead) => lead.id) || []}
                  strategy={verticalListSortingStrategy}
                >
                  {Array.isArray(leadsByStage[stage.name]) && leadsByStage[stage.name].length > 0 ? (
                    leadsByStage[stage.name].map((lead) => (
                      <SortableLeadCard key={lead.id} lead={lead} stage={stage.name} />
                    ))
                  ) : (
                    <p className="p-2 text-center">No leads for this stage.</p>
                  )}
                </SortableContext>
              </StageContainer>
            ))}
          </div>

          {/* Drag Overlay - shows while dragging */}
          <DragOverlay
            // adjustScale={true} 
            modifiers={[restrictToWindowEdges]}
            dropAnimation={{
              duration: 250,
              easing: "cubic-bezier(0.2, 0, 0, 1)",
            }}>
            {activeId && activeLead ? (
              <LeadCard
                name={activeLead.name}
                phone={activeLead.phone}
                email={activeLead.email}
                title={activeLead.title}
                company={activeLead.company}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  )
}

export default Pipelines

