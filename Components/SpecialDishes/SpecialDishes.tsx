import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../public/assets/images/Restaurant-Menu-Select-Image-1.png";
import img2 from "../../public/assets/images/Restaurant-Menu-Select-Image-2.png";
import img3 from "../../public/assets/images/Restaurant-Story-Image-2.png";
import Image from "next/image";
import Link from "next/link";

const SpecialDishes = () => {
  return (
    <>
      <Box>
        <Grid container>
          {/*---- Left Section ----*/}
          <Grid item xs={12} md={4}>
            <Box>
              <Box className="text-center dark:text-neutral space-y-5 dark:bg-secondary bg-gray-100 px-4 py-14">
                <Typography
                  component={"div"}
                  variant="subtitle2"
                  display={"block"}
                  textAlign={"center"}
                  className="text-primary uppercase"
                >
                  best menu
                </Typography>
                <Typography
                  component={"div"}
                  variant="h4"
                  display={"block"}
                  textAlign={"center"}
                >
                  Special Dishes
                </Typography>
                <Typography
                  component={"div"}
                  variant="subtitle1"
                  display={"block"}
                  textAlign={"center"}
                  className="text-gray-400 pb-6"
                >
                  Lorem Ipsum is simply dummy printing
                </Typography>
                <Link
                  href="/"
                  className="text-primary text-sm underline underline-offset-4 uppercase pt-6 text-center"
                >
                  view menu
                </Link>
              </Box>
              <Box>
                <Image
                  src={img1}
                  alt="Best Image"
                  width={600}
                  height={600}
                  priority
                  className="h-[50vh]"
                />
              </Box>
            </Box>
          </Grid>
          {/*---Middle Section -----*/}
          <Grid item xs={12} md={4}>
            <Box>
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
                  src={img2}
                  alt="Strength Image"
                  width={600}
                  height={600}
                  priority
                  className="lg:h-[95vh] w-full"
                />
                <Box className="absolute inset-0"></Box>
              </Box>
              <Box className="lg:-mt-80 md:-mt-96 -mt-52 relative text-center text-neutral space-y-5">
                <Typography
                  component={"div"}
                  variant="subtitle2"
                  display={"block"}
                  textAlign={"center"}
                  className="text-primary"
                >
                  LATEST
                </Typography>
                <Typography
                  component={"div"}
                  variant="h4"
                  display={"block"}
                  textAlign={"center"}
                >
                  Upcoming Events
                </Typography>
                <Typography
                  component={"div"}
                  variant="subtitle1"
                  display={"block"}
                  textAlign={"center"}
                  className="text-gray-400 pb-6"
                >
                  Simply dummy printing and setting
                </Typography>
                <Link
                  href="/"
                  className="text-primary text-sm underline underline-offset-4 uppercase pt-6 text-center"
                >
                  read more
                </Link>
              </Box>
            </Box>
          </Grid>
          {/*---- Right Section ----*/}
          <Grid item xs={12} md={4}>
            <Box className="lg:mt-0 md:mt-52">
              <Image
                src={img3}
                alt="Best Image"
                width={500}
                height={500}
                priority
                className="lg:h-[50vh] md:h-[80vh] h-[50] w-full"
              />
            </Box>
            <Box className="text-center dark:text-neutral space-y-5 dark:bg-secondary bg-gray-100 px-4 py-14">
              <Typography
                component={"div"}
                variant="subtitle2"
                display={"block"}
                textAlign={"center"}
                className="text-primary uppercase"
              >
                selected
              </Typography>
              <Typography
                component={"div"}
                variant="h4"
                display={"block"}
                textAlign={"center"}
              >
                Chef Choice
              </Typography>
              <Typography
                component={"div"}
                variant="subtitle1"
                display={"block"}
                textAlign={"center"}
                className="text-gray-400 pb-6"
              >
                Lorem Ipsum is simply dummy printing
              </Typography>
              <Link
                href="/"
                className="text-primary text-sm underline underline-offset-4 uppercase pt-6 text-center"
              >
                view menu
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SpecialDishes;
