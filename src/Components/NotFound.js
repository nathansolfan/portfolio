import React from "react";
import notfound from "../Images/404.webp";

export default function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound-para">Page not Found</p>
      <img src={notfound} alt="" />
    </div>
  );
}
