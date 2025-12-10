"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { listings, categories } from "@/data/listings";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, CheckCircle } from "lucide-react";
import { QuoteModal } from "@/components/listings/QuoteModal";
import { useState, use } from "react";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        category: string;
        city: string;
    }>;
}

export default function ServicePage({ params }: Props) {
    const { category: categoryId, city } = use(params);
    const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);

    const category = categories.find(c => c.id === categoryId);
    if (!category) notFound();

    const cityName = city.charAt(0).toUpperCase() + city.slice(1);

    const cityListings = listings.filter(
        l => l.category === categoryId && l.city.toLowerCase() === city.toLowerCase()
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 bg-background">
                <div className="bg-secondary text-secondary-foreground py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary">
                            {category.name} in {cityName}
                        </h1>
                        <p className="text-xl text-gray-400">
                            Showing {cityListings.length} verified professionals in your area.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cityListings.map((listing) => (
                            <Card key={listing.id} className="hover:shadow-lg transition-shadow border-primary/10 flex flex-col">
                                <CardHeader>
                                    <div className="flex justify-between items-start gap-4">
                                        <CardTitle className="text-xl font-bold">{listing.businessName}</CardTitle>
                                        {listing.isVerified && (
                                            <Badge variant="secondary" className="bg-green-100 text-green-800 shrink-0">
                                                <CheckCircle className="h-3 w-3 mr-1" /> Verified
                                            </Badge>
                                        )}
                                    </div>
                                    <CardDescription className="flex items-center mt-2">
                                        <div className="flex text-yellow-500 mr-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`h-4 w-4 ${i < Math.floor(listing.rating) ? "fill-current" : "text-gray-300"}`} />
                                            ))}
                                        </div>
                                        <span className="font-bold text-foreground">{listing.rating}</span>
                                        <span className="mx-1">·</span>
                                        <span>{listing.reviewCount} reviews</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{listing.description}</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-2 text-primary" /> {listing.address}, {listing.city}
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Phone className="h-4 w-4 mr-2 text-primary" /> {listing.phone}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    {listing.tier === 'premier' ? (
                                        <Button
                                            onClick={() => setSelectedBusiness(listing.businessName)}
                                            className="w-full font-bold uppercase"
                                        >
                                            Request Quote
                                        </Button>
                                    ) : (
                                        <Button variant="outline" className="w-full" disabled>
                                            Call for Quote
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}

                        {cityListings.length === 0 && (
                            <div className="col-span-full text-center py-20 bg-secondary/5 rounded-lg border border-dashed border-secondary/20">
                                <p className="text-xl text-muted-foreground mb-4">No listings found for {category.name} in {cityName} yet.</p>
                                <p className="text-muted-foreground mb-8">Be the first to list your business in this category!</p>
                                <Button size="lg" className="font-bold">List Your Business Free</Button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />

            <QuoteModal
                businessName={selectedBusiness || ""}
                isOpen={!!selectedBusiness}
                onClose={() => setSelectedBusiness(null)}
            />
        </div>
    );
}
