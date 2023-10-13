import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page Using Next.js and Chakra UI",
  description: "Landing Page Using Next.js and Chakra UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <NavBar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
