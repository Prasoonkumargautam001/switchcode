import React from 'react';
import './Button.css';



const Button = () =>{

    
    return(
    <>
   <div className='container'> <h1>GO WITH YOUR INTEREST</h1></div>
    <div className='container'>
        
    <a href='#'>
        <span  onClick={()=>alert('web dev clicked')}> Web Dev</span>
        </a>


    <a href='#'>
        <span onClick={()=>alert('coding clicked')}>Coding</span>
    </a>
        

    </div>
    </>
    )
}
export default Button;