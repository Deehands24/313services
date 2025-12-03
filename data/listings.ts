export interface Listing {
    id: string;
    businessName: string;
    category: string;
    slug: string;
    phone: string;
    website?: string;
    address?: string;
    city: string;
    zip: string;
    description: string;
    isVerified: boolean;
    isPremium: boolean;
    rating: number;
    reviewCount: number;
    imageUrl?: string;
}

export const listings: Listing[] = [
    {
        id: "1",
        businessName: "Motor City Plumbing Pros",
        category: "plumbing",
        slug: "motor-city-plumbing-pros",
        phone: "(313) 555-0101",
        website: "https://example.com",
        address: "123 Woodward Ave",
        city: "Detroit",
        zip: "48201",
        description: "Detroit's most trusted emergency plumbers. Available 24/7 for all your pipe and drain needs.",
        isVerified: true,
        isPremium: true,
        rating: 4.9,
        reviewCount: 124,
    },
    {
        id: "2",
        businessName: "313 Electric Co.",
        category: "electrician",
        slug: "313-electric-co",
        phone: "(313) 555-0102",
        address: "456 Gratiot Ave",
        city: "Detroit",
        zip: "48207",
        description: "Licensed and insured electricians serving the entire metro area. Residential and commercial.",
        isVerified: true,
        isPremium: true,
        rating: 4.8,
        reviewCount: 89,
    },
    {
        id: "3",
        businessName: "Detroit Legal Defenders",
        category: "legal",
        slug: "detroit-legal-defenders",
        phone: "(313) 555-0103",
        website: "https://example.com",
        address: "789 Jefferson Ave",
        city: "Detroit",
        zip: "48226",
        description: "Experienced attorneys fighting for your rights. Specializing in family law and criminal defense.",
        isVerified: true,
        isPremium: false,
        rating: 4.7,
        reviewCount: 56,
    },
    {
        id: "4",
        businessName: "Corktown Creative Studio",
        category: "creative",
        slug: "corktown-creative-studio",
        phone: "(313) 555-0104",
        website: "https://example.com",
        address: "101 Michigan Ave",
        city: "Detroit",
        zip: "48216",
        description: "Full-service design and marketing agency located in the heart of Corktown.",
        isVerified: true,
        isPremium: false,
        rating: 5.0,
        reviewCount: 32,
    },
    {
        id: "5",
        businessName: "Midtown Auto Repair",
        category: "auto",
        slug: "midtown-auto-repair",
        phone: "(313) 555-0105",
        address: "202 Cass Ave",
        city: "Detroit",
        zip: "48201",
        description: "Honest and reliable auto repair. We fix it right the first time.",
        isVerified: false,
        isPremium: false,
        rating: 4.5,
        reviewCount: 210,
    },
    {
        id: "6",
        businessName: "Belle Isle Landscaping",
        category: "home-services",
        slug: "belle-isle-landscaping",
        phone: "(313) 555-0106",
        city: "Detroit",
        zip: "48207",
        description: "Transforming your outdoor space into a beautiful oasis. Lawn care, hardscaping, and more.",
        isVerified: true,
        isPremium: false,
        rating: 4.6,
        reviewCount: 45,
    }
];

export const categories = [
    { id: "plumbing", name: "Plumbing", icon: "Wrench" },
    { id: "electrician", name: "Electrician", icon: "Zap" },
    { id: "legal", name: "Legal", icon: "Scale" },
    { id: "creative", name: "Creative", icon: "Palette" },
    { id: "auto", name: "Auto Repair", icon: "Car" },
    { id: "home-services", name: "Home Services", icon: "Home" },
];
