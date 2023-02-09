import React,{useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Card from './Card';
import { CardGroup } from 'react-bootstrap';

const Countries = () => {

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
const lastupdated = date.toString();
return (
<>

  <h4 className='d-flex justify-content-center fw-bold mt-4'>List of all countries across Worldwide</h4>
  <div className='container-fluid p-3 d-flex justify-content-center'>

    <Form.Select value={country.name} onChange={onCountryChange} className="w-50 ">
      <option value="worldwide">worldwide</option>
      {countries.map(country => <option value={country.value}> {country.name}
      </option>)}

    </Form.Select>
  </div>

  <CardGroup>
    <div className='container fluid responsive'>
      <Card title={"Confirmed"} text={countryInfo.cases} icon={ <i className='fa-solid fa-virus-covid fa-4x' style={{color:"red"}} /> } status={lastupdated} />
      <Card title={"Active"} text={countryInfo.active} status={lastupdated} icon={<i className='fa-solid fa-chart-line fa-4x' style={{color:"orange"}} />}/>
      <Card title={"Fatalities"} text={countryInfo.deaths} icon={<i className='fa-solid fa-skull fa-4x' style={{color:"Black"}} />} status={lastupdated} />
      <Card title={"Recovered"} text={countryInfo.recovered} icon={<i className='fa-solid fa-heart-pulse fa-4x'style={{color:"green"}} />} status={lastupdated} />
    </div>
  </CardGroup>

</>
)
}

export default Countries