import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Paytm user app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Toaster richColors/>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
