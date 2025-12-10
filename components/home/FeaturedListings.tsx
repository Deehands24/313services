"use client";

import { listings } from "@/data/listings";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { QuoteModal } from "@/components/listings/QuoteModal";
import { useState } from "react";

export function FeaturedListings() {
    const featured = listings.filter(l => l.tier === 'premier');
    const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);

    return (
        <section className="py-20 bg-secondary/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">Featured Detroit Pros</h2>
                        <p className="text-muted-foreground">Top-rated businesses serving the 313 area code.</p>
                    </div>
                    <Button variant="link" className="text-primary font-bold group">
                        View All Listings <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((listing) => (
                        <Card key={listing.id} className="border-primary/20 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-card">
                            <div className="h-1.5 bg-gradient-to-r from-primary to-orange-600 w-full" />
                            <CardHeader>
                                <div className="flex justify-between items-start gap-4">
                                    <CardTitle className="text-xl font-bold font-heading leading-tight group-hover:text-primary transition-colors">
                                        {listing.businessName}
                                    </CardTitle>
                                    {listing.isVerified && (
                                        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100 shrink-0">
                                            <CheckCircle className="h-3 w-3 mr-1" /> Verified
                                        </Badge>
                                    )}
                                </div>
                                <CardDescription className="flex items-center mt-2">
                                    <div className="flex items-center text-yellow-500 mr-2">
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                    </div>
                                    <span className="font-bold text-foreground">{listing.rating}</span>
                                    <span className="mx-1 text-muted-foreground">·</span>
                                    <span className="text-muted-foreground underline decoration-dotted">{listing.reviewCount} reviews</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                                    {listing.description}
                                </p>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center text-muted-foreground">
                                        <MapPin className="h-4 w-4 mr-3 text-primary" />
                                        <span className="font-medium text-foreground">{listing.city}, {listing.zip}</span>
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <Phone className="h-4 w-4 mr-3 text-primary" />
                                        <span className="font-medium text-foreground">{listing.phone}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-2">
                                <Button
                                    onClick={() => setSelectedBusiness(listing.businessName)}
                                    className="w-full font-bold uppercase tracking-wide"
                                >
                                    Request Quote
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            <QuoteModal
                businessName={selectedBusiness || ""}
                isOpen={!!selectedBusiness}
                onClose={() => setSelectedBusiness(null)}
            />
        </section>
    );
}
