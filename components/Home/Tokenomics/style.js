import styled from 'styled-components'

const Background = styled.div`
  .outerContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content;
    grid-template-areas: 'left chart right';
    // margin: 8em 0 0;
    margin-top: 80px;
    margin-bottom: 70px;
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, max-content);
      grid-template-areas: 'chart chart' 'left right';
      margin: 0;
      margin-top: 25px;
    }

    .chartt {
      grid-area: chart;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1200px) {
        overflow-x: hidden;
      }
      @media (max-width: 600px) {
        transform: scale(1.2);
        // transform: scale(0.8);
        // width: 400px;
        // margin-left: 50px;
        margin: auto;
        margin-bottom: 10px;
        overflow-x: hidden;
      }
    }
    .left,
    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 600px) {
        width: 42%;
      }
      @media (max-width: 600px) {
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin: 10px;
      }
    }
    .left {
      grid-area: left;
      justify-self: end;
      @media (max-width: 600px) {
        width: 100%;
        justify-self: left;
        margin-top: 20px;
      }
      .legends {
        border-radius: 8px;
        padding: 1em;
        color: var(--text-1);
        display: flex;
        justify-content: flex-end;

        .value {
          font-size: 23.0316px;
          text-align: end;
          line-height: 35px;
        }
        .label {
          font-size: 17px;
          text-align: end;
          // line-height: 35px;
        }
        .data {
          // margin-right: 20px;
        }
      }
      @media (max-width: 600px) {
        .legends {
          border-radius: 8px;
          padding: 0;
          color: var(--text-1);
          display: flex;
          justify-content: flex-start;
          margin-bottom: 7px;
          .value {
            font-size: 18px;
            text-align: start;
            line-height: 35px;
          }
          .label {
            font-size: 15.193px;
            text-align: start;
            // line-height: 35px;
          }
          .data {
            // width:150px;
            margin-right: 10px;
            @media (max-width: 600px) {
              width: 120px;
            }
          }
        }
      }
    }
    .right {
      grid-area: right;
      @media (max-width: 600px) {
        margin-top: 20px;
      }
      .legends {
        border-radius: 8px;
        padding: 1em;
        color: var(--text-1);
        display: flex;
        justify-content: flex-start;
        .value {
          font-size: 23.0316px;
          text-align: start;
          line-height: 35px;
        }
        .label {
          font-size: 17px;
          text-align: start;
          // line-height: 35px;
        }
        .data {
          margin-right: 20px;
        }
      }
      @media (max-width: 600px) {
        .legends {
          border-radius: 8px;
          padding: 0;
          color: var(--text-1);
          display: flex;
          justify-content: flex-start;
          .value {
            font-size: 18px;
            text-align: start;
            line-height: 35px;
          }
          .label {
            font-size: 15.193px;
            text-align: start;
            // white-space: nowrap;
            // line-height: 35px;
          }
          .data {
            margin-right: 10px;
            @media (max-width: 600px) {
              width: 120px;
            }
          }
        }
      }
    }
  }
  .gradients {
    background: var(--bg-9);
    border-radius: 8px;
    padding: 10% 10%;
    width: 150%;
    color: var(--text-1);
    display: flex;
    @media (max-width: 600px) {
      // width: 110%;
      // padding: 10% 10%;
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
export default Background
