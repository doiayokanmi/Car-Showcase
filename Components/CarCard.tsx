import { carProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";

interface carCardProps {
  car: carProps;
}
const CarCard = ({ car }: carCardProps) => {
  const { city_mpg, year, make, model, transmission } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex">
          
        </div>
      </div>
    </div>
  );
};

export default CarCard;
