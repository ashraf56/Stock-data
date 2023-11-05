import { Line } from "react-chartjs-2";
import { Chart as Chartjs , CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";
import formatDate from "../util/fromateDate";
import Loader from "../util/Loader";

Chartjs.register(CategoryScale, LinearScale,  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend);

  const Amazonstock = () => {
    const[chart,setchart]=useState({
        labels: [],
        datasets: [
          {
            label: 'My First Dataset',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      })
    const[high,sethigh]=useState([])
    const [loading,setLoading]=useState(true)
    let apikey= import.meta.env.VITE_apikey
    const url  =`https://api.polygon.io/v2/aggs/ticker/AMZN/range/1/month/2023-01-01/2023-10-31?adjusted=true&sort=asc&limit=1220&apiKey=${apikey}`
    
    useEffect(()=>{
    
     axios.get(url)
      .then((response)=>{
        const alldata= response.data;
    
       const highprice= alldata?.results?.map((hp)=> hp.h)
       const Highest= highprice[highprice.length - 1]
    sethigh(Highest)
        if (alldata || Array.isArray(alldata)) {
        
       
          const fulldata = {
            labels : alldata?.results?.map((t)=> formatDate(t.t)),
            datasets: [{
                label: 'The close price',
                data: alldata?.results?.map((t) => t.c),
                fill: false,
                borderColor: 'rgb(0, 166, 251)',
                tension: 0.1
              },
            {
                label: 'The high price',
                data: alldata?.results?.map((t) => t.h ),
                fill: false,
                borderColor: 'rgb(46, 196, 182)',
                tension: 0.1
              },
            
            {
                label: 'The low price',
                data: alldata?.results?.map((t) => t.l ),
                fill: false,
                borderColor: 'rgb(239, 35, 60)',
                tension: 0.1
              },
            
            ]
            }
      
      setchart(fulldata)
    setLoading(false)
        } else {
          console.log("no api here");
          setLoading(true)
        }
       
    
    
      })
      .catch((error)=>{
         console.log(error);
      })
    
    
    },[url])
    
     
    
 
    
    
    
      // Chart options
      const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
         
        },
      };
    
    return (
        <div className="  pt-5">
      <div>Amazon.com Inc </div>
   <p className="text-5xl font-bold uppercase">{high} </p>
     <div className=" h-80">
    { loading ? <Loader/>:<Line options={options} data={chart}/>}
     </div>
     
    </div>
    );
};

export default Amazonstock;