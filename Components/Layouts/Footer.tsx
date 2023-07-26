"use client";
import {
  Container,
  Box,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import fbImg from "../../public/assets/images/fb.png";
import twitterImg from "../../public/assets/images/twitter.png";
import instagramImg from "../../public/assets/images/instagram.png";
import appStoreImg from "../../public/assets/images/appStore.png";
import googlePlayImg from "../../public/assets/images/googlePlay.png";
import logo from "../../public/assets/images/logo.png";
import moment from "moment";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import RestaurantOrnament from "../../public/assets/images/RestaurantOrnament.png";
import strengthImg from "../../public/assets/images/Restaurant-Offer-Image-1.png";
import strengthImg1 from "../../public/assets/images/Restaurant-Offer-Image-2.png";
import strengthImg2 from "../../public/assets/images/Restaurant-Offer-Image-3.png";
import strengthImg3 from "../../public/assets/images/Restaurant-Offer-Image-4.png";
import lineImg from "../../public/assets/images/Restaurant-Pattern-2.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [savedEmails, setSavedEmails] = useState<string[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const updatedEmails = [...savedEmails, email];
    setSavedEmails(updatedEmails);
    localStorage.setItem(
      "Users Subscribe Email:",
      JSON.stringify(updatedEmails)
    );
    setEmail("");
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://hungerstation.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3e3d49db.jpg&w=1440&q=75')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "contain",
          py: 10,
        }}
      >
        <Box sx={{ px: { md: 8, sm: 4, xs: 3 } }}>
          <Grid container spacing={3} alignItems={"center"}>
            {/*------ Left Section -----*/}
            <Grid item xs={12} sm={12} md={3} textAlign={"center"}>
              {[...Array(7)]?.map((_, index) => (
                <Link
                  key={index}
                  href={`${
                    index === 0
                      ? "/"
                      : index === 1
                      ? "menus"
                      : index === 2
                      ? "about-us"
                      : index === 3
                      ? "our-chefs"
                      : index === 4
                      ? "pages"
                      : index === 5
                      ? "contact-us"
                      : "blog"
                  }`}
                  className="text-sm my-7 block text-gray-400 hover:text-primary uppercase font-normal"
                  style={{
                    letterSpacing: "0.2em",
                  }}
                >
                  {index === 0
                    ? "Home"
                    : index === 1
                    ? "Menus"
                    : index === 2
                    ? "About US"
                    : index === 3
                    ? "our chefs"
                    : index === 4
                    ? "pages"
                    : index === 5
                    ? "contact"
                    : "blog"}
                </Link>
              ))}
            </Grid>
            {/*------ Middle Section -----*/}
            <Grid item xs={12} sm={12} md={6}>
              <Box className="relative flex w-full">
                <Image
                  src={lineImg}
                  alt="Hero Subtitle Image"
                  className="w-3"
                />
                <Box className="lg:py-24 md:py-16 py-8 md:px-6 px-3 dark:bg-secondary bg-gray-100 dark:text-neutral w-full text-center">
                  <Link href={"/"}>
                    <Box className="relative text-center">
                      <Typography
                        component="div"
                        variant="h5"
                        display={"block"}
                        className="w-[5.5rem] h-2 bg-accent absolute lg:left-[13.5rem] sm:left-[16.5rem] xxs:left-[5.6rem] xs:left-[7.1rem] left-[3.8rem] bottom-1 left bg-opacity-60"
                      ></Typography>
                      <Typography
                        component="div"
                        variant="h5"
                        display={"block"}
                        className=""
                        sx={{ letterSpacing: "0.3em" }}
                      >
                        Foody
                      </Typography>
                    </Box>
                  </Link>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    display={"block"}
                    className="text-gray-400 mt-4"
                  >
                    Muradpur, Chittagong, Bangladesh
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    display={"block"}
                    className="text-gray-400"
                  >
                    mdawladbdinfo@gmail.com
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    display={"block"}
                    className="text-gray-400"
                  >
                    Booking Request : +880 1725385909
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle1"
                    display={"block"}
                    className="text-gray-400"
                  >
                    Open : 09:00 am - 01:00 pm
                  </Typography>
                  <Image
                    src={RestaurantOrnament}
                    alt="Hero Subtitle Image"
                    className="w-20 mx-auto my-10"
                  />
                  <Typography
                    component="div"
                    variant="h3"
                    display={"block"}
                    fontSize={{ md: 30, sm: 20, xs: 15 }}
                    className="dark:text-neutral text-center capitalize"
                  >
                    Get News & Offers
                  </Typography>

                  <Typography
                    component="div"
                    variant="subtitle1"
                    display={"block"}
                    className="text-gray-400"
                  >
                    Subscribe us & Get 25% Off.
                  </Typography>
                  <Box
                    textAlign={"center"}
                    mt={{ md: 7, sm: 4, xs: 5 }}
                    display={{ md: "flex", sm: "flex" }}
                  >
                    <input
                      type="text"
                      className="focus:outline-none w-full py-3 dark:text-neutral px-4 border-l border-t border-b border-gray-700 dark:bg-primary bg-gray-100"
                      placeholder="Type your email"
                    />
                    <Button
                      sx={{
                        width: { md: 200, sm: 200, xs: 1 },
                        fontSize: 14,
                        // border: "2px solid #E4C590 !important",
                        color: "#000 !important",
                        borderRadius: "unset",
                        letterSpacing: "0.3em",
                        py: { md: 1.5 },
                        backgroundColor: "#E4C590 !important",
                        mx: "auto",
                      }}
                      variant="outlined"
                    >
                      subscribe
                    </Button>
                  </Box>
                </Box>
                <Image
                  src={lineImg}
                  alt="Hero Subtitle Image"
                  className="w-3"
                />
              </Box>
            </Grid>
            {/*----- Right Section -----*/}
            <Grid item xs={12} sm={12} md={3} textAlign={"center"}>
              {[...Array(7)]?.map((_, index) => (
                <Link
                  key={index}
                  href={
                    index === 0
                      ? "https://www.facebook.com/awlads/"
                      : index === 1
                      ? "https://www.linkedin.com/in/mdawlad/"
                      : index === 2
                      ? "https://www.instagram.com/mdawlad909/"
                      : index === 3
                      ? "https://www.twitter.com/AwladulS/"
                      : index === 4
                      ? "https://github.com/mdawlad29?tab=repositories"
                      : index === 5
                      ? "https://www.instagram.com/mdawlad909/"
                      : "https://www.google.com/maps"
                  }
                  target="_blank"
                  className="text-sm my-7 block text-gray-400 hover:text-primary uppercase font-normal"
                  style={{
                    letterSpacing: "0.2em",
                  }}
                >
                  {index === 0
                    ? "facebook"
                    : index === 1
                    ? "linkedin"
                    : index === 2
                    ? "instagram"
                    : index === 3
                    ? "twitter"
                    : index === 4
                    ? "github"
                    : index === 5
                    ? "thread"
                    : "google map"}
                </Link>
              ))}
            </Grid>
          </Grid>
          <Typography
            component={"span"}
            variant="subtitle1"
            display="block"
            className="capitalize dark:text-neutral"
            textAlign={"center"}
            pt={8}
          >
            &#169; {moment().year()} Design{" "}
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/mdawlad/"}
              className="text-primary"
            >
              {" "}
              By Mohammad Awlad
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
