import Image from "next/image";


export default function Heros() {

    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                    <Image
                        src="/documents.png"
                        fill
                        className="object-contain dark:hidden block"
                        alt="Documents"
                    />
                    <Image
                        src="/documents-dark.png"
                        fill
                        className="object-contain dark:block hidden"
                        alt="Documents"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                        src="/reading.png"
                        fill
                        className="object-contain dark:hidden block"
                        alt="Reading"
                    />

                    <Image
                        src="/reading-dark.png"
                        fill
                        className="object-contain dark:block hidden"
                        alt="Reading"
                    />
                </div>
            </div>
        </div>
    );
}