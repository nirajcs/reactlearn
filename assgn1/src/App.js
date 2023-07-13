import './App.css';
import Employee from './Employee'

function App() {
  const data = [
    {name:'Leane Grahaam',mail:'leanegrahaam@gmail.com'},
    {name:'Erwin Howell',mail:'erwinhowell@gmail.com'},
    {name:'Niraj',mail:'niraj@gmail.com'}
  ]
  return (
    <div className="App">
      <Employee data={data}/>
    </div>
  );
}

export default App;
