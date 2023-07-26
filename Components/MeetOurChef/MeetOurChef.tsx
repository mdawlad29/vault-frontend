import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import chef1 from "../../public/assets/images/Restaurant-Chef-1.png";
import chef2 from "../../public/assets/images/Restaurant-Chef-2.png";
import chef3 from "../../public/assets/images/Restaurant-Chef-3.png";
import { Box, Grid, Container, Typography } from "@mui/material";
import Image from "next/image";

const MeetOurChef = () => {
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
            EXPERIENCED TEAM
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
            Meet Our Chef
          </Typography>
          <Grid container spacing={3}>
            {[...Array(3)]?.map((_, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Box>
                  <Image
                    src={index === 0 ? chef1 : index === 1 ? chef2 : chef3}
                    alt="icon"
                    width={400}
                    height={400}
                    priority
                  />
                  <Typography
                    component="div"
                    variant="h4"
                    display={"block"}
                    className="dark:text-neutral capitalize"
                    mt={2}
                  >
                    {index === 0
                      ? "Willium Joe"
                      : index === 1
                      ? "Steave Den"
                      : "Lily Sopy"}
                  </Typography>
                  <Typography
                    component="div"
                    variant={"subtitle2"}
                    fontSize={12}
                    textTransform={"uppercase"}
                    sx={{ letterSpacing: "0.3em", my: 1 }}
                    className="text-primary"
                  >
                    MASTER CHEF
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    display={"block"}
                    className="dark:text-gray-400"
                  >
                    Lorem Ipsum is simply dummy printing and typeset industry
                    lorem Ipsum has been the industrys
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

export default MeetOurChef;
