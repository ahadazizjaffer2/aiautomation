import { useState } from "react";
import { Calendar, Camera, BarChartIcon as ChartBar, Eye, Inbox, LineChart, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: Camera, slug: "/" },
  { name: "AI Lead Scout", icon: User, slug: "ai-lead-scouts" },
  { name: "Email Accounts", icon: Mail, slug: "email-accounts" },
  { name: "Multibox", icon: Inbox, slug: "multi-box" },
  { name: "Analytics", icon: ChartBar, slug: "analytics" },
  { name: "Website Visitors", icon: Eye, slug: "website-visitor" },
  { name: "Pipeline", icon: LineChart, slug: "pipelines" },
  { name: "Calendar", icon: Calendar, slug: "calender" },
];

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-zinc-900 text-white cursor-pointer transition-all duration-300 z-10 ease-in-out ${isExpanded ? "w-48" : "w-16"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4">
        <p className={`flex items-center gap-2 overflow-hidden whitespace-nowrap font-semibold ${isExpanded ? "opacity-100" : "opacity-0"}`}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-orange-500">
            Q
          </div>
          <span>{isExpanded && "QuickPipe.Ai"}</span>
        </p>
      </div>

      <nav className="mt-4 space-y-2 px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.name}
              to={item.slug || "#"} // Default to "#" if no slug, but all should have slugs now
              className={`flex items-center gap-4 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-zinc-800 ${!isExpanded ? "justify-center" : ""}`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className={`overflow-hidden whitespace-nowrap transition-opacity ${isExpanded ? "opacity-100" : "opacity-0 w-0"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;