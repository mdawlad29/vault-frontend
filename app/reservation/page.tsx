"use client"
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";
const GlobalMetadata = dynamic(() => import("../globalMetadata"), {
  ssr: false,
});

const ReservationPage = () => {
  return (
    <>
      <GlobalMetadata
        title="Reservation - Foody"
        description="Foody portfolio"
      />
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

export default ReservationPage;
