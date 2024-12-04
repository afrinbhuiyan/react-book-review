
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink',
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink',
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'
];


const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomShapeBarChart = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    axios.get('books.json')
      .then(data => setBook(data.data))
  }, [])
  return (
    <div>
      <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
      <BarChart width={1200} height={500} data={book}>
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip></Tooltip>
        <Bar dataKey="rating"
          shape={<TriangleBar />} label={{ position: 'top' }}>
          {
            book.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} ></Cell>
            ))}
        </Bar>
      </BarChart>
    </div>
  )
};

export default CustomShapeBarChart;