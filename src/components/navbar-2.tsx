import { Home, CircleUser,KeyRound, LucideIcon } from "lucide-react";

// import { useNavigate } from "react-router-dom";
import { ExpandableTabs } from "./ui/expandable-tabs";
import { DarkModeToggleCheckboxDemo } from "./theme-toggle";

function NavigationHome() {
  // const navigate = useNavigate(); // Use the navigation hook

  type TabItem =
  | { title: string; icon: LucideIcon; type?: never }
  | { type: "separator"; title?: never; icon?: never };

  const tabs:TabItem[] = [
    { title: "Home", icon: Home },
    { type: "separator" },
    { title: "Signup", icon: CircleUser },
    { title: "Login", icon: KeyRound },
    
  ];

  // const handleTabChange = (index :number|null) => {
  //   // Map tab index to corresponding routes
  //   const routes = ["/", null, "/settings"];
  //   const route = routes[index!];
  //   if (route) {
  //     navigate(route); // Navigate to the specified route
  //   }
  // };

  return (
    <div className="flex gap-4 mx-5 my-10 flex justify-center ">
      <ExpandableTabs tabs={tabs}  />
      <DarkModeToggleCheckboxDemo/>
    </div>
  );
}

export { NavigationHome };
