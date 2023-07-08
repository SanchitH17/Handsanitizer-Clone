 
import Navabar from './Routes/Navabar';
import Home from "./Pages/Home"
import { SearchProvider } from './Pages/SearchContext';

function App() {
  return (
    <SearchProvider>

    <div>
     <Navabar />
     <Home />
   
    </div>
    </SearchProvider>
  );
}

export default App;
 