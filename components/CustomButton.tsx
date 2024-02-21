"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

//// which prop that this component receive
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="{`flex-1`}">{title}</span>
    </button>
  );
};

export default CustomButton;
