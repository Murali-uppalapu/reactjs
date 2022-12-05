import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'

function App(){
    return(
        <div>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
         {/* <Event/>
          <StateExample/>
         <h1>This is about props example</h1>
        <PropsExample name="angularjs" year="2008" />
        <PropsExample name="reactjs" year="2013" />
        <PropsExample name="vuejs" year="2018" /> 
        <FunPropExample framework="react" number="1"/>*/}
        </div>
        )
}

 export default App
  

/*import ClassComponent from './ClassComponent'
import ClassComponent2 from './ClassComponent2'
function App(){
 return (
 <section>
     <p>Hello fellows</p>
     <h1>This is h1 tag</h1>
     <ClassComponent/>
     <ClassComponent2/>
     <img src="https://www.mixindia.com/wp-content/uploads/2022/07/Ivana-Photos-1.jpg"/>
   </section>
   )
 }
export default App*/

//
//import PropsExample from './PropsExample'

//import FunPropExample from './FunPropExample'

//import StateExample from './StateExample'

//import Event from "./Event"
