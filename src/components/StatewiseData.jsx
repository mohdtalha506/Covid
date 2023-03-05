import React,{useEffect, useState} from 'react';
import Load from './Load';


const StatewiseData = () => {

    
const [loading, setLoading] = useState(true)
const [data, setData] = useState([]);
const [total, setTotal] = useState([]);

const getCovidData = async () => {
const res = await fetch('https://data.covid19india.org/data.json');
const actualData = await res.json();
console.log(actualData);
setLoading(false)
setData(actualData.statewise.slice(1));
setTotal(actualData.statewise.slice(0,1));
}

useEffect(() => {
getCovidData();
}, [])

if(loading){
    return <>
    
    <Load />
    </>
    
}
return (
<>

    <div className='container-fluid p-4'>
        
            <h1 className=' text-center'>India Statewise COVID-19 Delta variant Report</h1>

    </div>

    <div className='table-responsive-sm m-2' style={{height:"25rem"}}>
        <table className='table table-hover table-striped  '>
            <thead className='bg-dark text-white sticky-top'>
                <tr>
                    <th>S.N</th>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Death</th>
                    <th>Updated</th>
                </tr>
            </thead>
            
            <tbody>
                {
                data.map((curEle,index)=>{
                return(
                <tr key={index} >
                    <td>{index +1 }</td>
                    <td>{curEle.state}</td>
                    <td className='confirmed'>{curEle.confirmed}</td>
                    <td className='activec'>{curEle.active}</td>
                    <td className='recovered'>{curEle.recovered}</td>
                    <td className='death'>{curEle.deaths}</td>
                    <td>{curEle.lastupdatedtime}</td>
                 
                </tr>
                )
                })
                }   

            </tbody>
            <tfoot className='bg-dark text-white'>
                 
                 { total.map((item,i)=>{
                return(
                    <tr key={i}>
                        <th> {'#'} </th>
                        <th>{item.state}</th>
                        <th> {item.confirmed}</th>
                        <th> {item.active}</th>
                        <th> {item.recovered}</th>
                        <th> {item.deaths}</th>
                        <th> {item.lastupdatedtime}</th>
                    </tr>
                )
               }) }
            </tfoot>
            
        </table>
      
    </div> 

</>
)
}

export default StatewiseData
// react spinner Loader ?
//Install the package using npm
