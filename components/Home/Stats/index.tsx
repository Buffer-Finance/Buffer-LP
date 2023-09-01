import { Skeleton } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Background from './style'

interface IProps {
  data?: any
}

// const data = {
//   supply: {
//     circulating_supply: 7244193.98,
//     max_supply: 100000000.0,
//     circulating_supply_percentage: 7.24,
//   },
//   valuation: {
//     current_price: 0.249,
//     last_24h_price_change: -3.64,
//     volume: 381203,
//     market_cap: 1803804.3,
//     fully_diluted_market_cap: 24900000.0,
//   },
//   holders: { ibfr: 4646, rbfr: 232 },
//   staking: {
//     locked_in_staking: 7235899.47,
//     total_value_staked: 1801738.97,
//   },
//   locked_in_vesting: 58374508.19,
//   locked_in_multisig: 15618780.08,
//   locked_in_dex: { pcs_v2: 1437656.07 },
// }
const metrics = ['$iBFR Holders', '$iBFR Price', 'Volume', 'Market Cap']

const TokenStats: React.FC<IProps> = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get('https://api-v2.buffer.finance/market/json/').then((res) => {
      setData(res.data)
    })
  }, [])
  const numberWithCommas = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <Background>
      <div className="metrics_container zph">
        <div className="flex content-center metrics-wrapper">
          {metrics.map((metric: string, index: number) => (
            <div key={index} className="metrics">
              <div className="inner">
                {data ? (
                  <div className="price">
                    {metric !== '$iBFR Holders' && '$'}
                    {metric === '$iBFR Holders'
                      ? numberWithCommas(data.holders.ibfr)
                      : metric === '$iBFR Price'
                      ? numberWithCommas(data.valuation.current_price)
                      : metric === 'Volume'
                      ? numberWithCommas(data.valuation.volume)
                      : numberWithCommas(data.valuation.market_cap)}
                  </div>
                ) : (
                  <Skeleton variant="rectangular" width={145} height={30} className="price" />
                )}
                <p className="metric">{metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Background>
  )
}
export default TokenStats
