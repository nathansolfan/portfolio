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
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className="cube-container">
        <div className="cube">
          <div className="front-side"></div>
          <div className="back-side"></div>
          <div className="right-side"></div>
          <div className="left-side"></div>
          <div className="top-side"></div>
          <div className="bottom-side"></div>
        </div>
      </div>

      <>
        <div className="logo" style={{ display: showImages ? "flex" : "none" }}>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={javascript} alt="" />
          <img src={vite} alt="" />
          <img src={php} alt="" />
          <img src={node} alt="" />
          <img src={sql} alt="" />
          <img src={mongo} alt="" />
        </div>
      </>
    </div>
  );
}
