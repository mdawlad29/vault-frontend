"use client";
import { Box, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import heroImg from "../../public/assets/images/RestaurantOrnament.png";
import Image from "next/image";
const Award = dynamic(() => import("./Award"), { ssr: false });
const WeAre = dynamic(() => import("./WeAre"), { ssr: false });
const OurServices = dynamic(() => import("./OurServices"), { ssr: false });
const OurStrength = dynamic(() => import("./OurStrength"), { ssr: false });

const AboutUs = () => {
  return (
    <>
      <Box className="dark:bg-primary">
        <Box
          pt={{ md: 8, sm: 3, xs: 0 }}
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://vault.uicore.co/restaurant/wp-content/uploads/sites/55/2022/11/Restaurant-About-Us-Hero-Image.webp')`,
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
                our story
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
                About Us
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ px: { md: 8, sm: 4, xs: 3 } }}
          className="lg:space-y-20 md:space-y-14 space-y-8 lg:py-28 py-10"
        >
          {/*--------- We Are ---------*/}
          <Box>
            <WeAre />
          </Box>
          {/*------- Counter Section ---------*/}
          <Box>
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
        </Box>
        {/*--------- Award ---------*/}
        <Box>
          <Award />
        </Box>
        {/*--------- Our Services ---------*/}
        <Box sx={{ px: { md: 8, sm: 4, xs: 3 } }} className="lg:py-28 py-10">
          <OurServices />
        </Box>
        {/*--------- Our Strength ---------*/}
        <Box sx={{ px: { md: 8, sm: 4, xs: 3 } }} className="lg:py-28 py-10">
          <OurStrength />
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
