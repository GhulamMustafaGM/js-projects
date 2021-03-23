import axios from 'axios';
import './App.css';

function App() {
  function getdatafromnode() {
    axios.get('/services')
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }
  return (
    <div className="App">
      <h1>Connecting React App to Node</h1>
      <button onClick={getdatafromnode} >Get Data From Backend</button>
    </div>
  );
}

export default App;
