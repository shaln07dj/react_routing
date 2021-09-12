import react from 'react';
import './App.css';

export default function Mount(){
    const styles={
        
        textItems: 'center',
    }
    

return(
    <div>
    <div className="content"><h1>
        Mounting</h1>
    </div>

    <div className='container' style={{ marginTop: '0px' }}>
    <div style={{marginTop:"-50px",marginLeft:"5%",marginRight:"5%"}}>
        <p>Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM). <br></br>
        This method is called just before a component mounts on the DOM or the render method is called. <br></br> So, nothing can be done with the DOM 
            (i.e. updating the data with API response) as it has not been mounted.</p>
                <p>
                These methods are called in the following order when an instance of a component is being created and inserted into the DOM:</p>
<ul><li>
constructor()</li>
<li>static getDerivedStateFromProps()</li>
<li>render()</li>
<li>componentDidMount()</li></ul>
</div>

            </div>
    </div>
)

}