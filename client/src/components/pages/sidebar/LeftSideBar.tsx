import React from "react";
import { useWindowDimensions } from "../../../hooks/useDimensions";
import SideBarMenus from "./SideBarMenus";

type Props = {};

const LeftSideBar = (props: Props) => {
  const { width } = useWindowDimensions();
  if (width <= 768) {
    return null;
  }
  return (
    <div className="leftSideBar">
      <SideBarMenus />
    </div>
  );
};

export default LeftSideBar;
