import { useState, useEffect } from 'react'
import { Cell, Pie, PieChart, Tooltip } from 'recharts'
import { TooltipProps } from 'recharts'
import { Chart } from './style'

const COLORS = ['#72EFDD', '#5390D9', '#5E60CE', '#64DFDF', '#7400B8', '#5E60CE', '#4EA8DE', '#56CFE1']

const factor = 1e18

interface Iprop {
  data: any[]
}

const Example: React.FC<Iprop> = ({ data }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [outr, setOutr] = useState(0)
  const CustomTooltip = ({
    active,
    payload,

    label,
  }: TooltipProps<any, any>) => {
    console.log('payload,active : ', payload, active)
    if (active) {
      return (
        <Chart>
          <div className="gradients">
            <span
              className="gradient"
              style={{
                background: payload && payload[0].payload.payload.color,
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <div className="data">
              <span className="value">{`${payload?.[0].value}%`}</span>
              <span className="label">{`${payload?.[0].name}`}</span>
            </div>
          </div>
        </Chart>
      )
    }
    return null
  }
  // no other option to get the screen width other than comparing it for different sizes cuz we need to pass them in the chart tag below
  useEffect(() => {
    const screenWidth = window.innerWidth
    let reqDim = screenWidth / 3
    setWidth(reqDim)
    setOutr(reqDim / 2.5)
    setHeight(reqDim)
    if (screenWidth < 600) {
      reqDim = screenWidth / 2
      setWidth(reqDim)
      setOutr(reqDim / 2.5)
      setHeight(reqDim)
    }
  }, [])
  return (
    <Chart>
      <PieChart className="chart" width={width} height={height}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          stroke="none"
          paddingAngle={0}
          outerRadius={outr}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </Chart>
  )
}
export default Example
