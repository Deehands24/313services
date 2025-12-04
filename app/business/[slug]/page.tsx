import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { listings } from "@/data/listings";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Phone, Globe, Star, Clock, Shield } from "lucide-react";
import Image from "next/image";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BusinessProfilePage({ params }: Props) {
    const { slug } = await params;
    const listing = listings.find(l => l.slug === slug);

    if (!listing) notFound();

    // Mock data for Premier features
    const galleryImages = [
        "/313servicesaction.jpg",
        "/313servicesaction.jpg",
        "/313servicesaction.jpg"
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 bg-background">
                {/* Cover Image */}
                <div className="h-64 md:h-80 w-full relative bg-gray-900">
                    <Image
                        src="/313servicesaction.jpg"
                        alt="Cover"
                        fill
                        className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>

                <div className="container mx-auto px-4 -mt-32 relative z-10">
                    <div className="bg-card rounded-xl shadow-2xl border border-border p-8 mb-8">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Logo/Avatar */}
                            <div className="h-32 w-32 rounded-xl bg-primary flex items-center justify-center text-white text-4xl font-bold font-heading shrink-0 shadow-lg">
                                {listing.businessName.charAt(0)}
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground flex items-center gap-3">
                                            {listing.businessName}
                                            {listing.isVerified && (
                                                <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none px-3 py-1 text-sm">
                                                    <Shield className="h-3 w-3 mr-1" /> Premier Partner
                                                </Badge>
                                            )}
                                        </h1>
                                        <div className="flex items-center gap-2 mt-2 text-yellow-500">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(listing.rating) ? "fill-current" : "text-gray-300"}`} />
                                                ))}
                                            </div>
                                            <span className="font-bold text-foreground">{listing.rating}</span>
                                            <span className="text-muted-foreground">({listing.reviewCount} reviews)</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button size="lg" className="font-bold uppercase shadow-lg shadow-primary/20">Request Quote</Button>
                                        <Button size="lg" variant="outline" className="font-bold uppercase">Call Now</Button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        {listing.address}, {listing.city}, {listing.zip}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-primary" />
                                        {listing.phone}
                                    </div>
                                    {listing.website && (
                                        <div className="flex items-center gap-2">
                                            <Globe className="h-4 w-4 text-primary" />
                                            <a href={listing.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">Visit Website</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <section className="bg-card rounded-xl p-8 border border-border shadow-sm">
                                <h2 className="text-2xl font-bold font-heading mb-4">About Us</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {listing.description}
                                    <br /><br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </section>

                            <section className="bg-card rounded-xl p-8 border border-border shadow-sm">
                                <h2 className="text-2xl font-bold font-heading mb-6">Our Work</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {galleryImages.map((src, i) => (
                                        <div key={i} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                                            <Image
                                                src={src}
                                                alt={`Gallery ${i}`}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-card rounded-xl p-8 border border-border shadow-sm">
                                <h2 className="text-2xl font-bold font-heading mb-4">Services Offered</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {["Emergency Repairs", "Installations", "Maintenance", "Consultations", "Upgrades", "Inspections"].map((s, i) => (
                                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-green-500" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-card rounded-xl p-6 border border-border shadow-sm sticky top-24">
                                <h3 className="text-xl font-bold font-heading mb-4">Business Hours</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Monday - Friday</span>
                                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Saturday</span>
                                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Sunday</span>
                                        <span className="text-red-500 font-medium">Closed</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-border">
                                    <div className="flex items-center gap-2 text-green-600 font-bold">
                                        <Clock className="h-5 w-5" /> Open Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
