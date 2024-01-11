import'./Video.css';
function Video({props,title,channel,viwes,time,verifide,id,children}){
  console.log(props);
  // let channelJsx
  // if(verifide){
  //  channelJsx=<div className ="channel" >{channel}✅</div>;}
  // else{
  //  channelJsx=<div className ="channel" >{channel}</div>;
  // }
  return (
    <div className="container">
     
      <img src={`https://picsum.photos/id/${id}/200/300`} alt="pradeep" />
      <div className ="title" >{title}</div>
      {/* {channelJsx} */}
      <div className ="channel" >{channel}
      {/* { verifide ?'✅':null} */}
      {verifide &&'✅' }</div>
     <div className ="viwes" >{viwes}viwes<samp>.</samp> {time}</div>
     <div>{children}</div>
    </div>
  );
}

export default Video
