import home from "@/public/assets/icons/home.png"
import profile from "@/public/assets/icons/profile.png";
import dashboard from "@/public/assets/icons/dashboard.png";
import staffs from "@/public/assets/icons/staffs.png";


export const getNavLinks = (userId: string | null) => [
  {
   icon : home, 
    label: "Home",
    route: "/",
  },
  {
    icon : staffs,
    label: "Staffs",
    route: "/staffs",
  },
  {
    icon : dashboard,
    label: "Dashboard",
    route: "/admin/dashboard",
  },
  {
    icon : profile,
    label: "Profile",
    route: userId ? `/users/${userId}` : "", // Use dynamic route
  },
];
