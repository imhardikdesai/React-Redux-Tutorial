import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className="container text-center my-5">
        <Shop />
      </div>
    </>
  );
}

export default App;
