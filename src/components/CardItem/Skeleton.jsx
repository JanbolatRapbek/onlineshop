import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => {
  return (
    <ContentLoader
      className="pizza-block-skeleton"
      speed={0}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="134" cy="134" r="125" />
      <rect x="8" y="288" rx="9" ry="9" width="259" height="25" />
      <rect x="5" y="326" rx="9" ry="9" width="263" height="73" />
      <rect x="117" y="416" rx="0" ry="0" width="1" height="0" />
      <rect x="3" y="418" rx="10" ry="10" width="110" height="33" />
      <rect x="159" y="418" rx="10" ry="10" width="107" height="32" />
    </ContentLoader>
  );
};

export default Skeleton;
