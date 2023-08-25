import { MenuData } from "@/Data/DummyData";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";

const StarterMenu = () => {
  return (
    <>
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
          starter menu
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
          Appetizers
        </Typography>
        <Grid container spacing={2}>
          {MenuData?.map((item: any, index: number) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                key={index}
                className={`${
                  index === 0
                    ? "border-r pr-4 border-gray-500"
                    : index === 2
                    ? "border-r pr-4 border-gray-500"
                    : index === 4
                    ? "border-r pr-4 border-gray-500"
                    : ""
                }`}
              >
                <Box className="shadow hover:shadow-lg hover:-translate-y-1 duration-500 ease-in-out hover:scale-105 px-5 py-6 dark:text-neutral">
                  <Box className="grid md:grid-cols-3 grid-cols-1 items-center">
                    <Box className="md:col-span-1">
                      <Image
                        src={item?.image}
                        alt="Icon"
                        className="rounded-xl w-28 h-28 mx-auto"
                        width={100}
                        height={100}
                        priority
                      />
                    </Box>
                    <Box className="md:col-span-2">
                      <Typography
                        component={"div"}
                        variant="h6"
                        display={"block"}
                        className="flex justify-between items-center capitalize"
                      >
                        {item?.name}
                        <Typography
                          component={"div"}
                          variant="h6"
                          display={"block"}
                          className="text-primary"
                        >
                          {`$${item?.price}`}
                        </Typography>
                      </Typography>
                      <Typography
                        component="div"
                        variant="subtitle2"
                        display="block"
                        textAlign="justify"
                        className="dark:text-gray-400"
                      >
                        {item?.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default StarterMenu;
