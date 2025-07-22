import NavBar from "@/components/landing/navbar";

type LandingLayoutProps = {
    children: React.ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <NavBar />
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    );
}