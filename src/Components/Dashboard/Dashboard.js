import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, ComposedChart, Line, Scatter, PieChart, Pie } from 'recharts';

const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row g-4">
                        <div className='col col-sm-12 col-md-12 col-lg-6 text-center'>
                            <BarChart
                                width={445}
                                height={400}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="revenue" fill="#8884d8" />
                                <Bar dataKey="investment" fill="#82ca9d" />
                            </BarChart>
                        </div>
                        <div className='col col-sm-12 col-md-12 col-lg-6 text-center'>
                            <AreaChart
                                width={445}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </div>
                        <div className='col col-sm-12 col-md-12 col-lg-6 text-center'>
                            <ComposedChart
                                width={445}
                                height={400}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="month" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="month" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                                <Scatter dataKey="sell" fill="red" />
                            </ComposedChart>
                        </div>
                        <div className='col col-sm-12 col-md-12 col-lg-6 text-center'>
                            <PieChart width={400} height={400}>
                                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" />
                                <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#8884d8" label />
                            </PieChart>
                        </div>
                    </div>
                </div>
            );
};

            export default Dashboard;