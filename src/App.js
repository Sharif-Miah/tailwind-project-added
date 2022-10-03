
import './App.css';
import Navbar from './component/Navbar/Navbar';
import PhoneBar from './component/PhoneBar/PhoneBar';
import Pricing from './component/Pricing/Pricing';
import Reachart from './component/Reachart/Reachart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='text-4xl font-bold underline '>Navbar in Tailwind Css</h1>
      <h1 className='text-3xl '>This is another tag</h1>
      <Pricing />
      <Reachart />
      <PhoneBar />
    </div>
  );
}

export default App;
