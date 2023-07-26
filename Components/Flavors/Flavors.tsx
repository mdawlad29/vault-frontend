import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import RestaurantOrnamentBg from "../../public/assets/images/Restaurant-Flavors-BG-1.png";
import RestaurantOrnamentBg1 from "../../public/assets/images/Restaurant-Flavors-BG-2.png";
import patternImg from "../../public/assets/images/Restaurant-Pattern.png";
import itemImg1 from "../../public/assets/images/Restaurant-Flavors-Image-1.png";
import itemImg2 from "../../public/assets/images/Restaurant-Flavors-Image-2.png";
import itemImg3 from "../../public/assets/images/Restaurant-Flavors-Image-3.png";
import Link from "next/link";

const Flavors = () => {
  return (
    <>
      <Box className="relative lg:py-32 md:py-24 py-16 dark:bg-secondary bg-gray-100">
        <Image
          src={RestaurantOrnamentBg}
          alt="Hero Subtitle Image"
          className="absolute right-0 top-0 lg:w-80 md:w-44 w-28"
        />
        <Box sx={{ px: { md: 8, sm: 4, xs: 3 } }}>
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
            textAlign={"center"}
            my={4}
            fontSize={{ md: 48, sm: 36, xs: 24 }}
            className="dark:text-neutral z-10"
          >
            We Offer Top Flavours
          </Typography>
          <Grid container spacing={2}>
            {Array.from(Array(3))?.map((item: any, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Typography
                  component="div"
                  variant="subtitle1"
                  display={"block"}
                  textAlign={"center"}
                  pb={5}
                  className="dark:text-gray-400 font-normal"
                >
                  {`${
                    index === 0
                      ? ""
                      : index === 1
                      ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever."
                      : ""
                  }`}
                </Typography>
                <Box className="relative flex justify-center items-center">
                  <Image
                    src={patternImg}
                    alt="Restaurant Flavors"
                    className="h-96 object-contain"
                    width={400}
                    height={400}
                    priority
                  />
                  <Image
                    src={
                      index === 0 ? itemImg1 : index === 1 ? itemImg2 : itemImg3
                    }
                    alt="Restaurant Flavors"
                    className="h-72 object-contain absolute top-12 "
                    width={400}
                    height={400}
                    priority
                  />
                </Box>
                <Box className="text-center">
                  <Typography
                    component="div"
                    variant="h4"
                    display={"block"}
                    textAlign={"center"}
                    my={2}
                    className="dark:text-neutral"
                  >
                    {`${
                      index === 0
                        ? "Breakfast"
                        : index === 1
                        ? "Appetizers"
                        : "Drinks"
                    }`}
                  </Typography>
                  <Link
                    href={""}
                    className="dark:text-primary underline uppercase text-sm tracking-widest"
                  >
                    view menu
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Image
          src={RestaurantOrnamentBg1}
          alt="Hero Subtitle Image"
          className="absolute left-0 bottom-0 lg:w-52 md:w-36 w-28"
          width={400}
          height={400}
          priority
        />
      </Box>
    </>
  );
};

export default Flavors;
