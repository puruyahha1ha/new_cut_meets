"use client";

import Link from "next/link";
import { Home, Search, Heart, User, Menu } from "lucide-react";
import { Button } from "@/features/list/components/Button";

const menuItems = [
    {
        icon: Home,
        label: "ホーム",
        href: "/",
    },
    {
        icon: Search,
        label: "探す",
        href: "/list",
    },
    {
        icon: Heart,
        label: "お気に入り",
        href: "/favorites",
    },
    {
        icon: User,
        label: "マイページ",
        href: "/profile",
    },
    {
        icon: Menu,
        label: "メニュー",
        href: "/menu",
    },
];

export default function MobileFooter() {

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t">
            <div className="flex items-center justify-around h-16">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex-1"
                    >
                        <Button
                            variant="ghost"
                            className="w-full h-full flex flex-col items-center justify-center gap-1 rounded-none"
                        >
                            <item.icon className="h-5 w-5" />
                            <span className="text-[10px]">{item.label}</span>
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}