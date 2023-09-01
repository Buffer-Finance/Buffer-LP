import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--bg-1);
  padding-top: 75px;
  @media (max-width: 760px) {
    padding-top: 25px;
  }
  .main-wrapper {
    align-items: center;

    justify-content: space-around;

    @media (max-width: 760px) {
      flex-direction: column;
      padding-left: 3rem;
      padding-right: 3rem;
    }
    .pp {
      ${"" /* width: 50.5vw; */}
      margin-top: 5rem;
      max-width: 1300px;
      height: 90vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      @media (max-width: 760px) {
        margin-top: 0;
        width: 90%;
        align-self: center;
        height: auto;
      }
    }
  }
  .hero-wrapper {
    max-width: 540px;
    .txt {
      color: var(--text-1);
      @media (max-width: 600px) {
        font-size: 3.5rem;
        line-height: 4rem;
      }
    }
    .subtxt {
      color: var(--text-3);
    }
  }
  .btn-s {
    ${"" /* margin-top: -20px; */}
  }
  .btns {
    padding: 0.8rem 4rem;
  }
`;
export default Wrapper;
