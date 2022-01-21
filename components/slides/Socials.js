import React, { useState } from "react";
import AboutMe from "./AboutMe";

export default function Socials() {
  const [isVisible, setIsVisible] = useState(false);
  return <>{isVisible ? <AboutMe /> : <div>
      <p className="">Add Your Social Links</p>
      </div>}</>;
}
