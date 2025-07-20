import Footer from "@/components/landing/footer";
import Heading from "@/components/landing/heading";
import Heros from "@/components/landing/heros";

export default function MarketingPage() {
    return (
        <div className="min-h-full flex flex-col">
            <div className="flex flex-col flex-1 items-center justify-center md:justify-start gap-y-8 px-6 pb-10 text-center">
                <Heading />
                <Heros />
            </div>
            <Footer />
        </div>
    );
}