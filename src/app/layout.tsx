import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Jotion",
    description: "Jotion app",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/logo.svg",
                href: "/logo.svg"
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/logo-dark.svg",
                href: "/logo-dark.svg"
            }
        ]
    }
};

type RootLayoutProps = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
