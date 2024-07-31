"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { IntlProvider } from "./providers/intl";
import { ContextProvider } from "./providers/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <IntlProvider>
          <ContextProvider>
            {children}
          </ContextProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
