import React from 'react'
import CountUp from 'react-countup'



const Box = (props) => {
return (
<>
    
    
<div className='card-group '>
  <div className=' card col-md-lg-4 bg-light text-dark text-center m-2'style={{height:"100%", width:'auto'}} >
    <div className='card-body'>
      <div className='card-title fw-bold fs-5'> {props.title} </div>
      <div className='card-img'> <i>{props.icon}</i> </div>
      <div className='card-text lead fs-2 fw-bold mt-2 mb-0'>
        <CountUp start={0} end={props.text} duration={2} dealy={0} separator={","} />
      </div>
    </div>
     <div className="card-footer">
       <small className='text-muted'>Last Updated at {props.status}</small>
    </div>
  </div>
</div>

</>
)
}

export default Box