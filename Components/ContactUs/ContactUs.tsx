import { Box, Button, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Link from "next/link";


const phone = "+880 1777877781";
const email = "info@marhababd.com";
const address =
  "Corporate Office: Salam Heights (9th floor), Flat#B, Zakir Hossain Road, South Khulshi, Chittagong, Bangladesh, 4211";

const ContactUs = () => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [ClientPhone, setClientPhone] = useState("");
  const [cntUpdates, setCntUpdates] = useState<string[]>([]);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const contactUpdates = [
      ...cntUpdates,
      clientName,
      clientEmail,
      ClientPhone,
    ];
    setCntUpdates(contactUpdates);
    localStorage.setItem("Contact Info: ", JSON.stringify(contactUpdates));
    setClientName("");
    setClientEmail("");
    setClientPhone("");
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1280')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center",
          objectFit: "contain",
          backgroundAttachment: "fixed",
          py: 5,
        }}
      >
        
          <Container sx={{ py: 12 }}>
            <div className="md:bg-gray-100 bg-gray-500 bg-opacity-50 md:bg-opacity-30 rounded-md grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="text-neutral space-y-7 py-16 px-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-darkTextColor">
                    Get in touch
                  </h1>
                  <p className="text-normal  dark:text-neutral text-lg mt-2">
                    Fill in the form to start a conversation
                  </p>
                </div>
                {/*--- Address ---*/}
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-14 h-14"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md">
                    <Link
                      target="_blank"
                      href="https://goo.gl/maps/FnreVMydjwrpVcHx6"
                    >
                      {address}
                    </Link>
                  </div>
                </div>
                {/*--- Phone Number ---*/}
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md">
                    <a href={`callto:${phone}`}>{phone}</a>
                  </div>
                </div>
                {/*--- Email ---*/}
                <div className="flex items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md">
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center space-y-7 bg-gradient-to-r from-[#be8c26] from-40% to-[#1c2a41] to-90% bg-opacity-60 py-16 px-8 rounded-br-md md:rounded-tr-md md:rounded-bl-none rounded-bl-md"
              >
                {/*--- Name ---*/}
                <div>
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-primary focus:outline-none"
                  />
                </div>
                {/*--- Email ---*/}
                <div>
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-primary focus:outline-none"
                  />
                </div>
                {/*--- Phone ---*/}
                <div>
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="number"
                    value={ClientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Typo your phone number"
                    className="w-full py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-primary focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-to-r !from-[#011B41] !to-[#FFBF3B] "
                  onClick={handleSubmit}
                  sx={{
                    // bgcolor: "#fff !important",
                    // color: "#000",
                    textTransform: "none",
                    minWidth: 160,
                    fontSize: 18,
                    borderRadius: "20px !important",
                  }}
                  variant="contained"
                  startIcon={<SendIcon />}
                >
                  Send
                </Button>
              </form>
            </div>
          </Container>
      
      </Box>
    </>
  );
};

export default ContactUs;
