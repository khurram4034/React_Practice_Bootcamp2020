import './App.css';
import Props from './Props';

function App() {
  return (
    <div className="app">
    <h1>Props</h1>
    <Props name='Khurram' age='34' />
    <Props name='Farrukh'  age='31' />
    <Props name='Faraz' age='29' />
    <h1>States</h1>
    <State />

     
    </div>
  );
}

export default App;
