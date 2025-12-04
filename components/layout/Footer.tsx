import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-heading text-primary">313.SERVICES</h3>
                        <p className="text-sm text-gray-400">
                            The Motor City&apos;s premium directory for verified local professionals. Connecting Detroiters with the best services in the 313.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/services/plumbing/detroit" className="hover:text-primary transition-colors">Plumbing</Link></li>
                            <li><Link href="/services/electrician/detroit" className="hover:text-primary transition-colors">Electrician</Link></li>
                            <li><Link href="/services/legal/detroit" className="hover:text-primary transition-colors">Legal Defense</Link></li>
                            <li><Link href="/services/auto/detroit" className="hover:text-primary transition-colors">Auto Repair</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">For Businesses</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/join" className="hover:text-primary transition-colors">Claim Your Listing</Link></li>
                            <li><Link href="/join" className="hover:text-primary transition-colors">Advertise with Us</Link></li>
                            <li><Link href="/join" className="hover:text-primary transition-colors">Partner Program</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} 313.services. All rights reserved. Built for Detroit.
                </div>
            </div>
        </footer>
    );
}
