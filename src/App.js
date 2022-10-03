
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='text-4xl font-bold underline '>Navbar in Tailwind Css</h1>
      <h1 className='text-3xl '>This is another tag</h1>
      <Pricing />
    </div>
  );
}

export default App;
