import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  // states ==========
const [inputValue, setInputvalue] = useState()
const [mainArray, setMainarray] = useState([])
const [editCheck, setEditcheck] = useState(false)
const [editValue, setEditvalue ] = useState("")



  // helper function ======================
  function btn_clicked(){
    if(editCheck){
      mainArray[editValue] = inputValue
      setMainarray(mainArray)
      setEditcheck(false)
    }else{
      setMainarray([...mainArray,inputValue])
    }
    
    setInputvalue("")
  }
 
  function delete_func(index){
    let temparray = [...mainArray]
    temparray.splice(index, 1)
    setMainarray(temparray)
  }

  function delete_all_func(){
      setMainarray([])
  }

  function edit_func(index){
    setInputvalue( mainArray[index] )
    setEditvalue(index)
    setEditcheck( true )
  }
  return (
   <div className='container mt-5'>
    <input className='inp' value={inputValue} onChange={(e)=>{setInputvalue(e.target.value)}} type="text" />
    <button className='btn btn-primary' onClick={btn_clicked}>add</button>                              
    <div className='container_2'>
      <ul>
        {
          mainArray.map((item, index)=>{
            return(
              <>
              <li className='co_li' key={index}>{item} <button className='btn btn-primary bn' onClick={()=>{delete_func(index)}}>delete</button> 
              <button className='btn btn-primary bn' onClick={()=>{edit_func(index)}}>edit</button></li>
              </>
            )
          })
        }
      </ul>
      <button className='btn btn-primary' onClick={delete_all_func}>delete all</button>
    </div>
   </div>
  );
}

export default App;
