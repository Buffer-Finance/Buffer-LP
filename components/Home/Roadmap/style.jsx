import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 20rem;

  .main-wrapper {
    justify-content: center;
    @media (max-width: 1490px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .stakeholder-wrapper {
    flex-wrap: wrap;
    height: 60rem;
    row-gap: 2rem;
    column-gap: 2rem;
    width: 100%;
    max-width: 750px;
    margin-right: 2rem;

    @media (max-width: 480px) {
      height: auto;
      flex-direction: row;
      margin-right: 0rem;
    }

    .card {
      width: 50%;
      border-radius: 1.2rem;
      background: var(--bg-8);
      padding: 2.7rem 2.1rem 0.8rem 2.1rem;
      transition:200ms ease-out;
      &:hover{
        transform:scale(1.04);
      }
      @media (max-width: 860px) {
        min-width: 25rem;
        max-width: 26rem;
      }
      @media (max-width: 560px) {
        min-width: 100%;
        max-width: 100%;
        margin-bottom: 1.7rem;
      }

      .grey-circle {
        background: var(--bg-5);
        border-radius: 50%;
        width: 9.1rem;
        height: 9.1rem;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
      .name {
        color: var(--text-1);
      }
      ul {
        padding-left: 2rem !important;
      }

      .desc {
        color: var(--text-2);
      }
    }
  }
  .hero-wrapper {
    max-width: 540px;
    margin-right: 7.8rem;
    @media (max-width: 560px) {
      margin-right: 0rem;
    }
    .txt {
      color: var(--text-1);
    }
    .subtxt {
      color: var(--text-3);
    }
  }
`;
export default Wrapper;
