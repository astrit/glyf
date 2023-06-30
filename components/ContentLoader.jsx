import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export const ContentLoader = ({ path, children }) => {
  const router = useRouter();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(path);
      const data = await response.json();
      setContent(data);
    };

    fetchContent();
  }, [path]);

  return children(content);
};
