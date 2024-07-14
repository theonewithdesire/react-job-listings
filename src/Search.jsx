import React ,{useState, useEffect} from 'react'
function Search({updateSearchData}){

    const [data, setData] =useState();
    function handleInput(event){
        setData(event.target.value)
    }
    function handleClick(){
        updateSearchData(data)
     }
   
    return (
        <div className='search-container'>
            <input type="text" placeholder='search a skill' className='search-bar' onChange={handleInput}  />
            <button className='search-button' onClick={handleClick}>search</button>
        </div>

    )
}
export default Search;
