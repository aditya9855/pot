import React, { useEffect } from 'react';
import { useState } from 'react';
import css from './todo.css';

const getData = () => {
  let dataa = localStorage.getItem('list');
  if(dataa){
    return JSON.parse(localStorage.getItem('list'));
  }else{
     return [];
  }
}

function Todo() {
  const [activity, setActivity] = useState("")
  const [listData, setListData] = useState(getData());
  const addActivity = () => {
    // setListData([...listData,activity])
    setListData((listData) => {
      const updatedList = [...listData, activity]
      setActivity("");
      return updatedList;
    })

  }
  
  
   const removeActivity = (inx) => {
    const updatedListData = listData.filter((elem, id) => {
        return inx !==id;
      })
    setListData(updatedListData);

  }
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(listData))
  },[listData])
  // 
  return (
    <div className='container'>
      <div className='header'>Todo list</div>
      <input className='input-feild' type="text" placeholder="Add Activity To Your List" value={activity} onChange={(e) => setActivity(e.target.value)} />
      <button className = 'btn'onClick={addActivity}>Add</button>
      <p className='list-heading'>Here is your list</p>
      {listData != [] && listData.map((data, inx) => {
        return (
          <>
            <p key={inx}>
              
              <div className='box'>
                <div className='listdata'>{data}</div>
                <div ><button className='btn-d' onClick={() => removeActivity(inx)}>Remove</button></div></div>
    
                
              


            </p>
          </>
        )
      })}
  
    </div>

  )
}

export default Todo