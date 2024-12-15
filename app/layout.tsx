import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Lunchtype22 = localFont({
  src: "./fonts/Lunchtype22-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
}); 

export const metadata: Metadata = {
  title: "Jaguar Studio",
  description: "A product design studio dedicated to helping companies create digital design experiences infused with strategic vision and bold design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Lunchtype22.variable} ${Lunchtype22.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
