import Spinner from "@/ui/Spinner";
import React from "react";

function Loading() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <p className="text-lg text-secondary-500">  در حال بارگزاری ...</p>
      <Spinner />
    </div>
  );
}

export default Loading;
