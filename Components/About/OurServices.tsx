"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import strengthImg from "../../public/assets/images/strengthMainImg.png";
import icon from "../../public/assets/images/doorDelivery.png";
import icon1 from "../../public/assets/images/dining.png";
import icon2 from "../../public/assets/images/outdoor.png";
import icon3 from "../../public/assets/images/banquets.png";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";

const OurServices = () => {
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
        our services
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
        Exquisite Restaurant in City
      </Typography>
      <Grid container spacing={2} justifyItems={"center"} alignItems={"center"}>
        {/*------ Left Info -------*/}
        <Grid item xs={12} md={4} className="space-y-8">
          <Box className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-3">
            {/*----- Door Delivery ------*/}
            <Box className="shadow hover:shadow-lg hover:-translate-y-1 duration-500 ease-in-out hover:scale-105 px-5 py-6">
              <Box className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3">
                <Box className="mx-auto">
                  <Image
                    src={icon}
                    alt="Icon"
                    className="bg-secondary p-3 rounded-full flex justify-center items-center w-24 h-24"
                  />
                </Box>
                <Box>
                  <Typography
                    component={"div"}
                    variant="h6"
                    display={"block"}
                    className="dark:text-neutral md:text-start text-center"
                  >
                    Door Delivery
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle2"
                    display="block"
                    textAlign="justify"
                    className="text-gray-400"
                  >
                    Lorem Ipsum is simply dummy printing and typeset industry
                    lorem Ipsum has been.
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/*----- Fine Dining ------*/}
            <Box className="shadow hover:shadow-lg hover:-translate-y-1 duration-500 ease-in-out hover:scale-105 px-5 py-6">
              <Box className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3">
                <Box className="order-2 md:order-1">
                  <Typography
                    component={"div"}
                    variant="h6"
                    display={"block"}
                    className="dark:text-neutral md:text-right text-center"
                  >
                    Fine Dining
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle2"
                    display="block"
                    textAlign="justify"
                    className="text-gray-400"
                  >
                    Lorem Ipsum is simply dummy printing and typeset industry
                    lorem Ipsum has been.
                  </Typography>
                </Box>
                <Box className="mx-auto order-1 md:order-2">
                  <Image
                    src={icon1}
                    alt="Icon"
                    className="bg-secondary p-3 rounded-full flex justify-center items-center w-24 h-24"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/*------ Middle Image -------*/}
        <Grid item xs={12} md={4}>
          <Box className="duration-500 ease-in-out hover:scale-95">
            <Image
              src={strengthImg}
              alt="Strength Image"
              className="object-contain h-96"
            />
          </Box>
        </Grid>
        {/*------ Right Info -------*/}
        <Grid item xs={12} md={4} className="space-y-8">
          <Box className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-3">
            {/*----- Outdoor Catering ------*/}
            <Box className="shadow hover:shadow-lg hover:-translate-y-1 duration-500 ease-in-out hover:scale-105 px-5 py-6">
              <Box className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3">
                <Box className="mx-auto">
                  <Image
                    src={icon2}
                    alt="Icon"
                    className="bg-secondary p-3 rounded-full flex justify-center items-center w-24 h-24"
                  />
                </Box>
                <Box>
                  <Typography
                    component={"div"}
                    variant="h6"
                    display={"block"}
                    className="dark:text-neutral md:text-start text-center"
                  >
                    Outdoor Catering
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle2"
                    display="block"
                    textAlign="justify"
                    className="text-gray-400"
                  >
                    Lorem Ipsum is simply dummy printing and typeset industry
                    lorem Ipsum has been.
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/*----- Banquets Hall ------*/}
            <Box className="shadow hover:shadow-lg hover:-translate-y-1 duration-500 ease-in-out hover:scale-105 px-5 py-6">
              <Box className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3">
                <Box className="order-2 md:order-1">
                  <Typography
                    component={"div"}
                    variant="h6"
                    display={"block"}
                    className="dark:text-neutral md:text-right text-center"
                  >
                    Banquets Hall
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle2"
                    display="block"
                    textAlign="justify"
                    className="text-gray-400"
                  >
                    Lorem Ipsum is simply dummy printing and typeset industry
                    lorem Ipsum has been.
                  </Typography>
                </Box>
                <Box className="mx-auto order-1 md:order-2">
                  <Image
                    src={icon3}
                    alt="Icon"
                    className="bg-secondary p-3 rounded-full flex justify-center items-center w-24 h-24"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OurServices;
