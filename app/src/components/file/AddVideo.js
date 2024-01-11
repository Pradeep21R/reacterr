 import './AddVideo.css'
 import { useState } from 'react';
 
 const inisialState = {
    channel:'defult',  
         time:'3 month',
        verifide:true,
        title:'',
        viwes:''
 }
 function AddVideo({dispatch}){
    const [videos,setVideo]=useState({inisialState}
    );

    function HandleSubmit(e){
        e.preventDefault();
        dispatch({type:"ADD",Payload:videos})
        console.log(videos);
        setVideo(inisialState);

    }
    function HandleChange(e){
        console.log(e.target.name,e.target.value);
        setVideo({...videos,
            [e.target.name]:e.target.value }
            )
           

    }
return(
    <form>
    <input type="text" name="title" onChange={HandleChange}  placeholder='title'   value={videos.title}/>
    <input type="text" name="viwes" onChange={HandleChange} placeholder='Viwes' value={videos.viwes}/>

   
     <button onClick={HandleSubmit}>ADD Video</button>
    
    </form>
);
 }

 export default AddVideo;