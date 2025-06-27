"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, Dumbbell, Shield, Route, Home, Newspaper, BotMessageSquare, TestTube2, Gamepad2, HeartPulse } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: Home,
  },
  {
    label: "Technology",
    icon: Cpu,
    subItems: [
      { href: "/tech", label: "Hot & Emerging", icon: BotMessageSquare },
      { href: "/tech/gadgets", label: "Gadget Zone", icon: Gamepad2 },
      { href: "/tech/forecasts", label: "Future Forecasts", icon: TestTube2 },
    ],
  },
  {
    label: "Sports",
    icon: Dumbbell,
    subItems: [
      { href: "/sports", label: "Breaking News", icon: Newspaper },
      { href: "/sports/training", label: "Training & Fitness", icon: HeartPulse },
      {
        label: "Interactive Tools",
        subItems: [
          { href: "/sports/match-simulator", label: "Match Simulator", icon: Shield },
          { href: "/sports/route-generator", label: "Route Generator", icon: Route },
        ],
      },
    ],
  },
];

export function MainNav() {
  const pathname = usePathname();

  const renderSubMenu = (subItems: any[], isDeep = false) => (
    <SidebarMenuSub>
      {subItems.map((subItem) => (
        <SidebarMenuSubItem key={subItem.label}>
          {subItem.href ? (
             <SidebarMenuSubButton asChild isActive={pathname === subItem.href}>
                <Link href={subItem.href}>
                  {subItem.icon && <subItem.icon />}
                  <span>{subItem.label}</span>
                </Link>
             </SidebarMenuSubButton>
          ) : (
            <SidebarMenuSubButton asChild>
              <div>
                {subItem.icon && <subItem.icon />}
                <span>{subItem.label}</span>
              </div>
            </SidebarMenuSubButton>
          )}
          {subItem.subItems && renderSubMenu(subItem.subItems, true)}
        </SidebarMenuSubItem>
      ))}
    </SidebarMenuSub>
  );

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          {item.href ? (
            <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
              <Link href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          ) : (
            <SidebarMenuButton tooltip={item.label}>
              <item.icon />
              <span>{item.label}</span>
            </SidebarMenuButton>
          )}
          {item.subItems && renderSubMenu(item.subItems)}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
