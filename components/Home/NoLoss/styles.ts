import styled from "@emotion/styled";

export const NoLossStyles = styled.div`
  display: grid;
  grid-template-areas:
    "content content illustration"
    "btn-bar btn-bar illustration";
  padding: 13rem;
  color: var(--text-1);
  /* max-width: 140rem; */
  width: 100%;
  justify-content: space-around;
  .content {
    justify-content: center;
    grid-area: content;
    font-size: 4rem;
    font-weight: 400;
    max-width: 606px;
    @media screen and (max-width: 600px) {
      font-size: 32px;
    }
    b {
      font-weight: 600;
    }
    .desc-text {
      margin-top: 3rem;
      font-size: 1.6rem;
      color: var(--text-6);
      /* b {
        color: var(--text-1);
      } */
      @media screen and (max-width: 600px) {
        font-size: 15px;
      }
    }
  }
  .illustration {
    margin: auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-area: illustration;
    transition: 0.1s all;
    .skeleton-single {
      width: 197px;
      height: 193px;
      @media screen and (max-width: 1020px) {
        width: 100%;
        height: 145px;
      }
    }
    .card-img {
      /* width: */
      height: 100%;
      img {
        margin: 1rem;
        /* width: 21rem; */
        /* height: 21.6rem; */
        @media screen and (max-width: 1020px) {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .btn-bar {
    display: flex;
    column-gap: 2rem;
    align-items: flex-start;
    margin-top: -5rem;
    /* grid-area: btn-bar; */
    /* .btns {
      max-width: 292px;
    } */
    .button {
      border-radius: 10px;
      width: fit-content;
      font-size: 1.6rem;
      @media screen and (max-width: 600px) {
        font-size: 16px;
      }
    }
    @media screen and (max-width: 600px) {
      column-gap: 1.5rem;
      padding-bottom: 3rem;
    }
    .tofuNFT {
      text-decoration: underline;
      transition: all 0.4s;

      span {
        margin-left: 0.8rem;
      }
      &:hover {
        color: var(--primary);
        span {
          text-decoration: underline;
          color: var(--primary);
        }
      }
      svg {
        @media screen and (max-width: 600px) {
          transform: scale(0.7);
        }
      }

      a {
        font-size: 1.8rem;
        color: inherit;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        @media screen and (max-width: 600px) {
          font-size: 11px;
          margin: 0;
        }
      }
    }
  }
`;
