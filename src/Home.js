import React from 'react';
import image from './sources/chart.png'

export default function Home(){
   return(
    <div  >

    <div className="content"><h1>

        Unmounting</h1>
    </div>
    <div className='container' style={{ marginTop: '0px' }}>
    <div style={{marginTop:"-50px",marginLeft:"5%",marginRight:"5%"}}>
        <img src={image}></img>


    </div>
    </div>

</div>
   )
}