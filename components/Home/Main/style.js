import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  .p-r {
    padding-right: 10rem;
  }
  .p-l {
    padding-left: 6rem;
  }

  .btnn{
    border-color: #191b20;
    opacity:0.7;
    color:#a5adcf;
    &:hover{
      background:#191b20;
    }
  }
  .main-wrapper {
    align-items: center;
    padding-bottom: 13rem;
    ${"" /* max-height: calc(90vh - 70px); */}
    justify-content: space-around;

    @media (max-width: 1200px) {
      padding-bottom: 5rem;
      padding-top: 3rem;
      /*  */
      flex-direction: column;
      padding-right: 2rem;
      padding-left: 2rem;
    }

    .pp {
      /* perspective: 3000px; */
      height: 100%;
      width: 70%;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      @media (max-width: 1200px) {
        width: 100%;
      }
    }
  }
  .hero-wrapper {
    max-width: 60vw;
    /* margin-right: 2rem; */

    @media (max-width: 1200px) {
      max-width: 100rem;
    }

    .txt {
      color: var(--text-1);
      @media (max-width: 760px) {
        font-size: 30px;
      }
    }
    .subtxt {
      /* color: var(--text-6); */
    }
  }
  .btn-s {
    margin-top: var(--xl);
    ${"" /* margin-top: -30px; */}
  }
  .btns {
    padding: 0.8rem 4rem;
  }
`;
export default Wrapper;
