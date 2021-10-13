import React, { useState, useEffect } from "react";

export default function GetRequest(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(props.endpoint)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [props]);

  if (error) return <div>Error: {error.message}</div>;
  else if (!isLoaded) return <div>Loading...</div>;
  else return React.cloneElement(props.children, { items: items });
}
