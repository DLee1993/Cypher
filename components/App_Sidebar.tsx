"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Dot, Star } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
    {
        ciphers: [
            {
                title: "Caesar Cipher",
                url: "/cipher/caesar",
            },
            {
                title: "The Riddler",
                url: "/cipher/riddler",
            },
        ],
        playground: [
            {
                title: "Caesar Cipher",
                url: "/playground/caesar",
            },
            {
                title: "The Riddler",
                url: "/playground/riddler",
            },
        ],
    },
];

export default function AppSidebar() {
    const path = usePathname();

    return (
        <Sidebar className="text-foreground border-sidebar-border">
            <SidebarContent>
                <SidebarGroup className="px-0">
                    <SidebarGroupLabel>Overview</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems[0].ciphers.map((item, i) => (
                                <SidebarMenuItem key={i}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className="flex justify-between max-w-11/12 mx-auto"
                                        >
                                            <span
                                                className={
                                                    path === item.url
                                                        ? "text-foreground font-medium"
                                                        : "text-sidebar-foreground"
                                                }
                                            >
                                                {item.title}
                                            </span>
                                            <ChevronRight
                                                className={path === item.url ? "hidden" : "block"}
                                            />
                                            <Dot
                                                className={path !== item.url ? "hidden" : "block"}
                                            />
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className="px-0">
                    <SidebarGroupLabel>Playground</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems[0].playground.map((item, i) => (
                                <SidebarMenuItem key={i}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className="flex justify-between max-w-11/12 mx-auto"
                                        >
                                            <span
                                                className={
                                                    path === item.url
                                                        ? "text-foreground font-medium"
                                                        : "text-sidebar-foreground"
                                                }
                                            >
                                                {item.title}
                                            </span>
                                            <ChevronRight
                                                className={path === item.url ? "hidden" : "block"}
                                            />
                                            <Dot
                                                className={path !== item.url ? "hidden" : "block"}
                                            />
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="overflow-x-hidden border-t border-sidebar-border p-0 flex justify-center items-start">
                <SidebarMenuButton asChild className="h-12 rounded-none">
                    <Link href="/" className="text-sm w-full flex justify-between items-center">
                        Star on GitHub <Star size={14} />
                    </Link>
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    );
}

{
    /* <SidebarMenu className="ml-4"> */
}
{
    /* {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))} */
}
{
    /* </SidebarMenu> */
}
