import { Home, LucideIcon, Settings } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { useNavigate } from "react-router-dom";

// Define the TabItem type based on expected structure
type TabItem =
  | { title: string; icon: LucideIcon; type?: never }
  | { type: "separator"; title?: never; icon?: never };

function DefaultDemo() {
  const navigate = useNavigate(); // Use the navigation hook

  // Explicitly type the tabs array
  const tabs: TabItem[] = [
    { title: "Dashboard", icon: Home },
    { type: "separator" },
    { title: "Settings", icon: Settings },
  ];

  const handleTabChange = (index: number|null) => {
    // Map tab index to corresponding routes
    const routes = ["/dashboard", null, "/settings"];
    const route = routes[index!];
    if (route) {
      navigate(route); // Navigate to the specified route
    }
  };

  return (
    <div className="flex gap-4">
      <ExpandableTabs tabs={tabs} onChange={handleTabChange} />
    </div>
  );
}

export { DefaultDemo };
