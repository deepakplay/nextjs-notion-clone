import NavBar from "@/components/landing/navbar";

type LandingLayoutProps = {
    children: React.ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <div className="h-full">
            <NavBar />
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
    );
}