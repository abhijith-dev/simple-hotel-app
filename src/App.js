import Insertcontent from "./components/Insertcontent";
import Tablecontent from "./components/Tablecontent";
import React from 'react'

function App() {
  const [event,setEvent] = React.useState(0)
  return (
    <div>
       <h1 style={{textAlign:"center"}}> Hotel Application</h1>
       <Insertcontent event={event} setEvent={setEvent} />
       <div style={{marginTop:"2rem"}}>
       <Tablecontent  event={event} setEvent={setEvent}  />
       </div>
       
       
    </div>
  );
}

export default App;
