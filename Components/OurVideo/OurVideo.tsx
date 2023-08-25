"use client";
import { Box, Typography, Container, Grid } from "@mui/material";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import patternImg from "../../public/assets/images/Restaurant-Pattern-1.png";
import Image from "next/image";
import CountUp from "react-countup";
import { AiFillPlayCircle } from "react-icons/ai";

const OurVideo = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://vault.uicore.co/restaurant/wp-content/uploads/sites/55/2022/11/Restaurant-Experience-BG.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "contain",
          height: { md: "125vh", sm: "150vh" },
        }}
        py={{ md: 8, sm: 15, xs: 10 }}
      >
        <Box sx={{ px: { md: 8, sm: 4, xs: 3 } }}>
          <Box className="flex justify-center items-center h-screen">
            <Box className="space-y-10">
              <Typography
                component="div"
                variant={"subtitle2"}
                fontSize={12}
                textAlign={"center"}
                textTransform={"uppercase"}
                sx={{ letterSpacing: "0.3em", mb: 2 }}
                className="text-primary"
              >
                AMAZING EXPERIENCE
              </Typography>
              <Image
                src={RestaurantOrnament}
                alt="Hero Subtitle Image"
                className="w-28 mx-auto"
              />
              <Typography
                component="div"
                variant="h3"
                display={"block"}
                fontSize={{ md: 48, sm: 36, xs: 24 }}
                className="text-neutral text-center capitalize"
              >
                Watch Our Video
              </Typography>
              <Box
                my={2}
                className="w-16 h-16 mx-auto rounded-full text-primary flex justify-center items-center cursor-pointer animate-ping bg-black opacity-50"
              >
                <AiFillPlayCircle className="border border-neutral flex justify-center items-center rounded-full w-9 h-9 text-neutral" />
              </Box>
              <Typography
                component="div"
                variant="h4"
                display={"block"}
                className="text-neutral text-center mx-auto px-4"
                width={{ md: 690, xs: 1 }}
                fontSize={{ md: 36, sm: 36, xs: 20 }}
              >
                A modern restaurant with a menu that will make your mouth water.
              </Typography>
              <Typography
                component="div"
                variant={"subtitle2"}
                fontSize={12}
                textAlign={"center"}
                textTransform={"uppercase"}
                sx={{ letterSpacing: "0.3em" }}
                className="text-primary"
              >
                WILLIUM JOE - MASTER CHEF
              </Typography>
              <Image src={patternImg} alt="pattern image" />
              <Grid container spacing={2}>
                {[...Array(4)]?.map((_, index) => (
                  <Grid key={index} item xs={6} sm={4} md={3}>
                    <Box className="text-neutral flex items-center gap-3 md:mx-6">
                      <Typography
                        component={"div"}
                        variant="h3"
                        display={"block"}
                        textAlign={"center"}
                        className=""
                        fontSize={{ md: 50, sm: 42, xs: 27 }}
                      >
                        <CountUp
                          end={
                            index === 0
                              ? 150
                              : index === 1
                              ? 120
                              : index === 2
                              ? 80
                              : 50
                          }
                          duration={5}
                        />
                        +
                      </Typography>
                      <Typography
                        component={"span"}
                        variant="subtitle2"
                        display={"block"}
                        textAlign={"center"}
                        textTransform={"uppercase"}
                        sx={{ letterSpacing: "0.3em" }}
                        fontWeight={300}
                        className="text-primary"
                        fontSize={{ md: 14, sm: 12, xs: 10 }}
                      >
                        {index === 0
                          ? "DAILY ORDER"
                          : index === 1
                          ? "EXPERT CHEF"
                          : index === 2
                          ? "EXPERT CHEF"
                          : "AWARDS WON"}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurVideo;
