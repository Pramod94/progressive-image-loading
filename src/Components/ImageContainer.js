import React, { useState } from "react";
import "./ImageContainer.css";

const ImageContainer = ({ width, height, src, alt }) => {
  const aspectRatio = (width / height) * 100;
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className="imageContainer"
      style={{ paddingBottom: `${aspectRatio}%` }}
      // style={{ width, height, maxWidth: "300px", maxHeight: "250px" }}
    >
      {/* <picture>
                <source srcSet={src.small} media="(max-width: 400px)" />
                <source srcSet={src.regular} media="(max-width: 700px)" />
                <img src={src.full} alt={alt} />
            </picture> */}
      <img
        className="image"
        src={src.regular}
        alt={alt}
        onLoad={() => setLoaded(true)}
        // style={{ opacity: loaded ? 1 : 0 }}
        {...loaded && {style : {opacity: 1}}}
      />

      <img
        className="image"
        src={src.thumb}
        alt={alt}
        style={{ visibility: loaded ? "hidden" : "visible", filter: "blur(5px)" }}
      />
    </div>
  );
};

export default ImageContainer;
