import styled from "styled-components";

const Background = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 8.5rem;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2rem;
  max-width: 90vw;

  @media only screen and (max-width: 760px) {
    gap: 0;
  }

  .card {
    width: 20.5rem;
    height: 19.1rem;
    border-radius: 2rem;
    background: var(--bg-8);
    padding: 3.4rem 0;

    @media only screen and (max-width: 760px) {
      width: 18rem;
      min-height: 17rem;
      margin-bottom: 2rem;
      /* gap: 0; */

      :nth-child(odd) {
        margin-right: 2rem;
      }
      :nth-child(even) {
        margin-right: 0;
      }
    }
    .grey-circle {
      background: var(--bg-5);
      border-radius: 50%;
      width: 8.1rem;
      height: 8.1rem;
      transition: 0.4s;
      .icon {
        width: 35px;
        height: 35px;
        transition: 0.4s;
      }
    }
    &:hover .grey-circle {
      filter: drop-shadow(0 0 10px var(--shadow));
      .icon {
        transform: scale(1.05);
      }
    }
    .desc {
      margin-top: 2.1rem;
      color: var(--text-1);
      font-size: 1.6rem;
    }
  }
`;
export default Background;
