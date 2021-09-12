import React from'react';
import { Link } from 'react-router-dom';
import './App.css';


 export default function Header() {
    const style={
        container:{
            float:'left',
            padding:'10px'
        }
    }
        return(
        <><div className="header"> 
             <div style={{marginTop:"0px"}} className="center"><Link className='links' to="/"><h1 style={{marginTop:'50px',color:'#fff'}}>Component Life Cycle</h1></Link></div>
             <div style={{marginTop:'50px'}}className='center'>
            <div className=" " style={style.container}><Link className='links' to="/mounting">Mounting</Link></div>
            <div style={style.container}><Link className='links' to="/updating">Updating</Link></div>
            <div style={style.container}><Link className='links' to="/unmounting">Unmounting</Link></div>
            </div>
    
        
           
        </div></>)
    }
