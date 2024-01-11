import { useContext, useReducer } from 'react';
import'./App.css';
// import Counter from './components/file/Counter.jsx';
// import PlayButton from './components/file/PlayButton.jsx';
// import Video from './components/file/Video';
import videosDb from "./data/data.js";
import AddVideo from './components/file/AddVideo.js';
import VideoList from './components/VideoList.js';
import ThemeContext from './components/context/ThemeContext.js';


function App () {
//   let obj={
//     title:"defult",
//     channel:"defult",
//     Viwes:"defult",
// time:'3 month',
// verifide:'true',AS
// Id:'1'
//   }

function videoReducer(videos,action){
switch(action.type){ 
       case 'ADD':
      return[...videos,{...action.Payload,id:videos.length+1}]
       
      default:
      return videos}
}

const themeContext = useContext(ThemeContext);
console.log({themeContext})
     
//  setVideo( [...videos,{...video,id:videos.length+1}]);


const [videos,dispatch]=useReducer(videoReducer,videosDb);
// const [videos,setVideo]=useState(videosDb);
  
  return (
    
    <div className={themeContext} onClick={()=>{}}> {/* on click is parent it difoult run on click is run */}
    
    <AddVideo dispatch={dispatch}></AddVideo>
    <VideoList videos={videos} ></VideoList>
     
    </div>
  );
}

export default App;
//  {/* <Video {...obj}/>
//      <Video  title="this node title"  channel="pradeep" Viwes='10k' time='1 year ago'/>
//      <Video title=" this is jsx title"channel="gupta" Viwes="100k" time='1 month ago'/>
//      <Video title=" this is Mongo title"channel="mango" Viwes="1M" time='1 month ago' verifide='true'/>
//       */} 

// {/* <div style={{clear:"both"}}> 
// {/* <PlayButton  massage="play-smg" onPlay={()=>console.log("playes")} onPause={()=>console.log("pause")}>play</PlayButton> */}
// {/* <PlayButton massage="pause-smg" onClick={()=>alert('playy')}>pause</PlayButton> */}
// {/* <Counter><button>ADD</button></Counter></div> */} 
