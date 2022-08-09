import React, { useEffect } from "react";

export default function useFlash(counter) {
  useEffect(() => {
    const flashDiv = document.getElementById("flash");
    flashDiv.innerText = counter;
    return () => {
      setTimeout(() => {
        flashDiv.innerText = "";
      }, 2000);
    };
  });
  return "hey param " + counter;
}
