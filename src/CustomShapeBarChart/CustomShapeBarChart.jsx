import axios from 'axios';
import  { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const CustomShapeBarChart = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const [book, setBook] = useState([]);

    useEffect(() => {
        // fetch('books.json')
        // .then(res => res.json())
        // .then(data =>  setBook(data))
        axios.get('books.json')
            .then(data => setBook(data.data))
    }, [])
    return (
        <div>
            <h1>book: {book.length} </h1>
            <BarChart
                width={1000}
                height={400}
                data={book}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar dataKey="totalPages" fill="#8884d8"  label={{ position: 'top' }}>
                    {book.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default CustomShapeBarChart;