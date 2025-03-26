import { useEffect, useState } from "react";
import Boy from "../assets/Boy.png";
import { usePipelineQuery } from "../reactQuery/hooks/usePipelineQuery";

// Pipeline stages
const pipelineStages = [
  { name: "Discovery", color: "bg-green-200" },
  { name: "Evaluation", color: "bg-red-200" },
  { name: "Proposal", color: "bg-yellow-200" },
  { name: "Negotiation", color: "bg-blue-200" },
  { name: "Commit", color: "bg-purple-200" },
  { name: "Closed", color: "bg-[#D4E6A2]" },
];

const LeadCard = ({ name, phone, email, title, company }) => {
  return (
    <div
      className="group rounded-xl transition-all md:w-56 w-70 hover:bg-gray-400 hover:text-white bg-white"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <img src={Boy} alt="Profile" className="w-10 h-10 rounded-full" />
        <div>
          <p className="">{name}</p>
          <p className="text-sm group-hover:text-white text-gray-500">{title} @ {company}</p>
        </div>
      </div>
      <p className="text-sm group-hover:text-white text-gray-500 mt-2 px-4">{phone}</p>
      <p className="text-sm group-hover:text-white text-gray-500 px-4 overflow-hidden text-ellipsis pb-4">{email}</p>
    </div>
  );
};

const Pipelines = () => {
  const { allLeads, isLoading, isError } = usePipelineQuery();
  const [leadsByStage, setLeadsByStage] = useState({});

  useEffect(() => {
    localStorage.removeItem("token");
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
  }, [allLeads]);

  if (isLoading) return <p className="p-6">Loading leads...</p>;
  if (isError) return <p className="p-6">Error fetching leads.</p>;

  return (
    <div className="px-[10px] pt-[30px] bg-gray-100 min-h-screen overflow-x-auto flex justify-center">
      <div className="w-full max-w-[1600px]">
        <h1 className="text-3xl font-bold">Lead’s Pipeline</h1>
        <p className="text-gray-500 mb-6">Monitor the current stage of each lead in the sales process.</p>
        <div className="grid md:grid-cols-6 gap-4 justify-items-center">
          {pipelineStages.map((stage) => (
            <div key={stage.name} className="flex justify-center">
              <div className="w-full md:max-w-[256px]">
                <div className={`p-3 rounded-lg text-center ${stage.color} md:w-56 w-70 h-10 flex items-center justify-center`}>
                  {stage.name}
                </div>
                <div className="space-y-3 mt-3">
                  {Array.isArray(leadsByStage[stage.name]) && leadsByStage[stage.name].length > 0 ? (
                    leadsByStage[stage.name].map((lead) => (
                      <LeadCard
                        key={lead.id}
                        name={lead.name}
                        phone={lead.phone}
                        email={lead.email}
                        title={lead.title}
                        company={lead.company}
                      />
                    ))
                  ) : (
                    <p className="p-2">No leads for this stage.</p> 
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pipelines;
