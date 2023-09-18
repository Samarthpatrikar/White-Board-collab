import './index.css'
import CreateRoomForm from './CreateRoomForm';
import JoinRoomForm from './JoinRoomForm';

const Forms=()=>{
   return(
    <div className="row h-100 pt-5">
    <div className="col-md-4 mt-5 py-3 p-5 border mx-auto d-flex align-items-center flex-column form-box border-primary">
    <h1 className='text-primary fw-bold'>Create Room</h1>
    <CreateRoomForm/>
    </div>
    <div className="col-md-4 mt-5 py-3 p-5 border mx-auto d-flex align-items-center flex-column form-box border-primary">
    <h1 className='text-primary fw-bold '>Join Room</h1>
    <JoinRoomForm/>
    </div>
    </div>
   )
}

export default Forms;