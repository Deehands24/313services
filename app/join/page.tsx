import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingCards } from "@/components/pricing/PricingCards";

export default function JoinPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 bg-background">
                <div className="bg-secondary text-secondary-foreground py-20 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary">
                            Grow Your Business in the 313
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
                            Join Detroit&apos;s most exclusive network of verified professionals. Get more leads, better visibility, and build trust with local customers.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-20 -mt-10">
                    <PricingCards />

                    <div className="mt-20 text-center max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold font-heading mb-4">Why Join 313.services?</h3>
                        <p className="text-muted-foreground mb-8">
                            We aren&apos;t just a directory; we are a local authority. When you list with us, you borrow our trust.
                            Our &quot;Industrial Chic&quot; brand resonates with Detroiters who value hard work and authenticity.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div>
                                <h4 className="font-bold text-primary mb-2">Local SEO</h4>
                                <p className="text-sm text-muted-foreground">Our programmatic SEO engine puts your business in front of people searching for specific services in specific neighborhoods.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary mb-2">Trust Signal</h4>
                                <p className="text-sm text-muted-foreground">The &quot;313&quot; brand is iconic. Being a verified member tells customers you are a legitimate, local pro.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary mb-2">No Junk Leads</h4>
                                <p className="text-sm text-muted-foreground">We focus on high-intent customers who are ready to hire, not tire-kickers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
