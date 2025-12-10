"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, CheckCircle } from "lucide-react";

interface QuoteModalProps {
    businessName: string;
    isOpen: boolean;
    onClose: () => void;
}

export function QuoteModal({ businessName, isOpen, onClose }: QuoteModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>

                <div className="p-6">
                    {!isSubmitted ? (
                        <>
                            <h2 className="text-2xl font-bold font-heading mb-2">Request a Quote</h2>
                            <p className="text-sm text-muted-foreground mb-6">
                                Get a free quote from <span className="font-bold text-primary">{businessName}</span>.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Your Name</label>
                                    <Input required placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email Address</label>
                                    <Input required type="email" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                                    <Input required type="tel" placeholder="(313) 555-0123" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Project Details</label>
                                    <textarea
                                        className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        required
                                        placeholder="Describe what you need done..."
                                    />
                                </div>
                                <Button type="submit" className="w-full font-bold uppercase">
                                    Send Request
                                </Button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-2">Request Sent!</h3>
                            <p className="text-muted-foreground mb-6">
                                {businessName} has received your request and will contact you shortly.
                            </p>
                            <Button onClick={onClose} variant="outline" className="w-full">
                                Close
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
