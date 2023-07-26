"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Grid, Typography, Rating, Box } from "@mui/material";
import clientImg from "../../public/assets/images/restaurant with outline01.png";
import icon from "../../public/assets/images/icon5.png";
import { CustomTooltip } from "../../Shared/CustomTooltip";
import { clientUsers } from "@/Data/DummyData";

const ClientStory = () => {
  const [clientUser, setClientUser] = useState(clientUsers);
  const [hovered, setHovered] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [autoMoveEnabled, setAutoMoveEnabled] = useState(true);

  /*--------- Auto Moving function -----------*/
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered && autoMoveEnabled) {
        setClientUser((prevUsers) => {
          const updatedUsers = [...prevUsers];
          const lastIndex = updatedUsers.length - 1;
          const temp = updatedUsers[lastIndex];
          for (let i = lastIndex; i > 0; i--) {
            updatedUsers[i] = updatedUsers[i - 1];
          }
          updatedUsers[0] = temp;
          return updatedUsers;
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered, autoMoveEnabled]);

  /*--------- Image click to stop function -----------*/
  const handleClickImg = (index: any) => {
    const updatedClientUser = [...clientUser];
    const temp = updatedClientUser[index];
    updatedClientUser[index] = updatedClientUser[0];
    updatedClientUser[0] = temp;
    setClientUser(updatedClientUser);
    setAutoMoveEnabled(false);

    setTimeout(() => {
      setAutoMoveEnabled(true);
    }, 10000);
    setActiveImg(activeImg);
  };

  return (
    <>
      <Box id="testimonial" sx={{ py: { md: 10, sm: 10, xs: 6 } }}>
        <Grid
          container
          item
          spacing={3}
          justifyContent="center"
          alignItems="center"
          className="group"
        >
          {/*---- Client Info ------*/}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className="space-y-2 order-2 md:order-1"
          >
            <Typography
              component={"div"}
              variant="subtitle2"
              className="text-secondary dark:text-neutral uppercase"
              sx={{ letterSpacing: "0.3em" }}
              fontWeight={600}
              textAlign={{ md: "left", sm: "left", xs: "center" }}
              mt={{ md: 0, sm: 0, xs: 4 }}
            >
              client story
            </Typography>
            <Typography
              component={"div"}
              variant="h4"
              textTransform={"capitalize"}
              fontWeight={600}
              width={250}
              fontSize={{ xs: 22, sm: 40, md: 40 }}
              className="dark:text-darkTextColor"
            >
              our beloved customers
            </Typography>
            <Box sx={{ pt: { md: 2 } }}>
              <Rating size="small" readOnly value={clientUser[0].rating} />
            </Box>
            <Typography
              component={"div"}
              variant="subtitle2"
              className="text-gray-600 dark:text-neutral cursor-grab"
              textAlign={"justify"}
              width={300}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {clientUser[0].desc}
            </Typography>
            <Typography
              component={"div"}
              variant="subtitle1"
              fontWeight={500}
              className="text-secondary dark:text-darkTextColor uppercase cursor-grab"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {clientUser[0]?.name}
              <Typography
                component={"div"}
                variant="subtitle2"
                className="text-gray-600 dark:text-neutral font-medium text-xs normal-case"
              >
                {clientUser[0]?.title}
              </Typography>
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              width={{ md: 1, sm: 1, xs: 100 }}
              className="float-right group-hover:scale-110 duration-300 ease-in-out"
            >
              <Image src={icon} alt="icon" priority width={170} />
            </Box>
          </Grid>
          {/*---- Testimonial Info ------*/}
          <Grid item xs={12} sm={6} md={6} className="order-1 md:order-2">
            <Box className="relative">
              <Image
                src={clientImg}
                alt="client image"
                priority
                className="group-hover:scale-95 duration-300 ease-in-out"
              />
              {clientUser.map((user, index) => {
                return (
                  <Box key={index}>
                    <CustomTooltip
                      title={
                        <Typography
                          component={"span"}
                          variant="subtitle2"
                          display={"block"}
                          fontSize={9}
                          textTransform={"capitalize"}
                        >
                          {user?.name}
                        </Typography>
                      }
                      placement="top"
                      arrow
                    >
                      <Image
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => handleClickImg(index)}
                        src={user?.image}
                        alt="user image"
                        width={200}
                        height={200}
                        priority
                        className={`object-contain bg-neutral rounded-full cursor-grab absolute ${
                          activeImg === index
                            ? "lg:bottom-16 lg:left-4 sm:bottom-10 sm:-left-5 -left-3 bottom-5 md:w-24 md:h-24 w-20 h-20 border-[0.4rem] hover:border-4 border-primary hover:border-secondary duration-300 ease-in-out hover:scale-105"
                            : index === 2
                            ? "lg:-top-4 lg:right-60 md:-top-1 md:right-28 -top-1 right-16 w-16 h-16 hover:scale-110 duration-200 border-2 border-purple-500"
                            : index === 3
                            ? "lg:top-48 lg:right-3 md:bottom-28 bottom-10 -right-4 w-16 h-16 hover:scale-110 duration-200 border-2 border-green-500"
                            : index === 4
                            ? "lg:-bottom-2 lg:right-32 md:right-28 md:-bottom-6 -bottom-5 right-24 w-16 h-16 hover:scale-110 duration-200 border-2 border-pink-500"
                            : index === 1
                            ? "lg:top-20 lg:left-0 md:top-3 top-0 left-2 w-16 h-16 hover:scale-110 duration-200 border-2 border-cyan-500"
                            : "lg:bottom-16 lg:left-4 sm:bottom-10 sm:-left-5 -left-3 bottom-5 md:w-24 md:h-24 w-20 h-20 border-[0.4rem] hover:border-4 border-primary hover:border-secondary duration-300 ease-in-out hover:scale-105"
                        }`}
                      />
                    </CustomTooltip>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ClientStory;
