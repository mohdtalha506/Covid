import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import Graph from './Graph';
import Load from './Load';


const Region = () => {

const [loading, setLoading] = useState(true)
const [continents, setContinents] = useState([]);
const [continent, setContinent] = useState('worldwide');
const [continentInfo, setContinentInfo] = useState([])

useEffect (()=>{
const getData = async () =>{
await fetch('https://disease.sh/v3/covid-19/continents')
.then(res=>res.json())
.then( data => {
const continents = data.map(item=>(
{
name : item.continent,
value: item.continentInfo.iso2
}
))
setContinents(continents)
setLoading(false);
})
}
getData()
},[])

useEffect(() => {

fetch("https://disease.sh/v3/covid-19/all")
.then(res=>res.json())
.then(data => setContinentInfo(data))
}, [])


const onContinentChange = async e =>{
const url = e.target.value === 'India' ? 'https://disease.sh/v3/covid-19/all' :
`https://disease.sh/v3/covid-19/continents/${e.target.value}`

await fetch(url)
.then(res=>res.json())
.then(data=>{
setContinent(e.target.value);
setContinentInfo(data);
})

}
if(loading){
    return<> <Load/> </>
}

return (
<>
 <h4 className='d-flex justify-content-center fw-bold mt-4'>Select Continent</h4>
    <div className=' container-fluid p-3 d-flex justify-content-center '>
        <Form.Select value={continent.name} onChange={onContinentChange} className="w-50">

            <option value="worldwide">worldwide</option>
            {continents.map(continent => 
                 <option value={continent.value}> {continent.name} </option>
            )}

        </Form.Select>
    </div>
        <div className="container d-flex justify-content-center">
                <div className='table-responsive-sm w-100 '>
            <table className='table table-hover table-stripped  '>
                <thead className='table-active bg-dark text-white '>
                    <tr> 
                        <th>Continent</th>
                        <th>Total</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{continentInfo.continent}</td>
                        <td>{continentInfo.cases}</td>
                        <td>{continentInfo.active} </td>
                        <td>{continentInfo.recovered} </td>
                        <td>{continentInfo.deaths} </td>
                    </tr>
                </tbody>
            </table>
        </div>

        </div>
            <div className="container-fluid d-flex justify-content-center m-0 p-5 " >
                <Graph/>
            </div>
          
        
</>
)
}

export default Region