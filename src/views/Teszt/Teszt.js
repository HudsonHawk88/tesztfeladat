import React, { useState, useEffect } from "react";
import Services from "../Felhasznalok/Services";

function TestComponent({ url }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = () => {
    Services.getUsersTest(url).then((result) => {
      if (result) {
        setData(result);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getUsers();
  });

  if (isLoading) {
    return <div>loading</div>;
  }
  return <div id="data">{JSON.stringify(data)}</div>;
}

export default TestComponent;
