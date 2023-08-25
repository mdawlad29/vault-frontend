import { Box, Typography } from "@mui/material";
import Image from "next/image";
import heroImg from "../../public/assets/images/RestaurantOrnament.png";
import dynamic from "next/dynamic";
const Dessert = dynamic(() => import("./Dessert"), { ssr: false });
const Drinks = dynamic(() => import("./Drinks"), { ssr: false });
const ReservationMenu = dynamic(() => import("./ReservationMenu"), {
  ssr: false,
});
const StarterMenu = dynamic(() => import("./StarterMenu"), { ssr: false });

const OurMenu = () => {
  return (
    <>
      <Box className="dark:bg-primary lg:space-y-20 md:space-y-16 space-y-7">
        <Box
          pt={{ md: 8, sm: 3, xs: 0 }}
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://vault.uicore.co/restaurant/wp-content/uploads/sites/55/2022/11/Restaurant-Our-Menu-Hero-Image.webp')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "contain",
            height: { md: "95vh", sm: "80vh", xs: "60vh" },
            backgroundAttachment: "fixed",
          }}
        >
          <Box className="flex justify-center items-center h-full px-2 text-neutral lg:pt-0 md:pt-10 pt-8">
            <Box className="lg:space-y-5 md:space-y-3 space-y-2">
              <Typography
                component="div"
                variant={"subtitle2"}
                fontSize={12}
                textAlign={"center"}
                textTransform={"uppercase"}
                sx={{ letterSpacing: "0.3em" }}
                className="text-primary"
              >
                DELICIOUS & AMAZING
              </Typography>
              <Image
                src={heroImg}
                alt="Hero Subtitle Image"
                className="w-28 mx-auto"
              />
              <Typography
                component="div"
                variant={"h4"}
                fontSize={{ md: 80, sm: 60 }}
                textAlign={"center"}
                width={{ md: 700, xs: 1 }}
              >
                Our Menu
              </Typography>
            </Box>
          </Box>
        </Box>
        {/*--- Starter Menu ----*/}
        <StarterMenu />
        {/*--- Reservation ----*/}
        <ReservationMenu />
        {/*--- Dessert ----*/}
        <Dessert />
        {/*--- Drink ----*/}
        <Drinks />
      </Box>
    </>
  );
};

export default OurMenu;
