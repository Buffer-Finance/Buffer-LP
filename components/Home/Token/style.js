import styled from 'styled-components'
export const Chart = styled.div`
  .gradients {
    background: var(--bg-9);
    border-radius: 8px;
    padding: 10% 10%;
    width: 150%;
    color: var(--text-1);
    display: flex;

    @media (max-width: 600px) {
      max-width: 150px;
    }
  }

  .data {
    display: flex;
    flex-direction: column;
    .value {
      font-style: normal;
      font-weight: 500;
      font-size: 17.3447px;
      line-height: 26px;

      color: var(--text-1);
    }
    .label {
      font-style: normal;
      font-weight: normal;
      font-size: 13.8757px;
      // line-height: 21px;

      color: var(--text-2);
    }
  }

  .gradient {
    border-radius: 5px;
    margin-right: 10%;
    height: 20px;
    animation-name: animm;
    margin-top: 4px;
    width: 20px;
    @media (max-width: 600px) {
      margin-right: 5%;
      // width: 110%;
      // padding: 10% 10%;
    }
  }
  .ltGradient {
    margin-right: 15px;
    @media (max-width: 600px) {
      margin-right: 8px !important;
    }
  }
  .rtGradient {
    margin-left: 20px;
    margin-right: 0px !important;
    @media (max-width: 600px) {
      margin-left: 0px !important;
      margin-right: 8px !important;
    }
  }

  .gradient * {
    animation-name: animm;
  }

  @keyframes animm {
    0% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    .container * {
      transform: scale(0.9);
    }
    .outerContainer * {
      transform: scale(1);
    }
  }

  .heading {
    margin: auto;
    font-size: 35px;
    color: var(--text-1);
    text-align: center;
    margin-top: 70px;
    // margin-bottom: 10px;
    @media (max-width: 600px) {
      margin-top: 50px;
      font-size: 30px;
    }
  }
`
const Background = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 9.6rem 0;
  min-height: 51.2rem;
  .sub-text {
    color: var(--text-3);
    margin-bottom: 8rem;
  }
  .card {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    ${
      '' /* width: 84.5rem;
    height: 51.2rem;
    border-radius: 2rem;
    background: var(--bg-8); */
    }
    padding-right: 8rem;
    padding-left: 8rem;
    @media (max-width: 900px) {
      width: 60rem;
      padding-right: 3.2rem;
      padding-left: 3.2rem;
      margin-right: 0;
    }
    @media (max-width: 600px) {
      width: 50rem;
      padding-right: 3.2rem;
      padding-left: 3.2rem;
    }
    @media (max-width: 420px) {
      width: 38rem;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
    }
    @media (max-width: 760px) {
      flex-direction: column;
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .details {
      max-width: 540px;
      .top {
        color: var(--text-3);
        text-transform: uppercase;
      }
      .mid {
        color: var(--text-1);
        margin: 1rem 0 2.5rem 0;
      }
      .bottom {
        color: var(--text-2);
        ${'' /* max-width: 32rem; */}
        margin-bottom:5rem;
        @media (max-width:600px) {
          margin-bottom:0rem;
          
        }
      }
    }
    .pp {
      ${'' /* width: 50.5vw; */}
      margin-top: 5rem;
      max-width: 1300px;
      img {
        width: 100%;
        height: 100%;
      }
      @media (max-width: 760px) {
        width: 90%;
        align-self: center;
        margin-bottom: 2rem;
      }
    }
    .illustration {
      width: 30rem;
      @media (max-width: 420px) {
        width: 16rem;
      }
    }
  }
`
export default Background
