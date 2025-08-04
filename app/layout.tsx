import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
    applicationName: "Cypher",
    title: "Cypher - Explore the art of secure communication",
    description:
        "Delve into the world of cryptography with Cypher, your interactive gateway to the science of secrecy. Get hands-on with powerful cryptographic algorithms, uncover their real-world applications, and explore the fascinating mechanics behind secure communication.",
    authors: {
        name: "David Lee",
        url: "https://github.com/DLee1993",
    },
    creator: "David Lee",
    category: "Education",
    metadataBase: new URL("http://localhost:3000"),
    icons: {
        icon: "/assets/logo.svg"
    },
    keywords: [
        "cryptography",
        "cipher",
        "encryption",
        "secure communication",
        "Caesar cipher",
        "Vigenère cipher",
        "Base64",
        "XOR",
        "crypto playground",
        "educational app",
        "interactive learning",
        "secure messaging",
        "data obfuscation",
    ],
    openGraph: {
        title: "Cypher — Explore the Art of Secure Communication",
        description:
            "Delve into the world of cryptography with Cypher, your interactive gateway to the science of secrecy. Get hands-on with powerful cryptographic algorithms, uncover their real-world applications, and explore the fascinating mechanics behind secure communication.",
        url: "https://yourdomain.com/cypher",
        siteName: "Cypher",
        images: [
            {
                url: "/preview-image.webp",
                width: 1200,
                height: 630,
                alt: "Cypher App Preview",
            },
        ],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cypher — Explore the Art of Secure Communication",
        description:
            "Delve into the world of cryptography with Cypher, your interactive gateway to the science of secrecy. Get hands-on with powerful cryptographic algorithms, uncover their real-world applications, and explore the fascinating mechanics behind secure communication.",
        images: ["/preview-image.webp"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                <Header />
                <main>{children}</main>
                <footer>footer</footer>
            </body>
        </html>
    );
}
