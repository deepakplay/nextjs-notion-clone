"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Poppins } from "next/font/google";
import Image from "next/image";


const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export default function Logo() {
    const { resolvedTheme } = useTheme();

    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                src={resolvedTheme === "light" ? "/logo.svg" : "/logo-dark.svg"}
                height="40"
                width="40"
                alt="Logo"
            />
            <p className={cn("font-semibold", poppinsFont.className)}>
                Jotion
            </p>
        </div>
    );
}