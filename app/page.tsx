"use client";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const RecentUpdates = dynamic(
  () => import("@/Components/RecentUpdates/RecentUpdates"),
  {
    ssr: false,
  }
);
const OurVideo = dynamic(() => import("@/Components/OurVideo/OurVideo"), {
  ssr: false,
});
const MeetOurChef = dynamic(
  () => import("@/Components/MeetOurChef/MeetOurChef"),
  {
    ssr: false,
  }
);
const SpecialDishes = dynamic(
  () => import("@/Components/SpecialDishes/SpecialDishes"),
  {
    ssr: false,
  }
);
const Strength = dynamic(() => import("@/Components/Strength/Strength"), {
  ssr: false,
});
const Reservation = dynamic(
  () => import("@/Components/Reservation/Reservation"),
  {
    ssr: false,
  }
);
const BestSpecialties = dynamic(
  () => import("@/Components/BestSpecialties/BestSpecialties"),
  {
    ssr: false,
  }
);
const MainFlavors = dynamic(() => import("@/Components/Flavors/MainFlavors"), {
  ssr: false,
});
const DeliciousMenu = dynamic(
  () => import("@/Components/DeliciousMenu/DeliciousMenu"),
  {
    ssr: false,
  }
);
const Hero = dynamic(() => import("@/Components/Hero/Hero"), {
  ssr: false,
});
const GlobalMetadata = dynamic(() => import("./globalMetadata"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <GlobalMetadata title="Home - Foody" description="Foody portfolio" />
      <Box className="dark:!bg-darkColor bg-neutral">
        <Hero />
        <>
          <MainFlavors />
          <DeliciousMenu />
          <BestSpecialties />
          <Reservation />
          <Strength />
          <SpecialDishes />
          <MeetOurChef />
          <OurVideo />
          <RecentUpdates />
        </>
      </Box>
    </>
  );
}
