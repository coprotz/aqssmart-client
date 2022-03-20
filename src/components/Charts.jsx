import React from 'react';
import Chart from "react-apexcharts";
import moment from "moment";

const Charts = () => {
    const today = new Date();
    const lastWeek1 = moment(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)).format('DD MMM');
    const lastWeek2 = moment(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14)).format('DD MMM');
    const lastWeek3 = moment(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 21)).format('DD MMM');
    const lastWeek4 = moment(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 28)).format('DD MMM');
     console.log('today', today)
     console.log('lastWeek1', lastWeek1)
     console.log('lastWeek2', lastWeek2)
     console.log('lastWeek3', lastWeek3)
     console.log('lastWeek4', lastWeek4)

     const day = moment(today).format('DD MMM')

     console.log(day)

     const series = [
         { 
             name: 'Equipment',
             data: [15, 8, 19, 5, 26 ] 
        },
        {
            name: 'Suppliers',
            data: [ 5, 42, 15, 3, 32 ]
        },
        {
            name: 'Dealers',
            data: [ 52, 8, 20, 31, 15 ]
        },
        {
            name: 'Labourers',
            data: [ 0, 5, 1, 10, 5 ]
        },
        {
            name: 'Materials',
            data: [ 2, 1, 2, 40, 4 ]
        }

     ];

     const options = {
         chart : {
             id: "guest",
             group: "social",
             animations: {
                 speed: 100
             }
         },
         xaxis: {
             categories: [ `${lastWeek4}`,`${lastWeek3}`, `${lastWeek2}`, `${lastWeek1}`, `${day}`  ]
         },
         stroke: {
             curve: 'smooth'
         },
       
     }
  
  return (
    <Chart 
        type='line' 
        series={series} 
        options={options}
        width='100%'
        height='80%'        />
      
    
  )
}

export default Charts
