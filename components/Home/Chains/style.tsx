import styled from "styled-components";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12rem;
  padding-bottom: 8rem;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    padding-top: 8rem;
    row-gap: 2rem;
    column-gap: 4rem;
  }
  .image-wrapper {
    margin: 10px;
    @media (max-width: 600px) {
      margin: 0px;
    }
  }
  .image-wrapper-aurora {
    margin: 0 3rem;
    margin-left: 4rem;
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      margin: 0rem;
      margin-right: 1rem;
    }
  }
  .chain-img {
    margin: 0 4rem;
    width: 22rem;
    height: 4.6rem;
    @media (max-width: 600px) {
      width: 16rem;
      height: 6rem;
      margin: 0;
    }
  }
  .chain-img-aurora {
    margin-right: 1.5rem;
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    @media (max-width: 600px) {
      width: 3.5rem;
      height: 3.5rem;
      margin: 0 1rem;
      margin-left: 3.8rem;
    }
  }
  .aurora-text {
    font-size: 2.8rem;
    font-weight: 500;
    color: var(--text-1);
  }
`;
export default Background;
