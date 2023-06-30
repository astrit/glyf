import { useState, useEffect } from "react";
import Button from "@/button";

function formatNumber(number) {
  const suffixes = ["", "k", "M", "B", "T"];
  let suffixNum = 0;
  while (number >= 1000) {
    number /= 1000;
    suffixNum++;
  }
  return number.toFixed(1) + suffixes[suffixNum];
}
const Stars = ({ repo, ...props }) => {
  const [stars, setStars] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((response) => response.json())
      .then((data) => {
        setStars(formatNumber(data.stargazers_count));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [repo]);

  return (
    <Button
      to="https://github.com/astrit/css.gg"
      title={"Github 9.2k"}
      // title={"9.2k Github stars"}
      // title={stars !== null ? `${stars} Github stars` : "9.1k Github stars"}
      svg="github"
      {...props}
    />
  );
};

export default Stars;
