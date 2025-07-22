"use client";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "../ModeToggle";

export default function NavBar() {
    const isScrolled = useScrollTop(50);

    return (
        <nav className={cn("z-50 bg-background fixed top-0 flex items-center w-full px-6 py-4 transition-shadow dark:bg-[#1F1F1F]",
            isScrolled &&
            ["border-b shadow-sm"],
            ["dark:border-b-0 dark:shadow-none"]
        )}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <ModeToggle />
                <span>
                    Login
                </span>
            </div>
        </nav>
    );
}