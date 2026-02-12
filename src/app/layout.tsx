import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: "Escoramento.com",
  description: "Escoramento.com | O #1 em escoramentos de solos, estacas prancha e blindagens de valas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
