import React, { useState } from "react";

const ExpenseEntry = ({ setFormData}) => {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    setFormData((prevState) => [...prevState, formJson]);
    console.log(formData);
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      {/* Title and Amount */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="md:w-1/2 w-full">
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter title"
            className="inputStyle"
            name="title"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            className="inputStyle"
          />
        </div>
      </div>

      {/* Category and Date */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="md:w-1/2">
          <label htmlFor="category" className="label">
            Category
          </label>
          <select
            name="category"
            className="inputStyle"
          >
            <option value="">-Select Category-</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
        <div className="md:w-1/2">
          <label htmlFor="date" className="label">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="inputStyle"
          />
        </div>
      </div>

      {/* Payment Method and Receipt Upload */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="md:w-1/2">
          <label htmlFor="paymentMethod" className="label">
            Payment Method
          </label>
          <select
            name="paymentMethod"
            className="inputStyle"

          >
            <option value="">-Select Payment-</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
          </select>
        </div>
        <div className="md:w-1/2">
          <label htmlFor="file" className="label">
            Receipt Upload
          </label>
          <input type="file" name="file" className="inputStyle" />
        </div>
      </div>

      {/* Notes */}
      <div className="-mx-3 mb-6">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <textarea
          name="notes"
          className="inputStyle"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseEntry;
