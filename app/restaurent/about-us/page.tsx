"use client";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
const GlobalMetadata = dynamic(() => import("../../globalMetadata"), {
  ssr: false,
});
const AboutUs = dynamic(() => import("../../../Components/About/AboutUs"), {
  ssr: false,
});

const AboutUsPage = () => {
  return (
    <>
      <GlobalMetadata title="About US - Foody" description="Foody portfolio" />
      <Box className="dark:!bg-darkColor dark:!text-neutral">
        <AboutUs />
      </Box>
    </>
  );
};

export default AboutUsPage;
