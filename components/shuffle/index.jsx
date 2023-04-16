import React, { useEffect } from "react";
import shuffleLetters from "shuffle-letters";

function Shuffle() {
  useEffect(() => {
    const shuffleMe = document.querySelectorAll(".shuffle");
    Array.prototype.forEach.call(shuffleMe, (element, index) => {
      shuffleLetters(element, {
        iterations: 12,
        fps: 60,
        onComplete: (elm) => {
          if (index === shuffleMe.length - 1) {
            console.log("Done shuffling");
          }
        },
      });
    });
  }, []);

  return <></>;

  return null;
}

export default Shuffle;
