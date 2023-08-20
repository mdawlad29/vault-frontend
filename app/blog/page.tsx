"use client"
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const GlobalMetadata = dynamic(() => import("../globalMetadata"), {
  ssr: false,
});

const BlogPage = () => {
  return (
    <>
      <GlobalMetadata title="Blog - Foody" description="Foody portfolio" />
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

export default BlogPage;
