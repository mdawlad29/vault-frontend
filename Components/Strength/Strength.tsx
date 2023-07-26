import React from "react";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import icon1 from "../../public/assets/images/freshIcon.png";
import icon2 from "../../public/assets/images/strengthIcon.png";
import icon3 from "../../public/assets/images/skillIcon.png";
import icon4 from "../../public/assets/images/eventIcon.png";
import { Box, Grid, Container, Typography } from "@mui/material";
import Image from "next/image";

const Strength = () => {
  return (
    <>
      <Box className="dark:bg-primary">
        <Box
          sx={{ px: { md: 8, sm: 4, xs: 3 } }}
          className="lg:py-24 md:py-16 py-8"
        >
          <Typography
            component="div"
            variant={"subtitle2"}
            fontSize={12}
            textAlign={"center"}
            textTransform={"uppercase"}
            sx={{ letterSpacing: "0.3em", mb: 2 }}
            className="text-primary"
          >
            FLAVORS FOR ROYALTY
          </Typography>
          <Image
            src={RestaurantOrnament}
            alt="Hero Subtitle Image"
            className="w-28 mx-auto"
            width={100}
            height={100}
            priority
          />
          <Typography
            component="div"
            variant="h3"
            display={"block"}
            fontSize={{ md: 48, sm: 36, xs: 24 }}
            className="dark:text-neutral text-center capitalize"
            my={4}
          >
            Our Strength
          </Typography>
          <Grid container spacing={2}>
            {[...Array(4)]?.map((_, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Box
                  className={`${
                    index === 0
                      ? "dark:bg-[#151616]"
                      : index === 1
                      ? "dark:bg-secondary bg-gray-100"
                      : index === 2
                      ? "dark:bg-[#151616]"
                      : "dark:bg-secondary bg-gray-100"
                  } px-4 py-10 shadow-md hover:-translate-y-1 duration-300 ease-in-out `}
                >
                  <Image
                    src={
                      index === 0
                        ? icon1
                        : index === 1
                        ? icon2
                        : index === 2
                        ? icon3
                        : icon4
                    }
                    alt="icon"
                    width={90}
                    height={90}
                    priority
                    className="mx-auto"
                  />
                  <Typography
                    component="div"
                    variant="h5"
                    display={"block"}
                    className="dark:text-neutral text-center capitalize"
                    mt={3}
                  >
                    {index === 0
                      ? "Hygienic Food"
                      : index === 1
                      ? "Fresh Environment"
                      : index === 2
                      ? "Skilled Chefs"
                      : "Event & Party"}
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    display={"block"}
                    className="dark:text-gray-400 text-center capitalize mt-2"
                  >
                    Lorem Ipsum is simply dummy printing and typesetting.
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Strength;
