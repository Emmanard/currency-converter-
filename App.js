
import './App.css';
import {useState,useEffect} from "react"


// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function App() {
const [select, setselect] = useState("EUR")
const [current, setcurrent] = useState("USD")
const [amount, setamount] = useState(1)
const [output, setoutput] = useState("")
const [isLoading, setisLoading] = useState(false);


useEffect(() => {
  async function fetchcurrency () {
    setisLoading(true);
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${select}&to=${current}`)

    const data = await res.json()
 
   

    setoutput(data.rates[current])

    setisLoading(false);
  }
    
   if(select===current)return  setoutput(amount)
    
  fetchcurrency()

},[amount, select, current] )


  
  return (
    <div>
      <input type="text"  value={amount} onChange={(e)=>setamount(e.target.value) } disabled={isLoading}  />
      <select value={select} onChange={(e)=>setselect(e.target.value)} disabled={isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={current} onChange={(e)=>setcurrent(e.target.value)} disabled={isLoading} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT  : 
        {output}
      </p>
    </div>
  );

}
export default App;
