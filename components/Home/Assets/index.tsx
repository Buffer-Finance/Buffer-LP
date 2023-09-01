/* eslint-disable */
import { useState, useEffect } from 'react'
import Background, { Card, Wrapper } from './style'
import { debounce } from '../../../hooks/useDebouncer'
import Outlinedbtn from '../../Reusable/Buttons/Outlinedbtn'
interface iAssets {}

const data = [
  {
    price: 1643,
    name: 'ethereum',
    ticker: 'eth',
    "24_hour_change": 25,
  },
  {
    price: 163,
    name: 'bitcoin',
    ticker: 'btc',
    "24_hour_change": -25,
  },

  {
    price: 1643,
    name: 'ethereum',
    ticker: 'eth',
    "24_hour_change": 25,
  },
  {
    price: 163,
    name: 'bitcoin',
    ticker: 'btc',
    "24_hour_change": -25,
  },  {
    price: 1643,
    name: 'ethereum',
    ticker: 'eth',
    "24_hour_change": 25,
  },
  {
    price: 163,
    name: 'bitcoin',
    ticker: 'btc',
    "24_hour_change": -25,
  },  {
    price: 1643,
    name: 'ethereum',
    ticker: 'eth',
    "24_hour_change": 25,
  },
  {
    price: 163,
    name: 'bitcoin',
    ticker: 'btc',
    "24_hour_change": -25,
  },  {
    price: 1643,
    name: 'ethereum',
    ticker: 'eth',
    "24_hour_change": 25,
  },
  {
    price: 163,
    name: 'bitcoin',
    ticker: 'btc',
    "24_hour_change": -25,
  },  {
    price: 1643,
    name: 'ethereum',
    ticker: 'eth',
    "24_hour_change": 25,
  },
  {
    price: 163,
    name: 'bitcoin',
    ticker: 'btc',
    "24_hour_change": -25,
  },  {
    price: 1643,
    name: 'ethereum',
    ticker: 'eth',
    "24_hour_change": 25,
  },
  {
    price: 163,
    name: 'bitcoin',
    ticker: 'btc',
    "24_hour_change": -25,
  },  {
    price: 1643,
    name: 'ethereum',
    ticker: 'eth',
    "24_hour_change": 25,
  },
  {
    price: 163,
    name: 'bitcoin',
    ticker: 'btc',
    "24_hour_change": -25,
  },
]

const Assets: React.FC<iAssets> = ({}) => {
  // function saveInput() {
  //   console.log('Saving data')
  // }
  // const processChange = debounce(() => saveInput(), 3000)
  //Debouncing Example

  return (
    <Wrapper>
      <Background>
        {data.map((s, idx) => (
          <Card key={idx}>
            <img
              src={`Tickers/Logo/${s.ticker.toUpperCase()}.svg`}
              alt={s.ticker.toUpperCase()}
              className="asset-img"
            />
            <span className="asset-price weight-600  text-1">USD {' ' + s.price.toLocaleString('US')}</span>
            <span className="asset-name text-2 sf ">{s.name}</span>
            <span className="asset-ticker text-4 sxf">{s.ticker}</span>
            {/* <img src={`/Graphs/${s.varience > 0 ? 'up1' : 'down1'}.svg`} className="asset-graph" /> */}
            <span className={'asset-varience ' + (s["24_hour_change"] < 0 ? 'red' : 'green')}>
              <img
                src={`/Arrows/${s["24_hour_change"] > 0 ? 'up' : 'down'}.png`}
                alt={s.ticker.toUpperCase()}
                className="arrow"
              />
              &nbsp;
              {s["24_hour_change"]}%
            </span>
          </Card>
        ))}
        {data.map((s, idx) => (
          <Card key={idx}>
            <img
              src={`Tickers/Logo/${s.ticker.toUpperCase()}.svg`}
              alt={s.ticker.toUpperCase()}
              className="asset-img"
            />
            <span className="asset-price weight-600 mf text-1">USD {' ' + s.price.toLocaleString('US')}</span>
            <span className="asset-name text-2 sf ">{s.name}</span>
            <span className="asset-ticker text-4 sxf">{s.ticker}</span>
            {/* <img src={`/Graphs/${s["24_hour_change"] > 0 ? 'up1' : 'down1'}.svg`} className="asset-graph" /> */}
            <span className={'asset-varience ' + (s["24_hour_change"] < 0 ? 'red' : 'green')}>
              <img
                src={`/Arrows/${s["24_hour_change"] > 0 ? 'up' : 'down'}.png`}
                alt={s.ticker.toUpperCase()}
                className="arrow"
              />
              &nbsp;
              {s["24_hour_change"]}%
            </span>
          </Card>
        ))}
      
      </Background>
      {/* <div className="flex flex-end full-width all-assets">
        <Outlinedbtn>View All Assets</Outlinedbtn>
      </div> */}
    </Wrapper>
  )
}

export default Assets
