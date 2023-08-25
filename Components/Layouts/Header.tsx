"use client";
import * as React from "react";
import {
  Container,
  Button,
  Typography,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  Drawer,
  CssBaseline,
  Divider,
  Box,
  AppBar,
  useScrollTrigger,
  Badge,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { AiFillShopping } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children as React.ReactElement, {
    elevation: trigger ? 2 : 0,
  });
}

const navItems = [
  { name: "HOME", link: "/" },
  { name: "MENU", link: "/restaurent/our-menu" },
  { name: "ABOUT US", link: "/restaurent/about-us" },
  { name: "RESERVATION", link: "/restaurent/reservation" },
  { name: "BLOG", link: "/restaurent/blog" },
  { name: "CONTACT US", link: "/restaurent/contact-us" },
];
const activeColor = "text-primary";
const inactiveColor = "dark:!text-neutral !text-gray-900";

const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState(navItems[0]?.name);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /*----- Mobile Responsive Drawer ------*/
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className="dark:bg-secondary dark:text-neutral !h-screen"
    >
      <Link href={"/"}>
        <Box className="relative text-center my-2">
          <Typography
            component="div"
            variant="h5"
            display={"block"}
            className="w-[5.5rem] h-2 bg-accent absolute bottom-1 left-[4.3rem] bg-opacity-60"
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
      <Divider className="dark:!bg-secondary" />
      <List>
        {navItems.map((item: any, index) => (
          <Link href={item?.link} key={index}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  "&:hover": {
                    color: "#E4C590 !important",
                  },
                }}
              >
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: 14,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase !important",
                    },
                  }}
                  primary={item?.name}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Box mx={2}>
        <Link href="/restaurent/reservation">
          <Button
            sx={{
              width: 1,
              fontSize: 14,
              border: "1px solid #E4C590 !important",
              color: "#E4C590 !important",
              borderRadius: "unset",
              letterSpacing: "0.2em",
              "&:hover": {
                backgroundColor: "#E4C590 !important",
                color: "#000 !important",
              },
            }}
            variant="outlined"
          >
            find a table
          </Button>
        </Link>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar
            component="nav"
            className="dark:!bg-secondary !bg-neutral dark:!text-neutral !text-gray-900"
          >
            <Box sx={{ px: { md: 8, sm: 4, xs: 3 }, width: 1 }}>
              <Toolbar disableGutters={true} sx={{ width: 1 }}>
                <Box
                  sx={{
                    display: { md: "none", sm: "flex", xs: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 0,
                    width: 1,
                  }}
                >
                  <Link href={"/"}>
                    <Box className="relative">
                      <Typography
                        component="div"
                        variant="h5"
                        display={"block"}
                        className="w-[5.5rem] h-2 bg-accent absolute bottom-1 bg-opacity-60"
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
                  <Box className="flex items-center md:gap-6 gap-3">
                    <ThemeSwitcher />
                    {mobileOpen ? (
                      <CloseIcon onClick={handleDrawerToggle} />
                    ) : (
                      <MenuIcon onClick={handleDrawerToggle} />
                    )}
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "none", md: "block" },
                    textTransform: "capitalize !important",
                    fontSize: 26,
                  }}
                >
                  <Link href={"/"}>
                    <Box className="relative">
                      <Typography
                        component="div"
                        variant="h5"
                        display={"block"}
                        className="w-[5.5rem] h-2 bg-accent absolute bottom-1 bg-opacity-60"
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
                </Typography>
                {/*---- Item ----*/}
                <Box
                  sx={{
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                >
                  {navItems.map((item: any, index) => (
                    <Link href={item?.link} key={index}>
                      <Button
                        sx={{
                          textTransform: "uppercase !important",
                          fontSize: 14,
                          ml: 1,
                          letterSpacing: "0.2em",
                          "&:hover": {
                            color: "#E4C590 !important",
                          },
                        }}
                        className={`${
                          active === item.name ? activeColor : inactiveColor
                        } mx-2`}
                        onClick={() => setActive(item.name)}
                      >
                        {item?.name}
                      </Button>
                    </Link>
                  ))}
                </Box>
                {/*--- Button ----*/}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "none", md: "block" },
                    textTransform: "capitalize !important",
                    fontSize: 26,
                  }}
                >
                  <Box
                    textAlign={"right"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Link href="/restaurent/reservation">
                      <Button
                        sx={{
                          width: { md: 170 },
                          fontSize: 14,
                          border: "1px solid #E4C590 !important",
                          color: "#E4C590 !important",
                          borderRadius: "unset",
                          letterSpacing: "0.2em",
                          "&:hover": {
                            backgroundColor: "#E4C590 !important",
                            color: "#000 !important",
                          },
                        }}
                        variant="outlined"
                      >
                        find a table
                      </Button>
                    </Link>
                    <ThemeSwitcher />
                  </Box>
                </Box>
              </Toolbar>
            </Box>
          </AppBar>
        </ElevationScroll>

        {/*----- Mobile Responsive ------*/}
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 240,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
