import { useState } from 'react'
import './App.css'
import UserData from './components/UserData'
import ExpenseEntry from './components/ExpenseEntry'

function App() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    paymentMethod: "",
    notes: "",
    // location
    // time
  });
  return (
    <>
   <UserData data={formData}/>
  <ExpenseEntry setFormData={setFormData} formData={formData}/>
  </>
    )
}

export default App
