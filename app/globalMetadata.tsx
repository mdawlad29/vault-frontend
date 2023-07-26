"use client";
import React, { useEffect } from "react";

const TitleUpdater = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
};

const GlobalMetadata = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return <TitleUpdater title={title} description={description} />;
};

export default GlobalMetadata;
