import {FloatingDock} from "@/app/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconHome,
    IconTool, IconUser
} from "@tabler/icons-react";

export default function Navbar() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "Projects",
            icon: (
                <IconTool  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/projects",
        },
        {
            title: "About",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <FloatingDock
            desktopClassName="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
            mobileClassName="fixed bottom-4 md:bottom-8 right-4"
            items={links}
        />
    )
}