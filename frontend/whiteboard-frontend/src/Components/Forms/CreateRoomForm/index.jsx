

const CreateRoomForm=()=>{

    return (
    
    <form className="form col-md-12 mt-5 ">

    <div className="form-group">

    <input type="text" className="form-control my-2" placeholder="Enter Your Name"/>  

    </div>

    <div className="form-group">

    <div className="input-group d-flex align-items-center justify-content-center">

    <input type="text" className="form-control my-2" placeholder="Generate Room Code" disabled/>

    <div className="input-group-append">
        <button className="btn btn-primary bt-sm" disabledtype="button">Generate</button>
        <button className="btn btn-outline-danger btn-sm">Copy</button>
    </div>

    </div>
    </div>
    
    <button type="submit" className="mt-4 btn-primary btn-block form-control text-primary">Generate Room</button>

    </form>
    )
}

export default CreateRoomForm;