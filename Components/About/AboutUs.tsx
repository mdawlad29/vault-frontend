"use client";
import { Box, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
const OurServices = dynamic(() => import("./OurServices"), { ssr: false });
const OurStrength = dynamic(() => import("./OurStrength"), { ssr: false });

const AboutUs = () => {

  return (
    <>
      <Box className="dark:bg-primary">
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
          {/*--------- Our Services ---------*/}
          <Box>
            <OurServices />
          </Box>
          {/*--------- Our Strength ---------*/}
          <Box>
            <OurStrength />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
