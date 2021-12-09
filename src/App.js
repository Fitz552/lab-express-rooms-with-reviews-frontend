import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Newroom from "./pages/Newroom";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/newroom" element={<Newroom/>}/>
    </Routes>
    </div>
  );
}

export default App;
