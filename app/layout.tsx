"use client";
import React from "react";
import "./globals.css";
import "@fontsource/roboto/500.css";
import dynamic from "next/dynamic";
import CustomScrollBar from "../Shared/CustomScrollbar";
const GlobalMetadata = dynamic(() => import("./globalMetadata"), {
  ssr: false,
});
const Providers = dynamic(() => import("./providers"), {
  ssr: false,
});
const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
});
const Header = dynamic(() => import("@/Components/Layouts/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/Components/Layouts/Footer"), {
  ssr: false,
});

interface RootLayoutProps {
  children: React.ReactNode;
  scrollToTop: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeSwitcher />
          {/*  window={() => window} */}
          <GlobalMetadata
            title="Home - Foody"
            description="Foody portfolio"
          />
          <Header>{children}</Header>
          {children}
          <Footer />
          <CustomScrollBar
            length={250}
            cssDesign="fixed right-0 bottom-0 bg-secondary rounded-xl shadow-md z-20 transition duration-700 hover:scale-110 ease-in-out md:block text-neutral w-14 h-14 text-center p-1 cursor-pointer"
          >
            {(scrollToTop) => (
              <>
                <h2
                  onClick={scrollToTop}
                  className="inline w-8 h-8 text-3xl cursor-pointer"
                >
                  &#8593;
                </h2>
              </>
            )}
          </CustomScrollBar>
        </Providers>
      </body>
    </html>
  );
}
