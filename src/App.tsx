import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import About from "./pages/About.js";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about-us" element={<About/>}/>
      <Route path="*" element={<NotFound />} />
  </Routes>
    
  )
}

export default App
