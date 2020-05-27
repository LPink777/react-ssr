import React, { useEffect } from "react";

const NotFound = (props) => {
  const { staticContext } = props;

  useEffect(() => {
    staticContext ? (staticContext.notFound = true) : null;
  }, []);

  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
