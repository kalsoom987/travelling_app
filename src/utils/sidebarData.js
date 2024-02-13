import { AiOutlineDashboard } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GoChecklist } from "react-icons/go";
import { BsCart4, BsCartPlus } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const SidebarData = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: AiOutlineDashboard,
    children: [],
  },
  {
    name: "Users",
    icon: FiUsers,
    isChildOpen: false,
    children: [
      {
        name: "User List",
        path: "/admin/users-list",
        icon: BsCart4,
      },
    ],
  },
  {
    name: "Tours",
    icon: HiOutlineShoppingBag,
    isChildOpen: false,
    children: [
      {
        name: "Tours List",
        path: "/admin/tours/tours-list",
        icon: BsCart4,
      },
      {
        name: "Create Tour",
        path: "/admin/tours/create-tour",
        icon: BsCartPlus,
      },
    ],
  },
  {
    name: "Contact Support",
    icon: GoChecklist,
    path: "/admin/contact-support",
    isChildOpen: false,
    children: [],
  },
];
