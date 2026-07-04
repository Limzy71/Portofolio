import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

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
  title: "Ikhsan - Full Stack Developer & Software Engineer Enthusiast",
  description: "Personal portfolio website of La Ode Muh. Ikhsan Mbala",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <Script id="sanitize-extension-attrs" strategy="beforeInteractive">
          {`(function () {
  try {
    var attrs = ['bis_skin_checked', 'fdprocessedid', '_ext', 'data-gr-ext'];
    function clean() {
      attrs.forEach(function (attr) {
        document.querySelectorAll('[' + attr + ']').forEach(function (el) {
          el.removeAttribute(attr);
        });
      });
    }
    clean();
    new MutationObserver(clean).observe(document.documentElement, {
      subtree: true,
      attributes: true,
      attributeFilter: attrs,
    });
  } catch (e) {
    // No-op: this safeguard should never break rendering.
  }
})();`}
        </Script>
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






