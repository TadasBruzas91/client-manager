import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { clients } from "../logic/clients";

export default function Clients() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    clients.setupDataSenderToUi(setData);
    clients.loadDataFromDb();
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/client")}>Add new client</button>
      <ul>
        {data.length > 0
          ? data.map((item) => (
              <Link key={item._id} to={`/client/${item._id}`}>
                <li>
                  {item.name} {item.surname}
                </li>
              </Link>
            ))
          : "No data."}
      </ul>
    </div>
  );
}
