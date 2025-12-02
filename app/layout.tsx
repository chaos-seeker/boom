import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";

const iransansx = localFont({
  src: "../public/fonts/iransansx/IRANSansXV.woff2",
  variable: "--font-iransans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "بوم",
  description: "توسعه دهنده : حمید شاهسونی",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${iransansx.variable} antialiased`}
      >
        {props.children}
      </body>
    </html>
  );
}
