import React, { useEffect, useState, useTransition } from "react";
// import clientsData from "../../data.json";

export default function Clients() {
  // const [data, setData] = useState([{ _id: 1, name: "Tadas" }]);
  // const [isPending, startTransition] = useTransition();

  // useEffect(() => {
  //   startTransition(() => {
  //     setData(clientsData);
  //   });
  // }, []);
  return (
    <div>
      <button>Add new client</button>
      <ul>
        {/* {isPending
          ? data.map((item) => <li key={item._id}>{item.name}</li>)
          : "Loading"} */}
      </ul>
    </div>
  );
}
