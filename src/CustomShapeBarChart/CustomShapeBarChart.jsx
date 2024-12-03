
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

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
    const  [book, setBook] = useState([])
useEffect(() => {
    axios.get('books.json')
    .then(data => setBook(data.data))
}, [])
    return (
        <div>
            <BarChart width={1100} height={500} data={book}>
    <XAxis dataKey="bookName" />
    <YAxis />
    <Tooltip></Tooltip>
    <Bar dataKey="rating" 
    Cell  fill={'#35e43d'}
      shape={<TriangleBar />} />
  </BarChart>
        </div>
    )
};

export default CustomShapeBarChart;