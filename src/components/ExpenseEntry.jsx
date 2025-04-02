import React, { useState } from "react";

const ExpenseEntry = ({setFormData,formData}) => {
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  return (
    <form
      onSubmit={(e)=> e.preventDefault()}
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
            id="title"
            placeholder="Enter title"
            className="inputStyle"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            className="inputStyle"
            value={formData.amount}
            onChange={handleChange}
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
            id="category"
            className="inputStyle"
            value={formData.category}
            onChange={handleChange}
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
            id="date"
            className="inputStyle"
            value={formData.date}
            onChange={handleChange}
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
            id="paymentMethod"
            className="inputStyle"
            value={formData.paymentMethod}
            onChange={handleChange}
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
          <input type="file" id="file" className="inputStyle" />
        </div>
      </div>

      {/* Notes */}
      <div className="-mx-3 mb-6">
        <label htmlFor="notes" className="label">
          Notes
        </label>
        <textarea
          id="notes"
          className="inputStyle"
          value={formData.notes}
          onChange={handleChange}
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
