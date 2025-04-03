import { useEffect, useState } from 'react';
import './App.css';
import UserData from './components/UserData';
import ExpenseEntry from './components/ExpenseEntry';

function App() {
  // Load saved data from localStorage or set an initial object
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("expenseData");
    return savedData ? JSON.parse(savedData) : {
      title: "",
      amount: "",
      category: "",
      date: "",
      paymentMethod: "",
      notes: "",
    };
  });

  // Save formData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <UserData data={formData} />
      <ExpenseEntry setFormData={setFormData} formData={formData} />
    </>
  );
}

export default App;
