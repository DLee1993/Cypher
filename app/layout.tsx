import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "CypherCraft — Explore the Art of Secure Communication",
    description:
        "CypherCraft is an interactive cryptography playground where users can encode, decode, and learn about classic and modern cipher algorithms through hands-on tools and animated feedback.",
    icons: {
        icon: "/logo.svg",
    },
    metadataBase: new URL("https://cyphercraft.dev"), // Replace with your actual domain
    openGraph: {
        title: "CypherCraft — Explore the Art of Secure Communication",
        description:
            "Hands-on cryptography tools and educational insights. Learn how secure communication works with CypherCraft.",
        url: "https://cyphercraft.dev",
        siteName: "CypherCraft",
        images: [
            {
                url: "/og-image.png", // Place this in your public folder
                width: 1200,
                height: 630,
                alt: "CypherCraft App Preview",
            },
        ],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CypherCraft — Explore the Art of Secure Communication",
        description:
            "Explore classic and modern ciphers with CypherCraft — a sleek, educational cryptography playground.",
        images: ["/twitter-image.png"], // Optional: can be same as og-image
        creator: "@yourTwitterHandle", // Optional
    },
    authors: [
        {
            name: "David Lee",
            url: "https://yourpersonalwebsite.com", // Replace with your actual site
        },
    ],
    creator: "David Lee",
    keywords: [
        "cryptography",
        "cipher",
        "encryption",
        "Caesar cipher",
        "Vigenère cipher",
        "XOR",
        "Base64",
        "secure communication",
        "interactive learning",
        "CypherCraft",
    ],
    category: "education",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.className} antialiased bg-background text-foreground`}>
                <SidebarProvider defaultOpen={false}>
                    <main>{children}</main>
                </SidebarProvider>
            </body>
        </html>
    );
}
