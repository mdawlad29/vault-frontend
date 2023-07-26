import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import Image from "next/image";
import CustomTabs from "@/Shared/CustomTabs";
import { DeliciousData } from "@/Data/DummyData";
import Link from "next/link";

const DeliciousMenu = () => {
  const tabs = DeliciousData.map((data) => ({
    label: data.title,
    content: (
      <>
        <Grid container spacing={2} mt={1}>
          {data.menu.map((item, index) => {
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
        {/*--- Button ---*/}
        <Box textAlign={"center"} mt={7} className="space-y-6">
          <Typography
            component={"span"}
            display={"block"}
            variant="subtitle1"
            className="text-gray-400"
          >
            During winter daily from 7:00 pm to 9:00 pm
          </Typography>
          <Box>
            <Link href="/reservation">
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
      </>
    ),
  }));

  return (
    <>
      <Box className="relative lg:py-32 md:py-24 py-16 dark:bg-primary bg-gray-100">
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
            width={100}
            height={100}
            priority
          />
          <Typography
            component="div"
            variant="h3"
            display={"block"}
            fontSize={{ md: 48, sm: 36, xs: 24 }}
            className="dark:text-neutral text-center capitalize"
            my={4}
          >
            Delicious Menu
          </Typography>
          <CustomTabs tabs={tabs} />
        </Box>
      </Box>
    </>
  );
};

export default DeliciousMenu;
