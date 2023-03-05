import React,{useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Box from './Box';
import CardGroup from 'react-bootstrap/CardGroup';
import Load from './Load';

const Countries = () => {

const [loading, setLoading] = useState(true)
const [countries, setCountries] = useState([]);
const [country, setCountry] = useState('worldwide');
const [countryInfo, setCountryInfo] = useState({})

useEffect (()=>{
const getData = async () =>{
await fetch('https://disease.sh/v3/covid-19/countries')
.then(res=>res.json())
.then( data => {
const countries = data.map(item=>(
{
name : item.country,
value: item.countryInfo.iso2,
index: item.index+1
}
))
setCountries(countries)
setLoading(false);
})
}
getData()
},[])

useEffect(() => {

fetch("https://disease.sh/v3/covid-19/all")
.then(res=>res.json())
.then(data => setCountryInfo(data))
}, [])

const onCountryChange = async e =>{
const url = e.target.value == 'worldwide' ? `https://disease.sh/v3/covid-19/all` :
`https://disease.sh/v3/covid-19/countries/${e.target.value}`

await fetch(url)
.then(res=>res.json())
.then(data=>{
setCountry(e.target.value);
setCountryInfo(data)
})

}
const date = new Date(parseInt(countryInfo.updated));
const lastupdated = date.toLocaleString();

if(loading){
  return(
    <Load/>
  );
}
return (
<>

  <section>

    <div className='container-fluid'>
      <h4 className='text-center  fw-bold mt-4'>Select country across Worldwide</h4>
    </div>

    <div className='container-fluid p-3 d-flex justify-content-center'>
      <Form.Select value={country.name} onChange={onCountryChange} className="w-50 ">
        <option value="worldwide">worldwide</option>
        {countries.map(country => <option value={country.value}> {country.name}
        </option>)}
      </Form.Select>
    </div>

     <CardGroup className=' justify-content-center '>
      
        <Box title={"Confirmed"} text={countryInfo.cases} icon={ <i className='fa-solid fa-virus-covid fa-4x'
          style={{color:"red"}} /> } status={lastupdated} />
        <Box title={"Active"} text={countryInfo.active} status={lastupdated} icon={<i
          className='fa-solid fa-chart-line fa-4x' style={{color:"orange"}} />}/>
        <Box title={"Fatalities"} text={countryInfo.deaths} icon={<i className='fa-solid fa-skull fa-4x'
          style={{color:"Black"}} />} status={lastupdated} />
        <Box title={"Recovered"} text={countryInfo.recovered} icon={<i className='fa-solid fa-heart-pulse fa-4x'
          style={{color:"green"}} />} status={lastupdated} />
     </CardGroup>
    
  </section>
</>
)
}

export default Countries