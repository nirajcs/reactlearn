import { useState } from 'react';
import './App.css';

function App() {

  let weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayOfWeek = new Date().getDay();
  let today = weeks[dayOfWeek]
  const [todo,setTodo] = useState('')
  const [todos,setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null);
  const [updatedTodoText, setUpdatedTodoText] = useState('');


  let updateTodo = (e)=>{
    setTodo(e.target.value)
  }

  let pushTodo = (e)=>{
    e.preventDefault()
    if(todo===''){
      return
    }
    setTodos([...todos,{id:Date.now(),text:todo,status:false}]);
    setTodo('');
  }

  let statusChange = (item, e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((obj) => {
        if (obj.id === item.id) {
          return { ...obj, status: e.target.checked };
        }
        return obj;
      });
    });
  };

  const editTask = (taskId) => {
    const todoToEdit = todos.find(item => item.id === taskId);
    setEditTodo(todoToEdit);
    setUpdatedTodoText(todoToEdit.text);
  };
  
  const updateTask = (taskId) => {
    setTodos(prevTodos => {
      return prevTodos.map(obj => {
        if (obj.id === taskId) {
          return { ...obj, text: updatedTodoText };
        }
        return obj;
      });
    });
    setEditTodo(null);
  };
  
  let deleteTask = (taskId) =>{
    setTodos(
      todos.filter(item => item.id !== taskId)
    )
    return null
  }

  return (
    <div className="App container-fluid">
      <div className="main">
        <div className="title">
        <div className="card">
          <div className="card-body">
            <h2 style={{color: '#331d2c'}}><b>TODO APP</b></h2>
            <h5>Hey it's {today} 🌝 ☕</h5>
          </div>
        </div>
        </div>
        <div className="content row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={pushTodo}>              
                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg" value={todo} onChange={updateTodo} placeholder="Enter your task..."/>
                    <div className="input-group-append">
                      <button className="btn btn-lg btn-dark" type="submit">Add</button>
                    </div>
                  </div>
                </form>
              </div>
              {
                todos.map((item) => {
                  if (editTodo && editTodo.id === item.id) {
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
                              value={updatedTodoText}
                              onChange={(e) => setUpdatedTodoText(e.target.value)}
                            />
                          </div>
                          <i
                            className="fa-sharp fa-solid fa-check my-1 mx-2"
                            style={{ color: '#331d2c' }}
                            onClick={() => updateTask(item.id)}
                          ></i>
                          <i
                            className="fa-sharp fa-solid fa-times my-1 mx-2"
                            style={{ color: '#331d2c' }}
                            onClick={() => setEditTodo(null)}
                          ></i>
                        </div>
                      </div>
                    );
                  } else {
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
                            <p className='m-0'>{item.text}</p>
                          </div>
                          <i
                            className="fa-solid fa-pen-to-square my-1 mx-2"
                            onClick={() => editTask(item.id)}
                          ></i>
                          <i
                            onClick={() => deleteTask(item.id)}
                            className="fa-sharp fa-solid fa-trash my-1 mx-2"
                            style={{ color: '#331d2c' }}
                          ></i>
                        </div>
                      </div>
                    );
                  }
                })
              }

            </div>
          </div>
          <div className="col-md-6"> 
            <div className="card">
              <div className="card-body">
                <h4 className='mb-4'>Tasks Completed</h4>
                {
                  todos.map((item) => {
                    if (item.status) {
                      return (
                        <div className="card todo-list m-2" key={item.id}>
                          <p className='my-2'>{item.text}</p>
                        </div>
                      );
                    }
                    return null;
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;
