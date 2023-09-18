import { useState } from "react";
import WhiteBoard from "../../Components/WhiteBoard";

const RoomPage=()=>{

  const [tool,setTool]=useState('pencil');
  const [color,setColor]=useState('black');

  return (
      <div className="row">
        
        <h2 className="text-center py-5">White Board Sharing App 
        <span className="text-primary"> Users Online:0</span>
        </h2> 

        <div className="col-md-12 px-5 mx-auto mt-4 mb-5 d-flex align-items-center
        justify-content-around">

        <div className="d-flex col-md-2 justify-content-between gap-1">

        <div className="d-flex gap-1">
             
        <label htmlFor='pencil'>Pencil</label>
        <input checked={tool==='pencil'} id='pencil' type="radio" name="tool" value="pencil" onChange={(e)=>{setTool(e.target.value)}}/>

        </div> 
        
        <div className="d-flex gap-1">
             
        <label htmlFor='line'>Line</label>
        <input checked={tool==='line'} id='line' type="radio" name="tool" value="line" onChange={(e)=>{setTool(e.target.value)}}/>
        
        </div> 
        
        <div className="d-flex gap-1">
             
        <label htmlFor='rect'>Rectangle</label>
        <input checked={tool==='rect'} id='rect' type="radio" name="tool" value="rect" onChange={(e)=>{setTool(e.target.value)}}/>
        
        </div> 
        
        <div className="col-md-7">
        <div className="d-flex flex-column align-items-center">
        <label htmlFor="color">Select Color:</label>
        <input type="color" id="color" className="mt-1"
        value={color} onChange={(e)=>{setColor(e.target.value)}} />
        </div>
        </div>
 
        <div className="col-md-3">
         <button className="btn btn-primary mt-1">Undo</button>
         <button className="btn btn-outline-primary mt-1">Redo</button> 
        </div>

        <div className="col-md-3">
        <button className="btn btn-danger">Clear Canvas</button>
        </div>

        </div>
        </div>

      <div className="col-md-10 mx-auto mt-4 canvas-box">
      <WhiteBoard/>
      </div>

      </div>
    )
}

export default RoomPage;