import React from "react";
import { Restaurant, Address } from "./model/restaurant";

type OwnProps = {
  info: Restaurant;
  changeAddress(address: Address): void;
};

const Store: React.FC<OwnProps> = ({ info, changeAddress }) => {
  return <div>{info.name}</div>;
};

export default Store;
