"use client";
import dynamic from "next/dynamic";
const GlobalMetadata = dynamic(() => import("../../globalMetadata"), {
  ssr: false,
});
const ContactUs = dynamic(
  () => import("../../../Components/ContactUs/ContactUs"),
  {
    ssr: false,
  }
);

const ContactUsPage = () => {
  return (
    <>
      <GlobalMetadata
        title="Contact US - Foody"
        description="Foody portfolio"
      />
      <ContactUs />
    </>
  );
};

export default ContactUsPage;
