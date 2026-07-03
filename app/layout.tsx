import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SplashScreen } from "@/components/layout/SplashScreen";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { BackToTop } from "@/components/layout/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        
          {`(function(){try{var attrs=['bis_skin_checked','fdprocessedid','_ext','data-gr-ext'];function clean(){attrs.forEach(function(attr){document.querySelectorAll('['+attr+']').forEach(function(el){el.removeAttribute(attr);});});}clean();new MutationObserver(clean).observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:attrs});}catch(e){}})();`}
        
        <ScrollToTop />
        <ScrollProgress />
        <BackToTop />
        <LanguageProvider>
          <SplashScreen />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}






