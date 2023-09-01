import styled from 'styled-components'
export const Wrapper = styled.div`
  position:relative;
  overflow:hidden;
  .all-assets {
    padding-right: 8rem;
  }
  padding-bottom: 13rem;
`
export const Card = styled.div`
  --card-width: 27rem;
  display: grid;
  margin:0rem 1.5rem;
 /* min-width: var(--card-width); */
  // height: 16rem;
  background: var(--bg-13);
  padding: 1.4rem 2rem;
  grid-template-areas:
    'avatar  asset ticker'
    'avatar  price change';
  /* grid-template-rows: min-content min-content 1.5rem min-content; */
  /* grid-template-columns: max-content fit-content; */
  transition: 200ms ease;
  row-gap:0.6rem;
  &:hover {
    transform: scale(1.05);
  }
  .asset-price {
    grid-area: price;
    justify-self: start;
    white-space:nowrap;
    align-self: end;
    margin-right:2rem;
    font-size:1.6rem;

  }
  .asset-name {
    justify-self: start;
    align-self: start;
    grid-area: asset;
    text-transform: capitalize;
    margin-right:1.2rem;
  }
  .asset-ticker {
    justify-self: end;
    align-self: start;
    grid-area: ticker;
    font-size:1.2rem;
    font-weight:600;

    text-transform: uppercase;
  }
  .asset-img {
    width: 3.9rem;
    margin-right: 0.9rem;
    height: 3.7rem;
    border-radius: 50%;
    object-fit: cover;
    grid-area: avatar;
  }
  .asset-graph {
    grid-area: graph;
    justify-self: start;
    width: 15rem;
    height: 4rem;
  }
  .asset-varience {
    grid-area: change;
    justify-self: end;
    align-self: center;
    font-size: 1.4rem;
    font-weight: 600;
    display:flex;
    align-items:center;
  }
  .arrow {
    width: 1rem;
    height: 1.5rem;
  }
`

const Background = styled.div`
position:absolute;
display:flex;
animation:90s linear  bannermove infinite;

`
export default Background
