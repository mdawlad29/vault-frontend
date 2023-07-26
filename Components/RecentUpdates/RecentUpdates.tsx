import { Box, Typography, Container, Grid, Button } from "@mui/material";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import Image from "next/image";
import img1 from "../../public/assets/images/Restaurant-Blog-1.png";
import img2 from "../../public/assets/images/Restaurant-Blog-2.png";
import img3 from "../../public/assets/images/Restaurant-Blog-3.png";
import Link from "next/link";

const RecentUpdates = () => {
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
            RECENT UPDATES
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
            Upcoming Events
          </Typography>
          <Grid container spacing={3}>
            {[...Array(3)]?.map((_, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Box className="relative group">
                  <Box className="relative overflow-hidden">
                    <Image
                      src={index === 1 ? img2 : index === 1 ? img1 : img3}
                      alt="Events Image"
                      width={400}
                      height={300}
                      priority
                      className="group-hover:scale-125 duration-300 ease-in-out h-96"
                    />
                  </Box>
                  <Box className="absolute bottom-5 left-10 text-neutral">
                    <Typography
                      component={"div"}
                      variant="subtitle2"
                      className="text-primary bg-primary rounded uppercase w-32 text-center"
                    >
                      {index === 0
                        ? "food, flavour"
                        : index === 1
                        ? "healthy food"
                        : "recipe"}
                    </Typography>
                    <Typography component={"div"} variant="h6" className="">
                      {index === 0
                        ? "Flavour so good you'll try eat with your eyes."
                        : index === 1
                        ? "Try now recipes with us, food changes the mood."
                        : "The 7 best places to eat in Chittagong."}
                    </Typography>
                    <Typography
                      component={"div"}
                      variant="subtitle2"
                      className="hidden group-hover:block -translate-y-2 pt-4 duration-200 ease-in-out uppercase text-xs"
                    >
                      marketing guy | december 29, 2019
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box textAlign={"center"} mt={{ md: 5, sm: 5, xs: 3 }}>
            <Link href="/blog">
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
                view our blog
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RecentUpdates;
