import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import strengthImg from "../../public/assets/images/Restaurant-Special-Image-1.png";
import icon1 from "../../public/assets/images/Restaurant-Special-BG.png";
import icon2 from "../../public/assets/images/Restaurant-Special-BG-Icon.png";
import Link from "next/link";

const FlavorsLobster = () => {
  return (
    <>
      <Box className="dark:!bg-secondary bg-gray-100 relative">
        <Grid container alignItems={"center"}>
          {/*-------- Left Image Info ---------*/}
          <Grid item xs={12} md={7}>
            <Box className="relative">
              <Image
                src={strengthImg}
                alt="Flavors Royalty Image"
                width={800}
                height={800}
                priority
              />
            </Box>
          </Grid>
          {/*-------- Right Info ---------*/}
          <Grid item xs={12} md={5} className="">
            <Box className="lg:px-16 md:px-8 px-4 lg:py-0 md:py-24 py-16 relative">
              <Typography
                component="div"
                variant={"subtitle2"}
                fontSize={12}
                textTransform={"uppercase"}
                sx={{ letterSpacing: "0.3em", mb: 2 }}
                className="text-primary lg:text-start text-center"
              >
                FLAVORS FOR ROYALTY
              </Typography>
              <Image
                src={RestaurantOrnament}
                alt="Hero Subtitle Image"
                className="w-28 lg:mx-0 mx-auto"
                width={400}
                height={400}
                priority
              />
              {/*----- Icon ----*/}
              <Image
                src={icon1}
                alt="Hero Subtitle Image"
                className="object-contain absolute right-0 top-0 md:w-32 md:h-[80vh] w-20 h-40 z-0"
                width={400}
                height={400}
                priority
              />
              <Box className="space-y-6">
                <Typography
                  component="div"
                  variant="h3"
                  display={"block"}
                  fontSize={{ md: 48, sm: 36, xs: 24 }}
                  className="dark:text-neutral lg:text-start text-center"
                  mt={6}
                >
                  Lobster Tortellini
                </Typography>
                <Typography
                  component="div"
                  variant="subtitle1"
                  display={"block"}
                  textAlign={"justify"}
                  className="dark:text-gray-400 font-normal"
                >
                  Lorem Ipsum is simply dummy text of the printingand
                  typesetting industry lorem Ipsum has been the indu strys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type. and scrambled it to make a type
                  specimen book It has survived not only five centuries, but
                  also the leap into. electronic type setting printer took a
                  galley of type and scrambled make a type specimen book
                </Typography>
                {/*--- Price ---*/}
                <Box className="flex lg:justify-start justify-center items-center gap-6">
                  <Typography
                    component="span"
                    variant="subtitle1"
                    textAlign={"center"}
                    className="dark:text-gray-500"
                  >
                    $40.00
                  </Typography>
                  <Typography
                    component="span"
                    variant="h5"
                    textAlign={"center"}
                    className="text-primary font-normal"
                  >
                    $20.00
                  </Typography>
                </Box>
                {/*--- Button ---*/}
                <Box textAlign={{ md: "start", sm: "center", xs: "center" }}>
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
            <Image
              src={icon2}
              alt="Hero Subtitle Image"
              className="object-contain absolute right-0 lg:-bottom-44 md:-bottom-44 -bottom-20 md:w-48 md:h-96 w-28 h-48"
              width={400}
              height={400}
              priority
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FlavorsLobster;
