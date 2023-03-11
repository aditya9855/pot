import React from 'react';
import { useState } from 'react';
import css from './todo.css';


function Todo() {
  const [activity, setActivity] = useState("")
  const [listData, setListData] = useState([])
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
  // 
  return (
    <div className='container'>
      <div className='header'>Todo list</div>
      <input className='input-feild' type="text" placeholder="add activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
      <button className = 'btn'onClick={addActivity}>Add</button>
      <p className='list-heading'>Here is your list</p>
      {listData != [] && listData.map((data, inx) => {
        return (
          <>
            <p key={inx}>
              
              <div className='listdata'>{data}</div>
                <div className = "" ><button onClick={()=> removeActivity(inx)}>Remove</button>
              </div>


            </p>
          </>
        )
      })}
    </div>

  )
}

export default Todo