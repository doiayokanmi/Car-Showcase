"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 15;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-blue text-white rounded-full"
          handleClick={handleNavigation}
        />
      )}
      {isNext && <p className="text-gray-500">No more results</p>}
    </div>
  );
};

export default ShowMore;
