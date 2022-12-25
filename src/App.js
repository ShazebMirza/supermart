import {Nav} from "./components/Nav"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./components/Home"
import {Services} from "./components/Services"
import {AboutUs} from "./components/AboutUs"
import {Contact} from "./components/Contact"
import {Card, CardContent} from "@mui/material"
import { Shopping } from "./components/Shopping"

function App() {
  return (
    <div>
      <BrowserRouter>
    <Card>
        <CardContent>
          <Nav/>
        </CardContent>
      </Card>
       <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/aboutus" element={<AboutUs/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/shopping" element={<Shopping/>}/>


       </Routes>
</BrowserRouter>
</div>
  );
}

export default App;
