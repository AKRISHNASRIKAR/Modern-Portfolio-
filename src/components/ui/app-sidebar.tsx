import { Home, AppWindow, Star, BriefcaseBusiness } from "lucide-react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: AppWindow,
  },
  {
    title: "Experience",
    url: "/Experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Reviews",
    url: "/reviews",
    icon: Star,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="flex flex-col justify-between text--primary-foreground ">
      <SidebarContent className="flex flex-1 flex-col justify-center">
        <SidebarGroup>
          <SidebarGroupLabel className="text-center text-sm  font-semibold text-muted-foreground mb-6">
            Krishna&apos;s Portfolio
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="h-14">
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2 text-base"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="flex flex-row items-center gap-3 p-4 text-xs text-muted-foreground">
        <Image
          src="/avatar.png"
          alt="Krishna's Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-row">
          <h1 className="font-bold text-2xs">Krishna</h1>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
