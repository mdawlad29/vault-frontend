import React from "react";
import dynamic from "next/dynamic";
const GlobalMetadata = dynamic(() => import("../globalMetadata"), {
  ssr: false,
});

const OurMenuPage = () => {
  return (
    <>
      <GlobalMetadata title="Our menu - Foody" description="Foody portfolio" />
      OurMenuPage
    </>
  );
};

export default OurMenuPage;
