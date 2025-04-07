import React, { useState } from "react";

const UserData = ({ data, setFormData }) => {
  const [isEdit, setIsEdit] = useState(null);
  const deleteData = (id) => {
    const storedData = JSON.parse(localStorage.getItem("expenseData")) || [];

    const filteredData = storedData.filter((item) => item.id !== id);

    localStorage.setItem("expenseData", JSON.stringify(filteredData));

    setFormData(filteredData);
  };

  const editData = (id) => {
    const storedData = JSON.parse(localStorage.getItem("expenseData")) || [];

    const filteredData = storedData.filter((item) => item.id === id);
    setIsEdit(isEdit === null ? filteredData : null);
  };

  return (
    <div className="px-5">
      <div>Expense data</div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="sr-only">Expense table</caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sno.
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Mode
              </th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{item.id}</td>

                  <td className="px-6 py-4">
                    {isEdit && isEdit[0]?.id === item.id ? (
                      <input
                        className="inputStyle editInput"
                        placeholder="Enter new title"
                        onChange={(e)=>console.log(e.target.value)}
                      />
                    ) : (
                      item.title
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {isEdit && isEdit[0]?.id === item.id ? (
                      <input
                        className="inputStyle editInput"
                        placeholder="Amount"
                      />
                    ) : (
                      item.amount
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {isEdit && isEdit[0]?.id === item.id ? (
                      <select
                        className="inputStyle editInput"
                        placeholder="Amount"
                      >
                        <option value="">-Select Category-</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                      </select>
                    ) : (
                      item.category
                    )}
                  </td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">
                    {isEdit && isEdit[0]?.id === item.id ? (
                      <select
                        className="inputStyle editInput"
                        placeholder="Amount"
                      >
                        <option value="">-Select Category-</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                      </select>
                    ) : (
                      item.paymentMethod
                    )}
                  </td>
                  {/* <td>{item.notes}</td> */}
                  <td>
                    <button
                      className="bg-blue-500 px-4 py-2 text-white rounded my-2 mx-1 font-semibold"
                      onClick={() => editData(item.id)}
                    >
                      {isEdit && isEdit[0].id ? "Save" : "Edit"}
                    </button>
                    {isEdit && isEdit[0].id === item.id ? (
                      <button
                        className="bg-red-500 px-4 text-white py-2 rounded my-2 mx-1 font-semibold"
                        onClick={() => setIsEdit(null)}
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        className="bg-red-500 px-4 text-white py-2 rounded my-2 mx-1 font-semibold"
                        onClick={() => deleteData(item.id)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;
