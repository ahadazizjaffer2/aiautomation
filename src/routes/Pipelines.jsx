import { useState } from "react";
import Boy from "../assets/Boy.png";

const pipelineStages = [
  { name: "Discovery", color: "bg-green-200", leads: ["Michael Regan", "Omar Culhane", "Jordyn Botosh"] },
  { name: "Evaluation", color: "bg-red-200", leads: ["Emerson Saris"] },
  { name: "Proposal", color: "bg-yellow-200", leads: ["Emerson Franci", "Aspen Vaccaro", "Ruben Torff", "Cristofer Workman"] },
  { name: "Negotiation", color: "bg-blue-200", leads: ["Carter Rosser", "Gustavo Geidt", "Leo Dorwart", "Lydia George"] },
  { name: "Commit", color: "bg-purple-200", leads: ["Kaiya Donin", "Gustavo Westervelt"] },
  { name: "Closed", color: "bg-[#D4E6A2]", leads: [] },
];

const LeadCard = ({ name }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl transition-all ${hover ? "bg-gray-400 text-white" : "bg-white"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <img src={Boy} alt="Profile" className="w-10 h-10 rounded-full" />
        <div>
          <p className="">{name}</p>
          <p className={`text-sm ${hover ? "text-white" : "text-gray-500"}`}>CEO @ Meta Inc.</p>
        </div>
      </div>
      <p className={`text-sm ${hover ? "text-white" : "text-gray-500"} mt-2 px-4`}>+1245 125 1254</p>
      <p className={`text-sm ${hover ? "text-white" : "text-gray-500"} px-4 pb-4`}>reganmichael@meta.com</p>
    </div>
  );
};

export default function Pipelines() {
  return (
    <div className="pl-[130px] pt-[30px] bg-gray-100 min-h-screen overflow-x-auto flex justify-center">
      <div className="w-full max-w-[1600px]">
        <h1 className="text-3xl font-bold">Lead’s Pipeline</h1>
        <p className="text-gray-500 mb-6">Monitor the current stage of each lead in the sales process.</p>
        <div className="grid grid-cols-6 gap-4 w-max justify-items-center">
          {pipelineStages.map((stage) => (
            <div key={stage.name} className="flex justify-center">
              <div className="w-full max-w-[256px]">
                <div className={`p-3 rounded-lg text-center ${stage.color} w-56 h-10 flex items-center justify-center`}>{stage.name}</div>
                <div className="space-y-3 mt-3">
                  {stage.leads.map((lead) => (
                    <LeadCard key={lead} name={lead} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}