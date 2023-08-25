"use client";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import strengthImg from "../../public/assets/images/Restaurant-Offer-Image-1.png";
import strengthImg1 from "../../public/assets/images/Restaurant-Offer-Image-2.png";
import strengthImg2 from "../../public/assets/images/Restaurant-Offer-Image-3.png";
import strengthImg3 from "../../public/assets/images/Restaurant-Offer-Image-4.png";
import lineImg from "../../public/assets/images/Restaurant-Pattern-2.png";
import Link from "next/link";

const BestSpecialties = () => {
  return (
    <>
      <Box className="dark:bg-primary">
        <Box
          sx={{ px: { md: 8, sm: 4, xs: 3 } }}
          className="relative flex lg:h-[160vh] md:h-[225vh]"
        >
          <Image src={lineImg} alt="Hero Subtitle Image" className="w-3" />
          <Box className="lg:py-24 md:py-16 py-8 md:px-6 px-3 dark:bg-secondary bg-gray-100">
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
            />
            <Typography
              component="div"
              variant="h3"
              display={"block"}
              fontSize={{ md: 48, sm: 36, xs: 24 }}
              className="dark:text-neutral text-center capitalize"
              my={4}
            >
              Best Specialties
            </Typography>
            <Grid container spacing={3}>
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
                    <Box>
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
                        className="lg:h-[50vh] h-[30vh]"
                        width={400}
                        height={400}
                        priority
                      />
                      <Box className="md:my-6 my-4 space-y-4">
                        <Typography
                          component="div"
                          variant={"h5"}
                          textAlign={"center"}
                          textTransform={"capitalize"}
                          className="dark:text-neutral"
                        >
                          {index == 0
                            ? "Greek Salad"
                            : index == 1
                            ? "Tokusen Wagyu"
                            : index == 2
                            ? "Butternut Pumpkin"
                            : "Opu Fish"}
                        </Typography>
                        <Typography
                          component="div"
                          variant={"subtitle2"}
                          fontSize={12}
                          textAlign={"center"}
                          sx={{ letterSpacing: "0.3em", mb: 2 }}
                          className="text-primary"
                        >
                          <Typography
                            component="div"
                            variant={"subtitle2"}
                            textAlign={"center"}
                            className="text-gray-400"
                          >
                            Avocados with crab meat, red onion, crab salad red
                            bell pepper
                          </Typography>
                        </Typography>
                        <Typography
                          component="div"
                          variant={"h5"}
                          textAlign={"center"}
                          className="dark:text-primary underline  underline-offset-4"
                        >
                          {index == 0
                            ? "$39.00"
                            : index == 1
                            ? "$45.00"
                            : index == 2
                            ? "$15.00"
                            : "$12.00"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box textAlign={"center"} mt={{ md: 10, sm: 4, xs: 5 }}>
              <Link href="/restaurent/reservation">
                <Button
                  sx={{
                    width: { md: 200 },
                    fontSize: 14,
                    border: "2px solid #E4C590 !important",
                    color: "#E4C590 !important",
                    borderRadius: "unset",
                    letterSpacing: "0.2em",
                    py: { md: 1.5 },
                    "&:hover": {
                      backgroundColor: "#E4C590 !important",
                      color: "#000 !important",
                    },
                    mx: "auto",
                  }}
                  variant="outlined"
                >
                  find a table
                </Button>
              </Link>
            </Box>
          </Box>
          <Image src={lineImg} alt="Hero Subtitle Image" className="w-3" />
        </Box>
      </Box>
    </>
  );
};

export default BestSpecialties;
