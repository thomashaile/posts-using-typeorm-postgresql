import React, { FC } from "react";
import "./MainHeader.css";

interface MainHeaderProps {
  title?: string;
}

const MainHeader: FC<MainHeaderProps> = ({ title }: MainHeaderProps) => {
  //post = "edit";
  //throw new Error("sorry");
  return (
    <div className="mainHeader">
      <h1>{title || "Thuishulp. Voor buren, door buren."}</h1>
    </div>
  );
};

export default MainHeader;
