import type { Metadata } from "next";
import { inter } from "@/fonts";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Employment Management App",
  description: "Built by Alchemy of Codes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}