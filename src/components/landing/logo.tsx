import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export default function Logo() {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                src="/logo-dark.svg"
                height="40"
                width="40"
                alt="Logo"
                className="dark:block hidden"

            />
            <Image
                src="/logo.svg"
                height="40"
                width="40"
                alt="Logo"
                className="dark:hidden block"
            />
            <p className={cn("font-semibold", poppinsFont.className)}>
                Jotion
            </p>
        </div>
    );
}