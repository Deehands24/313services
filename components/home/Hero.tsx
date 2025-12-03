import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center text-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/313servicesaction.jpg"
                    alt="Detroit Services Action"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
            </div>
            <div className="relative z-10 container mx-auto px-4 space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tighter">
                        FIND THE BEST SERVICES <br /> IN THE <span className="text-primary">313</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
                        The Motor City&apos;s most trusted directory for verified local professionals.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10">
                    <Input
                        type="text"
                        placeholder="What do you need help with? (e.g. Plumber, Lawyer)"
                        className="bg-white text-black h-14 text-lg placeholder:text-gray-500"
                    />
                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold uppercase tracking-wide">
                        <Search className="mr-2 h-5 w-5" /> Search
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-8 text-white/60 text-sm font-medium uppercase tracking-widest">
                    <span>Verified Pros</span>
                    <span>•</span>
                    <span>Local Reviews</span>
                    <span>•</span>
                    <span>Detroit First</span>
                </div>
            </div>
        </section>
    );
}
