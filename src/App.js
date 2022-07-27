import './App.css';

// components
import FetchApi from './components/fetch-api/FetchApi';
import Chaining from './components/chaining-promise/Chaining';

function App() {
  return (
    <div className="App">
      <h1>Asynchronous and ES6 JavaScript Fundamentals</h1>
      <h6>Deployed On Vercel</h6>
      <FetchApi/>
      <Chaining/>
    </div>
  );
}

export default App;
