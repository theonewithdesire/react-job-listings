import { useState } from "react"
import Accounts from "./Accounts.jsx"
import Search  from "./Search.jsx"


function App() {

  const [searchData, setSearchData] = useState(null);
  function updateSearchData(newData){
    setSearchData(newData)
  }

  

  return (

    <>
    <Search updateSearchData={updateSearchData}/>
    <Accounts searchData={searchData}/>
    </>
    
  )
}

export default App
