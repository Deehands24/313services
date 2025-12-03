import Link from "next/link";
import { categories } from "@/data/listings";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Zap, Scale, Palette, Car, Home, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Wrench, Zap, Scale, Palette, Car, Home
};

export function CategoryGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Browse by Category</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Find exactly what you need from our curated list of top-rated local service providers.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat) => {
                        const Icon = iconMap[cat.icon];
                        return (
                            <Link key={cat.id} href={`/services/${cat.id}/detroit`}>
                                <Card className="hover:border-primary hover:shadow-lg transition-all cursor-pointer h-full group">
                                    <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                                        <div className="p-4 bg-secondary/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            {Icon && <Icon className="h-8 w-8" />}
                                        </div>
                                        <span className="font-bold text-center font-heading tracking-wide">{cat.name}</span>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
