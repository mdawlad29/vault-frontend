"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import strengthImg from "../../public/assets/images/freshFood.png";
import strengthImg1 from "../../public/assets/images/strengthImg.png";
import strengthImg2 from "../../public/assets/images/skillChef.png";
import strengthImg3 from "../../public/assets/images/event.png";
import strengthIcon from "../../public/assets/images/strengthIcon.png";
import strengthIcon1 from "../../public/assets/images/freshIcon.png";
import strengthIcon2 from "../../public/assets/images/skillIcon.png";
import strengthIcon3 from "../../public/assets/images/eventIcon.png";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";

const OurStrength = () => {
  return (
    <>
      <Typography
        component="div"
        variant={"subtitle2"}
        fontSize={12}
        textAlign={"center"}
        textTransform={"uppercase"}
        sx={{ letterSpacing: "0.3em", mb: 2 }}
        className="text-primary"
      >
        WHY CHOOSE US
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
        textAlign={"center"}
        fontSize={{ md: 48, sm: 36, xs: 24 }}
        className="dark:text-neutral z-10 mx-auto"
        width={{ md: 800, xs: 1 }}
        my={5}
      >
        our strength
      </Typography>
      <Grid container spacing={2}>
        {Array.from(Array(4))?.map((item: any, index) => (
          <Grid key={index} item xs={12} sm={6} md={3} my={2}>
            <Box
              className={`${
                index === 1
                  ? "lg:translate-y-16"
                  : index === 3
                  ? "lg:translate-y-16"
                  : "translate-y-0"
              }`}
            >
              <Box
                className="relative"
                sx={{
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, #00000000 0%, #131212 100%)",
                    transition:
                      "background 0.3s, border-radius 0.3s, opacity 0.3s",
                  },
                  "&:hover::after": {
                    background:
                      "linear-gradient(180deg, #00000000 0%, #000000 100%)",
                  },
                }}
              >
                <Image
                  src={
                    index == 0
                      ? strengthImg
                      : index == 1
                      ? strengthImg1
                      : index == 2
                      ? strengthImg2
                      : strengthImg3
                  }
                  alt="Strength Image"
                  className="lg:h-[60vh] h-[40vh]"
                />
                <Box className="absolute inset-0"></Box>
              </Box>
              <Box className="-mt-36 relative text-neutral">
                <Image
                  src={
                    index == 0
                      ? strengthIcon1
                      : index == 1
                      ? strengthIcon
                      : index == 2
                      ? strengthIcon2
                      : strengthIcon3
                  }
                  alt="Strength Icon"
                  className="w-20 mx-auto"
                />
                <Typography
                  component={"div"}
                  variant="subtitle1"
                  display={"block"}
                  textAlign={"center"}
                  py={1}
                >
                  Nice Environment
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OurStrength;
