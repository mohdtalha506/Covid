import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form'
import CountUp from 'react-countup';
import Card from './Card';
import { CardGroup } from 'react-bootstrap';

const Home = () => {

const [data, setData] = useState([]);
const [result, setResult] = useState([]);
const [searchCountries, setSearchCountries] = useState("");

useEffect (()=>{
axios
.all([
axios.get('https://disease.sh/v3/covid-19/all'),
axios.get('https://disease.sh/v3/covid-19/countries'),
])
.then( res => {
setData(res[0].data);
setResult(res[1].data);
})
.catch(err=>{
console.log(err);
})
},[])

const date = new Date(parseInt(data.updated));
const lastupdated = date.toString();

const filterCountries = result.filter(item =>{
return searchCountries !=="" ? item.country.toLowerCase().includes(searchCountries.toLowerCase()) : item
});


return (
<>

  <header id="contents">
    <div className="welcome">
      <div className=" container-fluid p-3">
        <div className="row">
          <div className="col-md-sm-lg-12">
            <h5 className='text-center fw-bold '>Globally, <span style={{color:"blue"}}></span> there have been {
              <CountUp start={data.cases} separator="," style={{color:"blue"}} />} confirmed cases of COVID-19,
              including {
              <CountUp start={data.deaths} separator="," style={{color:"blue"}} />} deaths, reported to WHO.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </header>
  

<CardGroup>
    <div className='container fluid responsive'>
      <Card title={"Confirmed"} text={data.cases} icon={ <i className='fa-solid fa-virus-covid fa-4x' style={{color:"red"}} /> } status={lastupdated}  />
      <Card title={"Active"} text={data.active} status={lastupdated} icon={<i className='fa-solid fa-chart-line fa-4x' style={{color:"orange"}} />}/>
      <Card title={"Fatalities"} text={data.deaths} icon={<i className='fa-solid fa-skull fa-4x' style={{color:"Black"}}/>} status={lastupdated} />
      <Card title={"Recovered"} text={data.recovered} icon={<i className='fa-solid fa-heart-pulse fa-4x' style={{color:"green"}} />} status={lastupdated} />
    </div>
</CardGroup>


  <section>
   <div className='container-fluid mt-2 '>
    <Form className='d-flex justify-content-center p-2 '>
        <Form.Group className=" mb-3 row" controlId="formGroupSearch">
          <Form.Control className='col-sm-10' type="text" autoComplete='off' placeholder="Search by country"
            onChange={e=>
            setSearchCountries(e.target.value)}
            />
        </Form.Group>
      </Form>
     <table className='table responsive table-striped table-active'>
      <thead className='bg-dark text-white fw-bolder sticky-top'>
        <tr>
          <th>S.N</th>
          <th>Flag</th>
          <th>Country</th>
          <th>Total</th>
          <th>Active</th>
          <th>Today Case</th>
          <th>Critical</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        { filterCountries.map((data, i)=>{
        return(
        <tr key={i}>
          <td>{i+1}</td>
          <td>
            <img src={data.countryInfo.flag} height={"30px"} width={"50px"} />
          </td>
          <td>{data.country}</td>
          <td>{data.cases}</td>
          <td>{data.active}</td>
          <td>{data.todayCases} </td>
          <td>{data.critical}</td>
          <td>{data.deaths}</td>
          <td>{data.recovered}</td>
        </tr>
        )
        }) }
      </tbody>
    </table>
   </div>
  </section>
</>

)
}


export default Home