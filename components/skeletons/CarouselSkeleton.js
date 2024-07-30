import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useWindowSize from "../../hooks/useWindowSize";

function CarouselSkeleton() {
  const {height, width} = useWindowSize();

  return (
    <div
      style={{
        marginBottom: "2rem",
      }}
    >
      <Skeleton
        height={width <= 600 ? "270px" : "330px"}
        baseColor={"#262539"}
        highlightColor={"#34324D"}
        borderRadius={width <= 600 ? "0.5rem" : "0.7rem"}
      />
    </div>
  );
}

export default CarouselSkeleton;