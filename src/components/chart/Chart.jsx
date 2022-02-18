import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title, data, datakey, grid}) {

    

  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width={"100%"} aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey={"name"} stroke={"#1b2430"}/>
                <Line type={"monotone"} dataKey={datakey} stroke={"#1b2430"}/>
                <Tooltip/>
                {grid && <CartesianGrid strokeDasharray={"5 5"}/>}
                <Legend/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
