"use client";
import dynamic from "next/dynamic";
const GlobalMetadata = dynamic(() => import("../../globalMetadata"), {
  ssr: false,
});
const OurMenu = dynamic(() => import("@/Components/OurMenu/OurMenu"), {
  ssr: false,
});

const OurMenuPage = () => {
  return (
    <>
      <GlobalMetadata title="Our menu - Foody" description="Foody portfolio" />
      <OurMenu />
    </>
  );
};

export default OurMenuPage;
