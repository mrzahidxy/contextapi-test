import './App.css';
import AddMovie from './Components/AddMovie';
import Movielist from './Components/Movielist';
import Navbar from './Components/Navbar';
import {MovieProvider} from './MovieContext'

function App() {
  return (

    <MovieProvider>
    <div className="App">
      <Navbar/>
      <AddMovie/>
      <Movielist/>
    </div>
    </MovieProvider>
  );
}

export default App;
