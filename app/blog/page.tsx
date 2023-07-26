import React from "react";
import dynamic from "next/dynamic";
const GlobalMetadata = dynamic(() => import("../globalMetadata"), {
  ssr: false,
});

const BlogPage = () => {
  return (
    <>
      <GlobalMetadata title="Blog - Foody" description="Foody portfolio" />
      BlogPage
    </>
  );
};

export default BlogPage;
