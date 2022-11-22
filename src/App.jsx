import React, { useState, useRef, Fragment } from 'react'

const TodoList = () => {
  let [datalist, setDatelist] = useState(['aaa', 'bbb', 'ccc', 'adc', 'bcd', 'cda','adc'])
  const myref = useRef()
  const handleAdd = () => {
    let event = myref.current.value.trim()
    if(event.length !== 0){
      let newlist = [...datalist]
      newlist.push(event)
      setDatelist(newlist)
      myref.current.value = ''
    }else{
      myref.current.value = ''
    }
  }
  const handleDelete = (index) => {
    let deletelist = [...datalist]
    deletelist.splice(index,1)
    setDatelist(deletelist)
  }
  return (
    <Fragment>
      <input type="text" ref={myref} /> <button onClick={() => handleAdd()}>Add</button>
      <ul>
        {datalist.map((item, index) =>
         <li key={index} style={{margin:15}}>
          {item}
          -----<button onClick={()=> handleDelete(index)}>删除</button>
         </li> )}
      </ul>
      {/* { datalist.length === 0 && <div>待办事项空空如也</div> } */}
      { datalist.length === 0 ? null : <div>待办事项空空如也</div> }   
    </Fragment>
  )
}

export default TodoList