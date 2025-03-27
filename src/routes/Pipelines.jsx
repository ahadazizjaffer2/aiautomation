// // import { useEffect, useState } from "react";
// // import Boy from "../assets/Boy.png";
// // import { usePipelineQuery } from "../reactQuery/hooks/usePipelineQuery";

// // // Pipeline stages
// // const pipelineStages = [
// //   { name: "Discovery", color: "bg-green-200" },
// //   { name: "Evaluation", color: "bg-red-200" },
// //   { name: "Proposal", color: "bg-yellow-200" },
// //   { name: "Negotiation", color: "bg-blue-200" },
// //   { name: "Commit", color: "bg-purple-200" },
// //   { name: "Closed", color: "bg-[#D4E6A2]" },
// // ];

// // const LeadCard = ({ name, phone, email, title, company }) => {
// //   return (
// //     <div
// //       className="group rounded-xl transition-all md:w-56 w-70 hover:bg-gray-400 hover:text-white bg-white"
// //     >
// //       <div className="flex items-center gap-3 px-4 py-3">
// //         <img src={Boy} alt="Profile" className="w-10 h-10 rounded-full" />
// //         <div>
// //           <p className="">{name}</p>
// //           <p className="text-sm group-hover:text-white text-gray-500">{title} @ {company}</p>
// //         </div>
// //       </div>
// //       <p className="text-sm group-hover:text-white text-gray-500 mt-2 px-4">{phone}</p>
// //       <p className="text-sm group-hover:text-white text-gray-500 px-4 overflow-hidden text-ellipsis pb-4">{email}</p>
// //     </div>
// //   );
// // };

// // const Pipelines = () => {
// //   const { allLeads, isLoading, isError } = usePipelineQuery();
// //   const [leadsByStage, setLeadsByStage] = useState({});

// //   useEffect(() => {
// //     localStorage.removeItem("token");
// //     if (allLeads?.leads) {
// //       // Group leads by their status (pipeline stage)
// //       const groupedLeads = allLeads.leads.reduce((acc, lead) => {
// //         const { status } = lead;

// //         if (!acc[status]) {
// //           acc[status] = [];
// //         }

// //         acc[status].push(lead);
// //         return acc;
// //       }, {});

// //       setLeadsByStage(groupedLeads);
// //     }
// //   }, [allLeads]);

// //   if (isLoading) return <p className="p-6">Loading leads...</p>;
// //   if (isError) return <p className="p-6">Error fetching leads.</p>;

// //   return (
// //     <div className="px-[10px] pt-[30px] bg-gray-100 min-h-screen overflow-x-auto flex justify-center">
// //       <div className="w-full max-w-[1600px]">
// //         <h1 className="text-3xl font-bold">Lead’s Pipeline</h1>
// //         <p className="text-gray-500 mb-6">Monitor the current stage of each lead in the sales process.</p>
// //         <div className="grid md:grid-cols-6 gap-4 justify-items-center">
// //           {pipelineStages.map((stage) => (
// //             <div key={stage.name} className="flex justify-center">
// //               <div className="w-full md:max-w-[256px]">
// //                 <div className={`p-3 rounded-lg text-center ${stage.color} md:w-56 w-70 h-10 flex items-center justify-center`}>
// //                   {stage.name}
// //                 </div>
// //                 <div className="space-y-3 mt-3">
// //                   {Array.isArray(leadsByStage[stage.name]) && leadsByStage[stage.name].length > 0 ? (
// //                     leadsByStage[stage.name].map((lead) => (
// //                       <LeadCard
// //                         key={lead.id}
// //                         name={lead.name}
// //                         phone={lead.phone}
// //                         email={lead.email}
// //                         title={lead.title}
// //                         company={lead.company}
// //                       />
// //                     ))
// //                   ) : (
// //                     <p className="p-2">No leads for this stage.</p> 
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Pipelines;

// import { useEffect, useState } from "react";
// import Boy from "../assets/Boy.png";
// import { usePipelineQuery } from "../reactQuery/hooks/usePipelineQuery";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// // Pipeline stages
// const pipelineStages = [
//   { name: "Discovery", color: "bg-green-200" },
//   { name: "Evaluation", color: "bg-red-200" },
//   { name: "Proposal", color: "bg-yellow-200" },
//   { name: "Negotiation", color: "bg-blue-200" },
//   { name: "Commit", color: "bg-purple-200" },
//   { name: "Closed", color: "bg-[#D4E6A2]" },
// ];

// const LeadCard = ({ lead, moveLead }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "LEAD",
//     item: lead,  // The dragged item is the lead
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className={`group rounded-xl transition-all md:w-56 w-70 hover:bg-gray-400 hover:text-white bg-white ${
//         isDragging ? "opacity-50" : ""
//       }`}
//     >
//       <div className="flex items-center gap-3 px-4 py-3">
//         <img src={Boy} alt="Profile" className="w-10 h-10 rounded-full" />
//         <div>
//           <p>{lead.name}</p>
//           <p className="text-sm group-hover:text-white text-gray-500">
//             {lead.title} @ {lead.company}
//           </p>
//         </div>
//       </div>
//       <p className="text-sm group-hover:text-white text-gray-500 mt-2 px-4">{lead.phone}</p>
//       <p className="text-sm group-hover:text-white text-gray-500 px-4 overflow-hidden text-ellipsis pb-4">{lead.email}</p>
//     </div>
//   );
// };

// const PipelineStage = ({ stage, leads, moveLead }) => {
//   const [, drop] = useDrop(() => ({
//     accept: "LEAD",
//     drop: (item) => moveLead(item, stage.name),  // When dropped, change the status to the new stage
//   }));

//   return (
//     <div ref={drop} className="flex justify-center">
//       <div className="w-full md:max-w-[256px]">
//         <div className={`p-3 rounded-lg text-center ${stage.color} md:w-56 w-70 h-10 flex items-center justify-center`}>
//           {stage.name}
//         </div>
//         <div className="space-y-3 mt-3">
//           {Array.isArray(leads) && leads.length > 0 ? (
//             leads.map((lead) => (
//               <LeadCard key={lead.id} lead={lead} moveLead={moveLead} />
//             ))
//           ) : (
//             <p className="p-2">No leads for this stage.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Pipelines = () => {
//   const { allLeads, isLoading, isError } = usePipelineQuery();
//   const [leadsByStage, setLeadsByStage] = useState({});

//   useEffect(() => {
//     if (allLeads?.leads) {
//       // Group leads by their status (pipeline stage)
//       const groupedLeads = allLeads.leads.reduce((acc, lead) => {
//         const { status } = lead;

//         if (!acc[status]) {
//           acc[status] = [];
//         }

//         acc[status].push(lead);
//         return acc;
//       }, {});

//       setLeadsByStage(groupedLeads);
//     }
//   }, [allLeads]);

//   // const moveLead = (lead, newStatus) => {
//   //   // This function will update the lead's status and possibly notify the backend
//   //   const updatedLeads = { ...leadsByStage };
//   //   const currentStage = lead.status;
    
//   //   // Remove the lead from the current stage
//   //   updatedLeads[currentStage] = updatedLeads[currentStage].filter((l) => l.id !== lead.id);

//   //   // Update the lead status
//   //   lead.status = newStatus;

//   //   // Add the lead to the new stage
//   //   if (!updatedLeads[newStatus]) {
//   //     updatedLeads[newStatus] = [];
//   //   }
//   //   updatedLeads[newStatus].push(lead);

//   //   // Update state
//   //   setLeadsByStage(updatedLeads);

//   //   // Send the updated status to the backend (example)
//   //   // You can use a method like `updateLeadStatus(lead.id, newStatus)` to send the request to the backend
//   //   // For now, we are just logging it.
//   //   console.log(`Lead ${lead.id} status updated to ${newStatus}`);
//   // };

//   const moveLead = (lead, newStatus) => {
//     const updatedLeads = { ...leadsByStage };
  
//     // Ensure current stage exists
//     const currentStage = lead.status;
//     if (!updatedLeads[currentStage]) {
//       updatedLeads[currentStage] = [];
//     }
  
//     // Remove the lead from the current stage (if it exists)
//     updatedLeads[currentStage] = updatedLeads[currentStage].filter((l) => l.id !== lead.id);
  
//     // Ensure new status stage exists
//     if (!updatedLeads[newStatus]) {
//       updatedLeads[newStatus] = [];
//     }
  
//     // Update the lead's status and add it to the new status
//     lead.status = newStatus;
//     updatedLeads[newStatus].push(lead);
  
//     // Update state
//     setLeadsByStage(updatedLeads);
  
//     // Send the updated status to the backend (example)
//     console.log(`Lead ${lead.id} status updated to ${newStatus}`);
//   };
  

//   if (isLoading) return <p>Loading leads...</p>;
//   if (isError) return <p>Error fetching leads.</p>;

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="px-[10px] pt-[30px] bg-gray-100 min-h-screen overflow-x-auto flex justify-center">
//         <div className="w-full max-w-[1600px]">
//           <h1 className="text-3xl font-bold">Lead’s Pipeline</h1>
//           <p className="text-gray-500 mb-6">Monitor the current stage of each lead in the sales process.</p>
//           <div className="grid md:grid-cols-6 gap-4 justify-items-center">
//             {pipelineStages.map((stage) => (
//               <PipelineStage
//                 key={stage.name}
//                 stage={stage}
//                 leads={leadsByStage[stage.name]}
//                 moveLead={moveLead}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default Pipelines;


import { useEffect, useState } from "react";
import Boy from "../assets/Boy.png";
import { usePipelineQuery } from "../reactQuery/hooks/usePipelineQuery";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Pipeline stages
const pipelineStages = [
  { name: "Discovery", color: "bg-green-200" },
  { name: "Evaluation", color: "bg-red-200" },
  { name: "Proposal", color: "bg-yellow-200" },
  { name: "Negotiation", color: "bg-blue-200" },
  { name: "Commit", color: "bg-purple-200" },
  { name: "Closed", color: "bg-[#D4E6A2]" },
];

const LeadCard = ({ lead, moveLead }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "LEAD",
    item: lead,  // The dragged item is the lead
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`group rounded-xl transition-all md:w-56 w-70 hover:bg-gray-400 hover:text-white bg-white ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <img src={Boy} alt="Profile" className="w-10 h-10 rounded-full" />
        <div>
          <p>{lead.name}</p>
          <p className="text-sm group-hover:text-white text-gray-500">
            {lead.title} @ {lead.company}
          </p>
        </div>
      </div>
      <p className="text-sm group-hover:text-white text-gray-500 mt-2 px-4">{lead.phone}</p>
      <p className="text-sm group-hover:text-white text-gray-500 px-4 overflow-hidden text-ellipsis pb-4">{lead.email}</p>
    </div>
  );
};

const PipelineStage = ({ stage, leads, moveLead }) => {
  const [, drop] = useDrop(() => ({
    accept: "LEAD",
    drop: (item) => moveLead(item, stage.name),  // When dropped, change the status to the new stage
  }));

  return (
    <div ref={drop} className="flex justify-center">
      <div className="w-full md:max-w-[256px]">
        <div className={`p-3 rounded-lg text-center ${stage.color} md:w-56 w-70 h-10 flex items-center justify-center`}>
          {stage.name}
        </div>
        <div className="space-y-3 mt-3">
          {Array.isArray(leads) && leads.length > 0 ? (
            leads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} moveLead={moveLead} />
            ))
          ) : (
            <p className="p-2">No leads for this stage.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Pipelines = () => {
  const { allLeads, changeLeadStatus, isLoading, isError } = usePipelineQuery();
  const [leadsByStage, setLeadsByStage] = useState({});

  useEffect(() => {
    if (allLeads?.leads) {
      // Group leads by their status (pipeline stage)
      const groupedLeads = allLeads.leads.reduce((acc, lead) => {
        const { status } = lead;

        if (!acc[status]) {
          acc[status] = [];
        }

        acc[status].push(lead);
        return acc;
      }, {});

      setLeadsByStage(groupedLeads);
    }
  }, [allLeads, leadsByStage]);

  // const moveLead = (lead, newStatus) => {
  //   const updatedLeads = { ...leadsByStage };

  //   // Ensure current stage exists
  //   const currentStage = lead.status;
  //   if (!updatedLeads[currentStage]) {
  //     updatedLeads[currentStage] = [];
  //   }

  //   // Remove the lead from the current stage (if it exists)
  //   updatedLeads[currentStage] = updatedLeads[currentStage].filter((l) => l.id !== lead.id);

  //   // Ensure new status stage exists
  //   if (!updatedLeads[newStatus]) {
  //     updatedLeads[newStatus] = [];
  //   }

  //   // Update the lead's status and add it to the new status
  //   lead.status = newStatus;
  //   updatedLeads[newStatus].push(lead);

  //   // Update state
  //   setLeadsByStage(updatedLeads);

  //   // Send the updated status to the backend via the mutation function
  //   changeLeadStatus({ id: lead.id, status: newStatus }); // Pass lead id to the mutation
  // };

  const moveLead = (lead, newStatus) => {
    // Make a copy of the leadsByStage state
    const updatedLeads = { ...leadsByStage };
  
    // Ensure the current stage exists in the updatedLeads object
    const currentStage = lead.status;
    if (!updatedLeads[currentStage]) {
      updatedLeads[currentStage] = [];
    }
  
    // Remove the lead from the current stage (if it exists)
    updatedLeads[currentStage] = updatedLeads[currentStage].filter((l) => l.id !== lead.id);
  
    // Make a copy of the lead with the updated status (don't mutate the original lead)
    const updatedLead = { ...lead, status: newStatus };
  
    // Ensure new status stage exists in updatedLeads
    if (!updatedLeads[newStatus]) {
      updatedLeads[newStatus] = [];
    }
  
    // Add the updated lead to the new stage
    updatedLeads[newStatus].push(updatedLead);
  
    // Update state with the updated leads without overwriting the entire object
    setLeadsByStage({
      ...updatedLeads,  // Copy the existing stages and their leads
      [newStatus]: [...updatedLeads[newStatus]], // Add the updated lead to the new status stage
    });
  
    // Send the updated status to the backend via the mutation function
    changeLeadStatus({ id: lead.id, status: newStatus });
  };
  

  if (isLoading) return <p>Loading leads...</p>;
  if (isError) return <p>Error fetching leads.</p>;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="px-[10px] pt-[30px] bg-gray-100 min-h-screen overflow-x-auto flex justify-center">
        <div className="w-full max-w-[1600px]">
          <h1 className="text-3xl font-bold">Lead’s Pipeline</h1>
          <p className="text-gray-500 mb-6">Monitor the current stage of each lead in the sales process.</p>
          <div className="grid md:grid-cols-6 gap-4 justify-items-center">
            {pipelineStages.map((stage) => (
              <PipelineStage
                key={stage.name}
                stage={stage}
                leads={leadsByStage[stage.name]}
                moveLead={moveLead}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Pipelines;
