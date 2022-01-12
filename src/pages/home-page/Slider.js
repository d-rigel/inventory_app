import React from "react";
import img2 from "../../assets/pictures/img2.jpg";
import img3 from "../../assets/pictures/img3.jpg";
import img4 from "../../assets/pictures/img4.jpg";
import img1 from "../../assets/pictures/img1.jpg";
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 2,
};

export const Slider = () => {
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static>
      <img src={img2} alt="sales" />
      <img src={img3} alt="sales" />
      <img src={img4} alt="sales" />
      <img src={img1} alt="sales" />
    </Flickity>
  );
};
