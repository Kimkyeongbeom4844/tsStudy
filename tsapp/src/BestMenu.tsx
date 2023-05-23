import React from "react";
import { Menu } from "./model/restaurant";

type OwnProps = Menu & {
  showBestMenuName(name: string): string;
};

const BestMenu: React.FC<OwnProps> = ({
  name,
  category,
  price,
  showBestMenuName,
}) => {
  return <div></div>;
};

export default BestMenu;
