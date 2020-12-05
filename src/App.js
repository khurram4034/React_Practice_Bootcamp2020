import './App.css';
import Dinner from './Dinner';

function App() {
  return (
    <div className="App">
      <h1>Hellow Good Evening</h1>
      <Dinner dishName='Baryani' sweetDish='Kheer' />
      <Dinner dishName='Nahari'  sweetDish='Jalabi' />
      <Dinner dishName='Qorma' sweetDish='Karjar ka halwa' />

     
    </div>
  );
}

export default App;
