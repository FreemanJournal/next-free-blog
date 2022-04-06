import React, { useEffect, useState } from 'react'

export default function useChartData() {
    const [data,setData] = useState([])
    useEffect(() => {

        fetch("/data/data.json")
        .then(res=>res.json())
        .then(chartData => setData(chartData))
      
    }, [])
    
  return [data]
}
