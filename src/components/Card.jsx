import React from 'react'
import CountUp from 'react-countup'

const Card = (props) => {
  return (
   <>
    <div className="container-fluid responsive  m-0 p-0" >
        <div className="card float-start me-3 text-center" style={{width:"21.5%"}} >
            <div className="card-body">
                <div className="card-title fs-3"> {props.title} </div>
                <i> {props.icon } </i>
                <div className="card-text lead fs-2 fw-bold mt-2 mb-0"> 
                 <CountUp  start={0} end={props.text} duration={4} dealy={0} separator={","} />
                </div>
            </div>
            <div className="card-footer">
                <small>{props.status}</small>
            </div>
        </div>
    </div>
   </>
  )
}

export default Card