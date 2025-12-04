"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/listings";
import { ArrowRight } from "lucide-react";

export function LeadCapture() {
    return (
        <section id="lead-capture" className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 uppercase tracking-wide">
                    Want 313.services to find your pro for you?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Tell us what you need, and we&apos;ll match you with verified local experts who are ready to help.
                </p>

                <form className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-4 text-left">
                    <div className="md:col-span-4">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Your Email</label>
                        <Input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-gray-50 border-gray-200 text-gray-900"
                            required
                        />
                    </div>

                    <div className="md:col-span-4">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Service Needed</label>
                        <select className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900">
                            <option value="">Select a Category</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="md:col-span-12">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Job Description <span className="text-xs font-normal text-gray-500">(Min 15 chars)</span></label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900"
                            placeholder="Describe your project in detail so we can find the right pro..."
                            minLength={15}
                            required
                        />
                    </div>

                    <div className="md:col-span-12">
                        <Button size="lg" className="w-full text-lg font-bold uppercase h-12 bg-black hover:bg-gray-800 text-white">
                            Get Matched Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <p className="text-xs text-gray-400 mt-2 text-center">
                            By clicking, you agree to receive quotes from 313.services partners.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}
