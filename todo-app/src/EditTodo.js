import React from 'react'

function EditTodo(toDos,setTodos,setEditTodoId) {

  let statusChange = (item,e)=>{
    setTodos((prevTodos)=>{
      return prevTodos.map((obj)=>{
        if(obj.id === item.id){
          return { ...obj, status: e.target.checked };
        }
        return obj
      })
    })
  } 


  return (
    toDos.map((item)=>{
      return (
        <div className="card todo-list m-2 p-2" key={item.id}>
          <div className="todos d-flex justify-content-between">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    className='m-0' 
                    type="checkbox"
                    value={item.status}
                    onChange={(e) => { statusChange(item, e) }}
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <i
              className="fa-sharp fa-solid fa-check my-1 mx-2"
              style={{ color: '#331d2c' }}
            ></i>
            <i
              className="fa-sharp fa-solid fa-times my-1 mx-2"
              style={{ color: '#331d2c' }}
              onClick={() => setEditTodoId(null)}
            ></i>
          </div>
        </div>
      );
    })
  )
}

export default EditTodo