import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollToTop } from "@/components/providers/ScrollToTop";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Comake Homes | Dubai Luxury Real Estate & Exclusive Properties",
  description:
    "Discover Dubai's most exclusive luxury properties with Comake Homes. Premium villas, waterfront residences, and high ROI investment opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>

        {/* DuoChat Widget */}
        <Script id="duochat-widget" strategy="afterInteractive">
          {`
  // DuoChat Widget - Includes "Powered by DuoChat" branding
  (function(w,d,s,u,o,k,a,m){
    w['DuoWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    a=d.createElement(s),m=d.getElementsByTagName(s)[0];
    a.async=1;a.src=u;m.parentNode.insertBefore(a,m);
  })(window,document,'script','https://duochat.io/widget.js','duo');

            duo('init', {
              "phoneNumber": "+971581161051",
              "label": "Comake Homes",
              "welcomeText": "Hello! How can we help you find your perfect luxury property in Dubai?",
              "messageText": "Speak with an Expert",
              "backgroundColor": "#09533f",
              "textColor": "#c89b3c",
              "icon": "whatsappLogo"
            });
          `}
        </Script>
      </body>
    </html>
  );
}
