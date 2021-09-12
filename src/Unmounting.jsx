import react from 'react';
import './App.css';

export default function () {
    const styles={
        
        textItems: 'center',
    }
    
    return (<>
        <div  >

            <div className="content"><h1>

                Unmounting</h1>
            </div>
            <div className='container' style={{ marginTop: '0px' }}>
            <div style={{marginTop:"-50px",marginLeft:"5%",marginRight:"5%"}}>
                <p>
                The final stage of unmounting is essential as it doesn’t require the component and gets unmounted from the DOM.<br></br> 
                As the final state, it is designed to produce the outcome via unmounting.
                </p>
                <p>
                This method is called when a component is being removed from the DOM:</p>
<ul>
    <li>componentWillUnmount() -
This is the last method in the lifecycle as it pertains to the core unmounting <br></br>and removal from the DOM. The cleaning up of the component is also performed here. 
This is also used in <br></br>the logging out of users when they want to clear out the program from their browser.

</li>
</ul>


            </div>
            </div>

        </div>
        </>

    )


}