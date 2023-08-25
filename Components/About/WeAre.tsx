import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import strengthImg from "../../public/assets/images/strengthImg.png";
import RestaurantImg from "../../public/assets/images/Restaurant-About-Us-Experience-Image.png";
import { AiFillPlayCircle } from "react-icons/ai";

const WeAre = () => {
  return (
    <>
      <Box>
        <Typography
          component="div"
          variant={"subtitle2"}
          fontSize={12}
          textAlign={"center"}
          textTransform={"uppercase"}
          sx={{ letterSpacing: "0.3em", mb: 2 }}
          className="text-primary"
        >
          who we are
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
          my={4}
          fontSize={{ md: 24, sm: 20, xs: 16 }}
          width={{ md: 750, sm: 500, xs: 1 }}
          fontWeight={400}
          letterSpacing={"0.05em"}
          lineHeight={"2.4rem"}
          className="dark:text-neutral z-10 md:mx-auto"
        >
          A modern restaurant with a menu that will make your mouth water.
          Servicing delicious food since 45 years. Enjoy our seasonal menu and
          experience the beauty of naturalness
        </Typography>
        <Grid container spacing={2}>
          {/*---- Left Info ----*/}
          <Grid item xs={12} sm={6} md={4}>
            <Box className="space-y-11 lg:h-[80vh] md:h-[99vh]">
              <Typography
                component="div"
                variant="subtitle1"
                display={"block"}
                textAlign={"justify"}
                className="dark:text-gray-400 font-normal"
              >
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen book It has survived.
              </Typography>
              <Typography
                component="div"
                variant="subtitle1"
                display={"block"}
                className="text-primary font-normal"
                letterSpacing={"0.2em"}
              >
                ANDREW JOE - FOUNDER
              </Typography>
              <Box className="relative">
                <Image
                  src={RestaurantImg}
                  alt="Image"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-[40vh]"
                />
                <Box className="w-14 h-14 mx-auto rounded-full text-primary flex justify-center items-center cursor-pointer absolute top-[40%] left-[40%] animate-ping bg-black opacity-50">
                  <AiFillPlayCircle className="border border-neutral flex justify-center items-center rounded-full w-8 h-8" />
                </Box>
              </Box>
            </Box>
          </Grid>
          {/*---- Middle Info ----*/}
          <Grid item xs={12} sm={6} md={4}>
            <Box className="lg:h-[80vh] md:h-[99vh]">
              <Image
                src={strengthImg}
                alt="Image"
                width={600}
                height={600}
                priority
                className="h-full"
              />
            </Box>
          </Grid>
          {/*---- Right Info ----*/}
          <Grid item xs={12} sm={6} md={4}>
            <Box className="lg:py-20 md:py-10 py-6 md:px-6 px-3 border border-primary space-y-10 lg:h-[80vh] md:h-[99vh]">
              {/* lunch */}
              <Typography
                component="div"
                variant="h6"
                className="dark:text-neutral text-center"
              >
                Lunch Time
                <Typography
                  component="div"
                  variant="subtitle1"
                  className="dark:text-gray-400 text-center"
                >
                  Monday to Sunday 11.00 am – 2.30pm
                </Typography>
              </Typography>
              {/* Dinner */}
              <Typography
                component="div"
                variant="h6"
                className="dark:text-neutral text-center"
              >
                Dinner Time
                <Typography
                  component="div"
                  variant="subtitle1"
                  className="dark:text-gray-400 text-center"
                >
                  Monday to Sunday 5.30 pm - 11.30 pm
                </Typography>
              </Typography>
              <Image
                src={RestaurantOrnament}
                alt="Hero Subtitle Image"
                className="w-28 mx-auto"
              />
              {/* Contact */}
              <Typography
                component="div"
                variant="h6"
                className="dark:text-neutral text-center"
              >
                Contact Us
                <Typography
                  component="div"
                  variant="subtitle1"
                  className="dark:text-gray-400 dark:hover:text-primary cursor-pointer text-center"
                >
                  Muradpur, Chittagong, Bangladesh
                </Typography>
                <Typography
                  component="div"
                  variant="subtitle1"
                  className="dark:text-gray-400 dark:hover:text-primary cursor-pointer text-center"
                >
                  +880 1725385909
                </Typography>
                <Typography
                  component="div"
                  variant="subtitle1"
                  className="dark:text-gray-400 dark:hover:text-primary cursor-pointer text-center"
                >
                  mdawladbdinfo@gmail.com
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WeAre;
