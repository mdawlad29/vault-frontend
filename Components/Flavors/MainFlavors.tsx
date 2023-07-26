import dynamic from "next/dynamic";
const Flavors = dynamic(() => import("./Flavors"), { ssr: false });
const Royalty = dynamic(() => import("./Royalty"), { ssr: false });
const FlavorsLobster = dynamic(() => import("./FlavorsLobster"), {
  ssr: false,
});

const MainFlavors = () => {
  return (
    <>
      <Flavors />
      <Royalty />
      <FlavorsLobster />
    </>
  );
};

export default MainFlavors;
