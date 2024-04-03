import { useEffect, useState } from "react"
import Searchbox from "../components/Searchbox"
import './App.css'
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import AppTitle from "../components/AppTitle";

function App() {
  const [robots,setRobots] = useState([]);
  const [searchbox,setSearchbox] = useState("");

  console.log("APPP")

          useEffect(()=>{
              fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(users => {
              setRobots(users)
              }
              )
              console.log("useeffecttt")
         
          },[])
              

           
          
          const onSearchChange = (event)=>{  
              setSearchbox(event.target.value)
              console.log(searchbox)
          };
          const filteredRobots =  robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchbox.toLowerCase())
            
        }
        )
      

  return !robots.length ? <h1>loading robots </h1> :
  (
    <>
      <AppTitle/>
      <Searchbox onfilter={onSearchChange}/>
        <Scroll>
        <CardList robots = {filteredRobots}/>
        </Scroll>
      
      {console.log("body")}
    </>
  )
}

export default App
