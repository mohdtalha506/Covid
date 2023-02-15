import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = () => {

  const [continent, setContinent] = useState([]);
  const [cases, setCases] = useState([]);
 
  useEffect(() => {
    const getContinent=[];
    const getcases=[];
    
    const getData=async()=>{
      const reqData= await fetch('https://disease.sh/v3/covid-19/continents'); 
      const resData= await reqData.json();
      for( let i=0; i<resData.length; i++)
      {
        getContinent.push(resData[i].continent);
        getcases.push(resData[i].cases);
      }
      setContinent(getContinent);
      setCases(getcases);
      
    }
    getData();

  }, [])
  

  return (
    
      
      <div 
      
      >
        <Doughnut 
        data= {{
           labels:country,
           datasets:[
      {
        data:cases,
        backgroundColor:['green','yellow','blue','purple','red','orangered']
      }
    ]
        }}

        options={{
          responsive:true,
        }}
        >

        </Doughnut>

      </div>

  );
}

export default Graph
