import react from 'react';
import './App.css';

export default function Updating(){


return(
    
    <div>
        <div  className="content"><h1>
        Updating</h1>
        </div>
    
        <div className='container' style={{ marginTop: '0px' }}>
        <div style={{marginTop:"0px",marginLeft:"5%",marginRight:"5%"}}>
            <p>
            The this stage starts when the component has been adopted on the browser. <br></br>
            This can then grow by receiving new updates from the program.<br></br>
             The user can interact with the program, and then the component can be updated accordingly.
            </p>
            <p>
            An update can be caused by changes to props or state. These methods are called in the following order when a <br></br>component is being re-rendered:</p>
<ul>
    <li>
    static getDerivedStateFromProps()</li>
<li>shouldComponentUpdate()</li>
<li>render()</li>
<li>getSnapshotBeforeUpdate()</li>
<li>componentDidUpdate()</li>
    
</ul>
</div>


        </div>
    </div>
)

}