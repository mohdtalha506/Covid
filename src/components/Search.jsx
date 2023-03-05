import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Load from './Load';

const Search = () => {

const [loading, setLoading] = useState(true)
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
setLoading(false);
})
.catch(err=>{
console.log(err);
})
},[])

const filterCountries = result.filter(item =>{
return searchCountries !=="" ? item.country.toLowerCase().includes(searchCountries.toLowerCase()) : item;
});

const countries = filterCountries.map((data, i)=>{
return (
<div>
  <div className=' card col-md-lg-4 bg-light text-dark text-center m-2 ' key={i} height={"100%"} width={'auto'}>
    <Card.Img variant='top' src={data.countryInfo.flag} />
    <div className='card-body'>
      <div className='card-title fw-bold'> {data.country} </div>
      <div className='card-text'>Deaths {data.deaths}</div>
      <div className='card-text'>Recovered {data.recovered}</div>
      <div className='card-text'>Today's cases {data.todayCases}</div>
      <div className='card-text'>Active {data.active}</div>
      <div className='card-text'>Critical {data.critical}</div>
      <div className='card-text'>Cases {data.cases}</div>
    </div>
  </div>
</div>
)
})

if(loading){
  return<> <Load/> </>
}

return (
<>

  <section>
    <Form className='d-flex justify-content-center p-5 '>
      <Form.Group className="  row" controlId="formGroupSearch">
        <Form.Control className='col-sm-10' type="text" autoComplete='off' placeholder="Search by country" onChange={e=>
          setSearchCountries(e.target.value)}
          />
      </Form.Group>
    </Form>

 

<CardGroup className='justify-content-center'>{countries}</CardGroup>
  </section>

    </>
  )
}

export default Search