import Video from "./file/Video";
import PlayButton from "./file/PlayButton";


function VideoList({videos}){
    return(
<>

{
        videos.map(
          video=><Video
          title={video.title}
          channel={video.channel}
          viwes={video.viwes}
          time={video.time}
          verifide={video.verifide}

          
         >
           <PlayButton  onPlay={()=>console.log("playes",video.title)} onPause={()=>console.log("pause",video.title)}>{video.title}</PlayButton>
         </Video> 
        
        )
       
      }
</>
    );
}
export default VideoList;