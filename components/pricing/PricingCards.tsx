"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

export function PricingCards() {
    const handleCheckout = async (priceId: string) => {
        // Placeholder for Stripe Checkout logic
        console.log("Redirecting to checkout for:", priceId);
        alert("Stripe Integration: This would redirect to Stripe Checkout for " + priceId);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PRO TIER */}
            <Card className="border-2 border-gray-200 shadow-lg hover:border-gray-300 transition-all relative overflow-hidden">
                <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold font-heading uppercase tracking-wider text-gray-600">Pro Partner</CardTitle>
                    <div className="mt-4">
                        <span className="text-4xl font-bold text-gray-900">$29.99</span>
                        <span className="text-gray-500">/month</span>
                    </div>
                    <CardDescription className="mt-2">Perfect for establishing your local presence.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> <strong>Basic Sponsor Listing</strong></li>
                        <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Verified Business Badge</li>
                        <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Listed in 1 Category</li>
                        <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Direct Phone Link</li>
                        <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Standard Search Ranking</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button
                        onClick={() => handleCheckout("price_pro_tier_id")}
                        className="w-full font-bold uppercase tracking-wide"
                        variant="outline"
                    >
                        Select Pro
                    </Button>
                </CardFooter>
            </Card>

            {/* PREMIER TIER */}
            <Card className="border-2 border-primary shadow-2xl transform md:-translate-y-4 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg">
                    Most Popular
                </div>
                <CardHeader className="text-center pb-8 bg-secondary/5">
                    <CardTitle className="text-3xl font-bold font-heading uppercase tracking-wider text-primary flex items-center justify-center gap-2">
                        <Star className="h-6 w-6 fill-current" /> Premier <Star className="h-6 w-6 fill-current" />
                    </CardTitle>
                    <div className="mt-4">
                        <span className="text-5xl font-bold text-gray-900">$79.99</span>
                        <span className="text-gray-500">/month</span>
                    </div>
                    <CardDescription className="mt-2 text-primary font-medium">Dominate your local market.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> <strong>Priority &quot;Top of Search&quot; Placement</strong></li>
                        <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> <strong>Dedicated Profile Page</strong> (SEO Optimized)</li>
                        <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Photo Gallery & Portfolio</li>
                        <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Blog / Article Publishing</li>
                        <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Website Backlink (SEO Boost)</li>
                        <li className="flex items-center"><Check className="h-5 w-5 text-primary mr-2" /> Remove Competitor Ads</li>
                    </ul>
                </CardContent>
                <CardFooter className="pb-8">
                    <Button
                        onClick={() => handleCheckout("price_premier_tier_id")}
                        className="w-full h-12 text-lg font-bold uppercase tracking-wide shadow-lg shadow-primary/20"
                        size="lg"
                    >
                        Go Premier <Zap className="ml-2 h-5 w-5" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
