import React, {useState,useEffect} from 'react';
import './App.css';
import AccountsList from "./components/accountsList"
import axios from 'axios'

function App() {
  const[accountList,setAccountList] = useState([]);
  
  const getAccountList = () =>{
    axios
      .get("http://localhost:5000/accounts")
      .then(res =>{
        console.log(res)
        setAccountList(res.data)
      })
      .catch(
      error => console.log(error)
    )
  }
  useEffect(()=>{
    getAccountList()
  },[])

  return (
    <div className="App">
      <AccountsList accounts={accountList}/>
    </div>
  );
}

export default App;
