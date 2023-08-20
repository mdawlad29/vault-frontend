"use client";
import { Box, Grid, Typography } from "@mui/material";
import aboutUs from "../../public/assets/images/userOne.png";
import Image from "next/image";
import CountUp from "react-countup";
import React from "react";
import dynamic from "next/dynamic";
import { descriptions } from "@/Data/DummyData";
const OurServices = dynamic(() => import("./OurServices"), { ssr: false });
const OurStrength = dynamic(() => import("./OurStrength"), { ssr: false });

const AboutUs = () => {
  const [moreDesc, setMoreDesc] = React.useState(false);

  return (
    <>
      <Box className="dark:bg-primary text-neutral">
        <Box
          sx={{
            backgroundImage: `url('https://i.ibb.co/6JpY31S/about-us-banner.webp')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            objectFit: "contain",
            height: { md: "80vh", sm: "65vh", xs: "45vh" },
            position: "relative",
            backgroundAttachment: "fixed",
          }}
        ></Box>
        <Box sx={{ px: { md: 8, sm: 4, xs: 3 } }} className="space-y-7 pb-7">
          {/*------- Counter Section ---------*/}
          <Box className="relative bg-gray-100 dark:bg-secondary md:py-10 py-4 lg:-mt-40 md:-mt-40 -mt-36 shadow-lg rounded-md">
            <Grid container item spacing={2}>
              {/*---- Daily Order -----*/}
              <Grid item xs={6} md={3}>
                <Box>
                  <Typography
                    component={"div"}
                    variant="h3"
                    display={"block"}
                    textAlign={"center"}
                    className=""
                    fontSize={{ md: 50, sm: 42, xs: 35 }}
                  >
                    <CountUp end={150} duration={5} /> +
                  </Typography>
                  <Typography
                    component={"span"}
                    variant="subtitle2"
                    display={"block"}
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    sx={{ letterSpacing: "0.3em" }}
                    fontWeight={300}
                    className="text-secondary"
                    fontSize={{ md: 14, sm: 12, xs: 10 }}
                  >
                    daily order
                  </Typography>
                </Box>
              </Grid>
              {/*---- Special Disches -----*/}
              <Grid item xs={6} md={3}>
                <Box>
                  <Typography
                    component={"div"}
                    variant="h3"
                    display={"block"}
                    textAlign={"center"}
                    fontSize={{ md: 50, sm: 42, xs: 35 }}
                  >
                    <CountUp end={82} duration={5} /> +
                  </Typography>
                  <Typography
                    component={"span"}
                    variant="subtitle2"
                    display={"block"}
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    sx={{ letterSpacing: "0.3em" }}
                    fontWeight={300}
                    className="text-secondary"
                    fontSize={{ md: 14, sm: 12, xs: 10 }}
                  >
                    special disches
                  </Typography>
                </Box>
              </Grid>
              {/*---- Expert Chef -----*/}
              <Grid item xs={6} md={3}>
                <Box>
                  <Typography
                    component={"div"}
                    variant="h3"
                    display={"block"}
                    textAlign={"center"}
                    fontSize={{ md: 50, sm: 42, xs: 35 }}
                  >
                    <CountUp end={35} duration={5} /> +
                  </Typography>
                  <Typography
                    component={"span"}
                    variant="subtitle2"
                    display={"block"}
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    sx={{ letterSpacing: "0.3em" }}
                    fontWeight={300}
                    className="text-secondary"
                    fontSize={{ md: 14, sm: 12, xs: 10 }}
                  >
                    expert chef
                  </Typography>
                </Box>
              </Grid>
              {/*---- Awards Won -----*/}
              <Grid item xs={6} md={3}>
                <Box>
                  <Typography
                    component={"div"}
                    variant="h3"
                    display={"block"}
                    textAlign={"center"}
                    fontSize={{ md: 50, sm: 42, xs: 35 }}
                  >
                    <CountUp end={10} duration={1} /> +
                  </Typography>
                  <Typography
                    component={"span"}
                    variant="subtitle2"
                    display={"block"}
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    sx={{ letterSpacing: "0.3em" }}
                    fontWeight={300}
                    className="text-secondary"
                    fontSize={{ md: 14, sm: 12, xs: 10 }}
                  >
                    awards won
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/*------- About Info Section ----------*/}
          <Grid
            container
            spacing={{ md: 16, xs: 2 }}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Box className="bg-gray-100 dark:bg-secondary rounded-xl hover:scale-105 duration-300 ease-in-out mx-auto">
                <Image
                  src={aboutUs}
                  alt="About us Image"
                  width={"0"}
                  height={"0"}
                  priority
                  className="object-contain lg:-mt-36 -mt-20 mx-auto"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                mt={{ xs: 5 }}
                textAlign={{ md: "start", xs: "center" }}
                className="space-y-5"
              >
                <Typography
                  component={"div"}
                  variant="h4"
                  display={"block"}
                  fontSize={{ md: 45, sm: 45, xs: 24 }}
                  className="dark:text-darkTextColor "
                  textTransform={"capitalize"}
                >
                  about our company
                </Typography>
                <Typography
                  component={"div"}
                  variant="subtitle2"
                  display={"block"}
                  textTransform={"capitalize"}
                  textAlign={"justify"}
                >
                  {!moreDesc ? descriptions.substring(0, 600) : descriptions}
                  <button
                    className="mx-1 hover:underline text-secondary"
                    onClick={() => {
                      setMoreDesc(!moreDesc);
                    }}
                  >
                    {!moreDesc ? "Learn more..." : "More less"}
                  </button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/*--------- Our Services ---------*/}
          <Box className="py-20">
            <OurServices />
          </Box>
          {/*--------- Our Strength ---------*/}
          <Box className="py-20">
            <OurStrength />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
