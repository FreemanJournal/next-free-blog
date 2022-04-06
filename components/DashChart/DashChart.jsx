import React from 'react'
import { Bar, BarChart, CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import useChartData from '../../hooks/useChartData'

export default function DashChart() {
    const [data] = useChartData()

    return (
        <div className='py-24 px-12 flex flex-col  md:flex-row gap-4'>
            <div className='relative w-full h-96' >
                <p className='text-2xl text-center font-bold text-blue-500 py-4'>Investment vs Revenue</p>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" >
                            <Label value="Month" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis label={{ value: 'Investment', angle: -90, position: 'insideLeft', offset: -15 }} dataKey="investment" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='relative w-full h-96' >
                <p className='text-2xl text-center font-bold text-blue-500 py-4'>Investment vs Sell</p>

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" >
                            <Label value="Month" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis label={{ value: 'Investment', angle: -90, position: 'insideLeft', offset: 3 }} dataKey="investment" />

                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="sell" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    )
}
