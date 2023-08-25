import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import strengthImg from "../../public/assets/images/Restaurant-Story-Image-1.png";
import badgeImg from "../../public/assets/images/Restaurant-Badge.png";
import patternImg from "../../public/assets/images/Restaurant-Pattern.png";
import itemImg1 from "../../public/assets/images/Restaurant-Story-Image-2.png";
import Link from "next/link";

const Royalty = () => {
  return (
    <>
      <Box className="relative lg:py-32 md:py-24 py-16 dark:bg-primary">
        <Box sx={{ px: { md: 8, sm: 4, xs: 3 } }}>
          <Grid container spacing={2}>
            {/*-------- Left Info ---------*/}
            <Grid item xs={12} md={4}>
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
                width={400}
                height={400}
                priority
              />
              <Box className="space-y-6">
                <Typography
                  component="div"
                  variant="h3"
                  display={"block"}
                  textAlign={"center"}
                  fontSize={{ md: 48, sm: 36, xs: 24 }}
                  className="dark:text-neutral z-10 mx-auto"
                  width={{ md: 300, xs: 1 }}
                  mt={6}
                >
                  Every Flavor Tells a Story
                </Typography>
                <Typography
                  component="div"
                  variant="subtitle1"
                  display={"block"}
                  textAlign={"justify"}
                  className="dark:text-gray-400 font-normal"
                >
                  Lorem Ipsum is simply dummy text of the printingand
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book It has survived not only five centuries, but also the
                  leap .
                </Typography>
                {/*--- Number ---*/}
                <Box>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    display={"block"}
                    textAlign={"center"}
                    className="dark:text-neutral"
                  >
                    Book Through Call
                  </Typography>
                  <Typography
                    component="div"
                    variant="h5"
                    display={"block"}
                    textAlign={"center"}
                    className="text-primary font-normal"
                    letterSpacing={"0.2em"}
                  >
                    <a href="tel:+880 1725385909">+8801725385909</a>
                  </Typography>
                </Box>
                {/*--- Button ---*/}
                <Box className="text-center">
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
            </Grid>
            {/*-------- Right Image Info ---------*/}
            <Grid item xs={12} md={8}>
              <Box className="relative">
                <Box className="bg-gray-800">
                  <Image
                    src={badgeImg}
                    alt="Flavors Royalty Image"
                    className="object-contain absolute lg:-right-10 lg:-top-10 md:right-16 xs:right-6 xs:-top-2 xxs:right-1 xxs:-top-3 -right-3 -top-3 md:w-28 xxs:w-20 w-16 bg-darkColor rounded-full"
                    width={400}
                    height={400}
                    priority
                  />
                </Box>
                <Box className="flex lg:justify-end md:justify-center xxs:justify-center justify-center lg:pt-0 md:pt-10 pt-5">
                  <Image
                    src={strengthImg}
                    alt="Flavors Royalty Image"
                    className="object-contain lg:w-[600px] md:w-[500px] w-[280px]"
                    width={400}
                    height={400}
                    priority
                  />
                </Box>
                <Box className="relative lg:-mt-40 lg:left-10 md:left-52 xs:left-14 xxs:left-9 -mt-28">
                  <Image
                    src={patternImg}
                    alt="Restaurant Flavors"
                    className="lg:h-96 md:h-80 h-60 object-contain"
                    width={300}
                    height={400}
                    priority
                  />
                  <Image
                    src={itemImg1}
                    alt="Restaurant Flavors"
                    className="lg:h-80 md:h-60 h-48 object-contain absolute lg:top-8 lg:-left-36 md:top-10 md:-left-36 xs:-left-14 xxs:-left-8 top-6"
                    width={600}
                    height={400}
                    priority
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Royalty;
