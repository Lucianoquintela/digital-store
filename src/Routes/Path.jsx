import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageLayout from "../layouts/PageLayout";
import Notfound from "../pages/Notfound";

const Paths = () => {
    return ( 
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageLayout/>}>
              <Route path="/" element={<HomePage/>}/>
              
            </Route>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </BrowserRouter>
        
      </>
    );
}
 
export default Paths;
