import React from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
const Load = () => {
  return (
    <>
    <div className="container-fluid">
        <div className='d-flex justify-content-center mt-5 p-3'>
            <h2>Please Wait..</h2> 
        </div>
           <div className='d-flex justify-content-center'>
             <MoonLoader className=''
                        text="Loader Text"
                        width="250px"
                        height="250px"
                        color="#000000"
    />
           </div>
        
    </div>
 
   
       
    </>
  )
}

export default Load
