import { Box, Button, Grid, Typography } from "@mui/material";
import img2 from "../../public/assets/images/Restaurant-About-Us-Delightful-Image.png";
import img3 from "../../public/assets/images/Restaurant-About-Us-Experience-Image.png";
import Image from "next/image";
import Link from "next/link";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";

const Award = () => {
  return (
    <>
      <Grid container>
        {/*---- First Section ----*/}
        <Grid item xs={12} sm={6} md={6}>
          <Image
            src={img3}
            alt="Best Image"
            width={500}
            height={500}
            priority
            className="w-full lg:h-[85vh] md:h-[120vh]"
          />
        </Grid>
        {/*---- Second Section ----*/}
        <Grid item xs={12} sm={6} md={6}>
          <Box className="text-center dark:text-neutral space-y-5 dark:bg-secondary bg-gray-100 px-4 py-14 lg:h-[85vh] md:h-[120vh] flex justify-center items-center">
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
                35 YEAR OF EXPERIENCE
              </Typography>
              <Image
                src={RestaurantOrnament}
                alt="Hero Subtitle Image"
                className="w-28 mx-auto"
              />
              <Typography
                component="div"
                variant="h4"
                display={"block"}
                textAlign={"center"}
                className="dark:text-neutral z-10 mx-auto"
                my={5}
              >
                Award Winning Chef
              </Typography>
              <Typography
                component={"div"}
                variant="subtitle1"
                display={"block"}
                textAlign={"center"}
                className="text-gray-400 pb-6"
              >
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the indu strys standard dummy text
                ever since the when an unknown printer took a galley of type.
              </Typography>
              <Typography
                component="div"
                variant="subtitle1"
                display={"block"}
                className="text-primary font-normal text-center"
                letterSpacing={"0.2em"}
              >
                HENRY - EXCUTIVE CHEF
              </Typography>
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
          </Box>
        </Grid>
        {/*---- Third Section ----*/}
        <Grid item xs={12} sm={6} md={6}>
          <Box className="text-center dark:text-neutral space-y-5 dark:bg-secondary bg-gray-100 px-4 py-14 lg:h-[85vh] md:h-[120vh] flex justify-center items-center">
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
                35 YEAR OF EXPERIENCE
              </Typography>
              <Image
                src={RestaurantOrnament}
                alt="Hero Subtitle Image"
                className="w-28 mx-auto"
              />
              <Typography
                component="div"
                variant="h4"
                display={"block"}
                textAlign={"center"}
                className="dark:text-neutral z-10 mx-auto"
                my={5}
              >
                Dinner, Event or Party?
              </Typography>
              <Typography
                component={"div"}
                variant="subtitle1"
                display={"block"}
                textAlign={"center"}
                className="text-gray-400 pb-6"
              >
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the indu strys standard dummy text
                ever since the when an unknown printer took a galley of type.
              </Typography>
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
                    discover menu
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/*---- Four Section ----*/}
        <Grid item xs={12} sm={6} md={6}>
          <Image
            src={img2}
            alt="Best Image"
            width={500}
            height={500}
            priority
            className="w-full lg:h-[85vh] md:h-[120vh]"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Award;
