import axios from "axios";
import React, { useEffect, useState } from "react";

const UserData = (data) => {

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/todos")
  //     .then((resolve) => setData(resolve.data.todos))
  //     .catch((err) => console.log("Not found user data", err));
  // }, []);

  // const deleteData=(id)=>{
  //    const FilterData = data?.filter(item=>item.userId!==id);
  //    setData(FilterData);
  // }
  return (
    <>
      <div>User Data</div>
      <table border="1">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Category</th>
            <th>Payment Mode</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
        {data && data.length > 0 ? (
  data.map((item, index) => (
    <tr key={item.id || index}>
      <td>{index + 1}</td>
      <td>{item.title}</td>
      <td>{item.amount}</td>
      <td>{item.category}</td>
      <td>{item.date}</td>
      <td>{item.paymentMethod}</td>
      {/* <td>{item.notes}</td> */}
      <td>
        <button className="bg-blue-500 px-4 py-2 rounded my-2 mx-1">Edit</button>
        <button 
          className="bg-red-500 px-4 py-2 rounded my-2 mx-1" 
          onClick={() => deleteData(item.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="7" className="text-center">Not Found</td>
  </tr>
)}
        </tbody>
      </table>
    </>
  );
};

export default UserData;
