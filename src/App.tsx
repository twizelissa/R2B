import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
function App() {

  return (
    <Routes>
    <Route path="/" element={<Landing/>}/>
    {/* <Route path="/some" element={<Some/>}/> */}
    <Route path="*" element={<NotFound />} />
  </Routes>
    
  )
}

export default App
