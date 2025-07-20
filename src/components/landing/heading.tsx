import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Heading() {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Jotion</span>
            </h1>
            <h2 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion is the connected workspace where <br />
                better, faster work happens.
            </h2>

            <Button>
                Get Jotion Free <ArrowRight />
            </Button>
        </div>
    );
}