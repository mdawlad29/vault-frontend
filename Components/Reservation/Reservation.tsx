import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import icon from "../../public/assets/images/flower.png";
import Image from "next/image";
import { clientUsers } from "@/Data/DummyData";

const Reservation = () => {
  const [person, setPerson] = React.useState();

  const handleChange = (event: any) => {
    setPerson(event.target.value);
  };

  const [activeImg, setActiveImg] = React.useState(1);
  const [previousActiveImg, setPreviousActiveImg] = React.useState(1);

  React.useEffect(() => {
    if (clientUsers?.length > 1) {
      setActiveImg(clientUsers[1].id);
    }
  }, []);

  const handleClickImg = (item: any) => {
    setPreviousActiveImg(activeImg);
    setActiveImg(item?.id);
  };

  // Function to auto change the active image every 1000 milliseconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = clientUsers.findIndex(
        (item) => item.id === activeImg
      );
      const nextIndex = (currentIndex + 1) % clientUsers.length;
      setActiveImg(clientUsers[nextIndex].id);
      setPreviousActiveImg(activeImg);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeImg]);

  const activeUser = clientUsers.find((user) => user.id === activeImg);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://vault.uicore.co/restaurant/wp-content/uploads/sites/55/2022/11/Restaurant-Testimonial-Image.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "contain",
          height: "100vh",
          backgroundAttachment: "fixed",
        }}
      >
        {/* <Box className="dark:bg-primary"> */}
        <Box className="flex justify-center items-center text-neutral text-center">
          <Box mt={5}>
            <Typography component="div" variant="h4">
              99
            </Typography>

            <Typography
              component="div"
              variant="h5"
              letterSpacing={"0.02em"}
              fontSize={{ md: 32, sm: 30, xs: 16 }}
              width={{ md: 800, sm: 1, xs: 1 }}
              height={{ md: 150, sm: 150, xs: 120 }}
              px={4}
            >
              {activeUser?.desc}
            </Typography>

            <Box className="flex justify-center items-center gap-6">
              {clientUsers?.map((item: any, index) => (
                <Image
                  key={index}
                  onClick={() => handleClickImg(item)}
                  src={item?.image}
                  alt="user image"
                  width={70}
                  height={70}
                  priority
                  className={`rounded-full ${
                    activeImg === item.id ? "scale-125" : ""
                  }`}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="relative dark:bg-primary">
        <Box sx={{ px: { md: 8, sm: 4, xs: 3 } }}>
          <Grid container>
            {/* ----- Left Info------ */}
            <Grid item xs={12} md={8} mt={{ md: -36, xs: -18 }}>
              <Box className="lg:py-16 md:py-10 py-6 md:px-6 px-3 dark:bg-secondary bg-gray-100">
                <Typography
                  component="div"
                  variant="h3"
                  display={"block"}
                  fontSize={{ md: 48, sm: 36, xs: 24 }}
                  className="dark:text-neutral text-center capitalize"
                >
                  Online Reservation
                </Typography>
                <Typography
                  component="div"
                  variant="subtitle1"
                  display={"block"}
                  className="dark:text-gray-400 text-center capitalize"
                >
                  Booking request
                  <Typography
                    component="span"
                    variant="subtitle1"
                    className="dark:text-primary text-center px-1"
                  >
                    +880-1725-385909
                  </Typography>
                  or fill out the order form
                </Typography>
                <Grid container spacing={4} my={4}>
                  {/* Name */}
                  <Grid item xs={12} sm={6} md={6}>
                    <input
                      type="text"
                      className="focus:outline-none w-full py-3 dark:text-neutral px-4 border border-gray-600 border-dashed dark:bg-primary bg-gray-100"
                      placeholder="Type your name"
                    />
                  </Grid>
                  {/* Phone */}
                  <Grid item xs={12} sm={6} md={6}>
                    <input
                      type="email"
                      className="focus:outline-none w-full py-3 dark:text-neutral px-4 border border-gray-600 border-dashed dark:bg-primary bg-gray-100"
                      placeholder="Type your email"
                    />
                  </Grid>
                  {/* Date */}
                  <Grid item xs={12} sm={6} md={4}>
                    <input
                      type="date"
                      className="focus:outline-none w-full py-3 dark:text-neutral px-4 border border-gray-600 border-dashed dark:bg-primary bg-gray-100"
                      placeholder="Date"
                    />
                  </Grid>

                  {/* Hour */}
                  <Grid item xs={12} sm={6} md={4}>
                    <input
                      type="time"
                      className="focus:outline-none w-full py-3 dark:text-neutral px-4 border border-gray-600 border-dashed dark:bg-primary bg-gray-100"
                      placeholder="Hour"
                    />
                  </Grid>
                  {/* Person */}
                  <Grid item xs={12} sm={12} md={4}>
                    <select className="focus:outline-none w-full py-[0.9rem] dark:text-neutral px-4 border border-gray-600 border-dashed dark:bg-primary bg-gray-100">
                      <option value={"1Person"} className="text-sm font-normal">
                        1Person
                      </option>
                      <option value="2Person" className="text-sm font-normal">
                        2Person
                      </option>
                      <option value="1Person" className="text-sm font-normal">
                        3Person
                      </option>
                    </select>
                  </Grid>
                  {/* Message */}
                  <Grid item xs={12}>
                    <textarea
                      rows={6}
                      className="focus:outline-none w-full py-3 dark:text-neutral px-4 border border-gray-600 border-dashed dark:bg-primary bg-gray-100"
                      placeholder="Type your message"
                    />
                  </Grid>
                </Grid>
                <Button
                  sx={{
                    width: 1,
                    fontSize: 14,
                    border: "2px solid #E4C590 !important",
                    borderRadius: "unset",
                    letterSpacing: "0.2em",
                    py: { md: 1.5 },
                    bgcolor: "#E4C590 !important",
                    color: "#000 !important",
                  }}
                  variant="outlined"
                >
                  find a table
                </Button>
              </Box>
            </Grid>
            {/*------ Right Info ------*/}
            <Grid item xs={12} md={4} mt={{ md: -36, xs: 0 }}>
              <Box
                sx={{
                  backgroundImage: `url('https://vault.uicore.co/restaurant/wp-content/uploads/sites/55/2022/11/Restaurant-Contact-BG.webp')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  objectFit: "contain",
                  height: { md: "108.4vh" },
                }}
              >
                <Box className="lg:py-16 md:py-10 py-6 md:px-6 px-3">
                  <Typography
                    component="div"
                    variant="h3"
                    display={"block"}
                    className="dark:text-neutral text-center capitalize"
                  >
                    Contact Us
                  </Typography>
                  <Box className="my-10">
                    <Typography
                      component="div"
                      variant="subtitle1"
                      className="dark:text-neutral text-center"
                    >
                      Book Through Call
                    </Typography>
                    <Typography
                      component="div"
                      variant="h5"
                      className="dark:text-primary text-center"
                    >
                      +880-1725-385909
                    </Typography>
                  </Box>
                  <Box className="md:space-y-16 space-y-7">
                    {/* location */}
                    <Typography
                      component="div"
                      variant="h6"
                      className="dark:text-neutral text-center"
                    >
                      Location
                      <Typography
                        component="div"
                        variant="subtitle1"
                        className="dark:text-gray-400 text-center"
                      >
                        Muradpur, Chittagong, Bangladesh
                      </Typography>
                    </Typography>
                    {/* lunch */}
                    <Typography
                      component="div"
                      variant="h6"
                      className="dark:text-neutral text-center"
                    >
                      Lunch Time
                      <Typography
                        component="div"
                        variant="subtitle1"
                        className="dark:text-gray-400 text-center"
                      >
                        Monday to Sunday 11.00 am – 2.30pm
                      </Typography>
                    </Typography>
                    {/* lunch */}
                    <Typography
                      component="div"
                      variant="h6"
                      className="dark:text-neutral text-center"
                    >
                      Lunch Time
                      <Typography
                        component="div"
                        variant="subtitle1"
                        className="dark:text-gray-400 text-center"
                      >
                        Monday to Sunday 11.00 am – 2.30pm
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Image
          src={icon}
          alt="icon"
          width={100}
          height={100}
          priority
          className="absolute md:-bottom-24 md:block hidden right-0"
        />
      </Box>
      {/* </Box> */}
    </>
  );
};

export default Reservation;
