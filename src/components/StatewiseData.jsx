import React,{useEffect, useState} from 'react';


const StatewiseData = () => {
const [data, setData] = useState([]);

const getCovidData = async () => {
const res = await fetch('https://data.covid19india.org/data.json');
const actualData = await res.json();
console.log(actualData);
setData(actualData.statewise);
}

useEffect(() => {
getCovidData();
}, [ ])


return (
<>

    <div className='container-fluid p-4'>
        <div className='main-heading'>
            <h1 className=' text-center'>India Statewise COVID-19 Data</h1>
        </div>
    </div>

    <div className='table-responsive d-flex justify-content-center' style={{height:"25rem"}} >
        <table className='table table-hover table-striped  w-75 '>
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
        </table>
    </div>

</>
)
}

export default StatewiseData