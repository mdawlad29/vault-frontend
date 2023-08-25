"use client";
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";
const GlobalMetadata = dynamic(() => import("../../globalMetadata"), {
  ssr: false,
});

const OurMenuPage = () => {
  return (
    <>
      <GlobalMetadata title="Our menu - Foody" description="Foody portfolio" />
      OurMenuPage
      <Box className="w-full h-screen flex justify-center items-center dark:bg-primary dark:text-neutral">
        <Typography
          component={"span"}
          variant="h4"
          display={"block"}
          textTransform={"uppercase"}
        >
          coming soon..!
        </Typography>
      </Box>
    </>
  );
};

export default OurMenuPage;
