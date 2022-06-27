import React from "react";

interface ErrorProps {
  errMessage?: string;
}

const ErrorPage = ({ errMessage }: ErrorProps) => {
  return (
    <div>
      <h3>{errMessage || "ErrorPage"}</h3>
      <p>Please reload your screen</p>
    </div>
  );
};

export default ErrorPage;
