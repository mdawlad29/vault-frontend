import React from "react";
import dynamic from "next/dynamic";
const GlobalMetadata = dynamic(() => import("../globalMetadata"), {
  ssr: false,
});

const ReservationPage = () => {
  return (
    <>
      <GlobalMetadata
        title="Reservation - Foody"
        description="Foody portfolio"
      />
      ReservationPage
    </>
  );
};

export default ReservationPage;
