import {useState} from "react";
function App() {

  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(1);

  const handleClick=()=>{
    setCuenta(cuenta +paso);
  }

   const handleClickRes=()=>{
     console.log(paso);
    setCuenta(cuenta - paso);
  }

   const handleClickLim=()=>{
    setCuenta(0);
  }
  const handleInputChange=(event)=>{
if(isNaN(event.target.value)){
  return;
}
  
    setPaso(Number(event.target.value));
    
  };
  
  return (
    <div className="App">
      <h3>CONTADOR</h3>
      <hr/>
      <h2 className="text-center">{cuenta}</h2>
      <hr/>
      <div style={{display:"flex", 
      justifyContent:"flex-end", 

      marginRight:"5px",}}>

        
        <label>Paso
        <input id="paso" type="text"  onChange={handleInputChange} value={paso} style={{marginLeft:"5px", width:"60px"}}
        />
        </label>
      < button type="button" className="btn btn-primary" onClick={handleClick}
      style={{marginLeft:"5px"}}
      >+1</button>

< button type="button" className="btn btn-primary" onClick={handleClickRes}
style={{marginLeft:"5px"}}
      >-1</button>

< button type="button" className="btn btn-primary" onClick={handleClickLim}
style={{marginLeft:"5px"}}
      >Limpiar</button>
      </div>
    </div>
  );
}

export default App;
