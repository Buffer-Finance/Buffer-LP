import styled from "styled-components";

const Background = styled.div`
  margin-top: 6rem;

  .metrics_container {
    @media (max-width: 760px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .metrics-wrapper {
      background-color: var(--bg-2);
      border-radius: 20px;
      max-width: 1325px;
    }
    .flex {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: auto;
      justify-content: space-evenly;
      padding: 1.5rem 0;
      row-gap: 1rem;

      @media (min-width: 600px) and (max-width: 1200px) {
        // width: 140px;
        // margin:0;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 600px) {
        margin-bottom: 3rem;
      }
      @media (max-width: 600px) {
        justify-content: center;
        align-content: center;
        margin-top: 25px;
        font-size: 22px;
      }
      .metrics {
        box-sizing: border-box;
        // width: 25%;
        flex: 1;
        min-width: 175px;
        // border-radius: 10px;
        color: #ffffff;
        display: flex;
        padding: 0.5rem 0;
        align-items: center;
        border-right: 1px solid var(--bg-15);

        &:last-child {
          border: none;
        }
        transform-origin: center;

        // @media (min-width: 600px) and (max-width: 1200px) {
        //   width: 40%;
        // }
        // @media (max-width: 600px) {
        //   width: 65%;
        // }
        // @media (max-width: 600px) {
        //   width: 50%;
        // }
        .inner {
          border-radius: 10px;
          padding: 0 10px;
          text-transform: capitalize;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          transition: 300ms cubic-bezier(0.32, 0.6, 0.35, 0.85);
          &:hover {
            transform: scale(1.05);
          }
          // @media (max-width: 600px) {
          //   width: 100%;
          //   margin: 1% 0.3%;
          // }

          p {
            font-family: Poppins;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            margin: 0;
            text-transform: initial;
            color: rgba(255, 255, 255, 0.85);
            @media (max-width: 600px) {
              font-size: 15px;
            }
          }
          .price {
            margin: 10px 0;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 30px;
            text-align: center;
            color: var(--text-1);
            font-weight: 600;
            @media (max-width: 600px) {
              margin: 6px 0;
              font-size: 20px;
            }
          }
          .metric {
            color: var(--text-3);
          }
        }
      }
      .metrics:nth-child(2) {
        @media (max-width: 1200px) {
          border-right: none;
        }
      }
      .stat_skel {
        background: var(--skel-color);
        box-sizing: border-box;
        width: 18%;
        height: 120px !important;
        transform: scale(1) !important;
        border-radius: 10px;
        margin: 0 15px 0 0;
        color: #ffffff;
        display: flex;
        align-items: center;
        &:hover {
          transform: scale(1.05);
        }
        @media (min-width: 600px) and (max-width: 1200px) {
          margin: 15px;
        }
        @media (max-width: 600px) {
          width: 90%;
          margin: 15px auto;
        }
      }
    }
  }
`;
export default Background;
