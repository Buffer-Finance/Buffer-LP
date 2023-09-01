import styled from "@emotion/styled";

export const OurTokensStyles = styled.div`
  color: var(--text-1);
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 10rem 20rem;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 6.4rem;
    margin: 16px 0;
  }
  .btnn {
    width: fit-content;
    border-radius: 10px;
    background-color: #191b20;
    opacity: 0.6;
    color: #a5adcf;
  }

  .btnn:hover {
    width: fit-content;
    border-radius: 10px;
    background-color: #191b20;
    background: #191b20;

    color: #a5adcf;
    backdrop-filter: none;
    filter: none;
  }

  .head {
    font-size: 25px;
    font-weight: 500;
    @media only screen and (max-width: 600px) {
      font-size: 28px;
    }
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 62rem;
    gap: 4rem;

    @media only screen and (max-width: 600px) {
      gap: 2rem;
    }
    .token {
      @media only screen and (max-width: 600px) {
        width: 34px;
        height: 34px;
      }
    }
  }
`;
