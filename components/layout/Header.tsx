import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-md">
                        <Image
                            src="/313serviceslogo.jpg"
                            alt="313 Services Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold font-heading tracking-tight text-primary">313.SERVICES</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/services/plumbing/detroit" className="transition-colors hover:text-primary">Plumbing</Link>
                    <Link href="/services/electrician/detroit" className="transition-colors hover:text-primary">Electrician</Link>
                    <Link href="/services/legal/detroit" className="transition-colors hover:text-primary">Legal</Link>
                    <Link href="/services/auto/detroit" className="transition-colors hover:text-primary">Auto</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Button variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-white">List Your Business</Button>
                    <Link href="/#lead-capture">
                        <Button>Find a Pro</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
