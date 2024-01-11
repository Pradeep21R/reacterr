import ThemeContext from '../context/ThemeContext';
import './PlayButton.css';
import { useContext, useState } from 'react';

function PlayButton({children,massage,onPlay,onPause}){
   let [Vid,setVid]=useState(false);
   function HendelClick(e){
      console.log(e)
      e.stopPropagation() //this propagation mins stop parent on click mins not run 
      
      if(Vid) onPause()
      else onPlay();
      setVid(!Vid);
        
      
   }

   const themeContext= useContext(ThemeContext);
return(
   <button className={themeContext} onClick={
      // ()=>console.log("hello pradeep") ()=> this is use for click then work
      HendelClick}>{children}{ Vid ?'⏸️':'▶️'}</button>
)
}
export default PlayButton;