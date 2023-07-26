"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/assets/images/RestaurantOrnament.png";

const Hero = () => {
  return (
    <>
      <Box
        pt={{ md: 8, sm: 3, xs: 0 }}
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://hungerstation.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3e3d49db.jpg&w=1440&q=75')`,
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
              delightful experience
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
              Flavors Inspired by the Seasons
            </Typography>
            <Box textAlign={"center"} pt={{ md: 7, sm: 3, xs: 2 }}>
              <Link href="/our-menu">
                <Button
                  sx={{
                    width: { md: 240 },
                    fontSize: 14,
                    border: "2px solid #E4C590 !important",
                    color: "#E4C590 !important",
                    borderRadius: "unset",
                    letterSpacing: "0.2em",
                    py: { md: 2 },
                    "&:hover": {
                      backgroundColor: "#E4C590 !important",
                      color: "#000 !important",
                    },
                  }}
                  variant="outlined"
                >
                  view our menu
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
