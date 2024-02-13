import { usePathname } from "next/navigation";

const AppBarContent = () => {
  const pathname = usePathname();
  if (pathname.includes("tours")) {
    return "Tours";
  } else if (pathname.includes("dashboard")) {
    return "Dashboard";
  } else if (pathname.includes("contact-support")) {
    return "Contact Support";
  } else if (pathname.includes("users")) {
    return "User Management";
  }
};

export default AppBarContent;
