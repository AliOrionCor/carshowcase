"use client";
import React from "react";
import Image from "next/image";

import { CustomButtonPorps } from "@/types";
const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonPorps) => {


    return (

        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}>
            <span className={"flex-1"}> {title}</span>
        </button>
    );


};

export default CustomButton;
