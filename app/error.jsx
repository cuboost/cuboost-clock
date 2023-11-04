"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" text-center">
      <BiErrorCircle className=" m-5 mx-auto text-7xl" />
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
