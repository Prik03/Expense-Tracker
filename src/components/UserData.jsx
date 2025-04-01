import axios from "axios";
import React, { useEffect, useState } from "react";

const UserData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((resolve) => setData(resolve.data.todos))
      .catch((err) => console.log("Not found user data", err));
  }, []);

  const deleteData=(id)=>{
     const FilterData = data?.filter(item=>item.userId!==id);
     setData(FilterData);
  }
  return (
    <>
      <div>User Data</div>
      <table border="1">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>User ID</th>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.userId}</td>
              <td>{item.todo}</td>
              <td>
                <button className="bg-blue-500 px-4  py-2 rounded my-2 mx-1">Edit</button>
                <button className="bg-red-500 px-4  py-2 rounded my-2 mx-1" onClick={()=>deleteData(item.userId)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserData;
