import React, { useEffect, useState } from "react";
import node from "../Images/logo/node.png";
import html from "../Images/logo/html.png";
import css from "../Images/logo/css.png";
import javascript from "../Images/logo/javascript.png";
import php from "../Images/logo/php.png";
import sql from "../Images/logo/sql.png";
import mongo from "../Images/logo/mongo.png";
import vite from "../Images/logo/vite.png";

export default function Logo() {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="logo-container">
      <div className={`logo ${showImages ? "reveal" : ""}`}>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={javascript} alt="" />
        <img src={vite} alt="" />
        <img src={php} alt="" />
        <img src={node} alt="" />
        <img src={sql} alt="" />
        <img src={mongo} alt="" />
      </div>
    </div>
  );
}
