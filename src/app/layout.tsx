import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Scraping",
    description: "Scraping by made Raj Ilyas",
    icons: {
        icon: '/logo.svg'
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <main className="main-content">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
