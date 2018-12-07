import { MenuItemType, MenuItem } from "@vedacircle/navigator";

export const defaultMenu: MenuItem[] = [
  {
    link: "#banner",
    name: "Home",
    disabled: false
  },
  { link: "#about", name: "About", disabled: false, routerLink: "/home" },
  { link: "#features", name: "Features", disabled: false, routerLink: "/home" },
  { link: "#pricing", name: "Pricing", disabled: false, routerLink: "/home" },
  { link: "#help", name: "Help", disabled: false, routerLink: "/home/help" }

];
