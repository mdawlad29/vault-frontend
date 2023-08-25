import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import img1 from "../../public/assets/images/Restaurant-testimonial-1.png";
import img2 from "../../public/assets/images/Restaurant-testimonial-2.png";
import img3 from "../../public/assets/images/Restaurant-testimonial-3.png";
import Image from "next/image";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";

const Clients = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://vault.uicore.co/restaurant/wp-content/uploads/sites/55/2022/11/Restaurant-About-Us-Testimonial-Image.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "contain",
          py: 6,
        }}
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
        <Grid container spacing={3}>
          {[...Array(3)]?.map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Box
                sx={{ mx: { md: 8, sm: 4, xs: 3 } }}
                className="bg-secondary text-neutral p-7 space-y-5"
              >
                <Box px={1} className="flex items-center gap-1">
                  {[...Array(5)]?.map((_, index) => (
                    <StarIcon key={index} className="text-primary !text-sm" />
                  ))}
                </Box>
                <Typography
                  component={"div"}
                  variant="subtitle1"
                  display={"block"}
                  className="text-gray-400 pb-6"
                >
                  The taste of food was really amazing, Wow ! outstanding dinner
                  made by Mater chef John Rute, I never forget this delicious
                  food experience.
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Image
                    src={img2}
                    alt="Client Image"
                    width={80}
                    height={80}
                    priority
                    className="rounded-full object-contain"
                  />
                  <Box>
                    <Typography
                      component={"span"}
                      variant="subtitle1"
                      display={"block"}
                      className="text-primary"
                    >{`${
                      index === 0
                        ? "WILLIUM JOE"
                        : index === 1
                        ? "THERESA TIN"
                        : "MICHEL BYRD"
                    }`}</Typography>
                    <Typography
                      component={"span"}
                      variant="subtitle2"
                      display={"block"}
                      className="text-gray-400"
                    >{`${
                      index === 0
                        ? "New York"
                        : index === 1
                        ? "Canada"
                        : "German"
                    }`}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Clients;
