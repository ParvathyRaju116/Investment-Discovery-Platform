import { LineChart } from '@mui/x-charts'
import React from 'react'
import './InnovatorHome.css'

function LineCart() {
  return (
    <div className='line-chart'>
         <LineChart
         className='shadow'
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={600}
      height={400}
    />
    </div>
  )
}

export default LineCart