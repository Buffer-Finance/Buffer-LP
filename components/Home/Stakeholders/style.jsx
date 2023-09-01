import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 75px;
  @media (max-width: 760px) {
    padding-top: 25px;
  }
  .main-wrapper {
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1200px) {
      flex-direction: column-reverse;
    }
  }
  .stakeholder-wrapper {
    flex-wrap: wrap;
    height: 71rem;
    width: 65rem;
    @media (max-width: 1200px) {
      flex-direction: column;
      height: auto;
      width: auto;
    }

    .card {
      width: 28.5rem;
      min-height: 32.9rem;
      border-radius: 1.2rem;
      background: var(--bg-8);
      padding: 2.7rem 2.1rem 0.8rem 2.1rem;
      @media (max-width: 760px) {
        margin: 0;
        margin-bottom: 2.4rem;
      }
      .grey-circle {
        background: var(--bg-5);
        border-radius: 50%;
        width: 9.1rem;
        height: 9.1rem;
        transition: 0.4s;
        .icon {
          width: 40px;
          height: 40px;
          transition: 0.4s;
        }
      }
      &:hover .grey-circle {
        filter: drop-shadow(0 0 10px var(--shadow));
        .icon {
          transform: scale(1.05);
        }
      }
      .name {
        color: var(--text-1);
        margin-top: 1.5rem;
      }

      .desc {
        color: var(--text-2);
      }
    }
  }
  .hero-wrapper {
    max-width: 540px;
    ${"" /* margin-top: 145px; */}
    @media (max-width: 760px) {
      margin: 25px 0;
      margin-bottom: 0.7rem;
    }
    .txt {
      color: var(--text-1);
      @media (max-width: 600px) {
        &.header {
          font-size: 3.8rem;
        }
      }
    }
    .subtxt {
      color: var(--text-3);
    }
  }
`;
export default Wrapper;
