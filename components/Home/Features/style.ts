import styled from "styled-components";

const Background = styled.div`
  display: flex;
  /* grid-template-columns: repeat(auto-fit, 38rem); */
  @media (max-width: 600px) {
    padding: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 100%);
  }
  justify-content: center;
  gap: 2rem;
  /* column-gap: 8rem; */
  padding-top: 8.5rem;
  padding-bottom: 12rem;
  /* padding-left: 2.5rem; */
  /* padding-right: 2.5rem; */
`;
export default Background;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #191b20;
  /* grid-column-gap: 1.4rem; */
  width: 300px;
  gap: 2rem;
  @media (max-width: 60rem) {
    width: 100%;
    display: grid;
    grid-template-areas:
      "avatar name"
      "avatar desc";
    grid-template-columns: repeat(2, fit-content);
    grid-template-rows: min-content min-content;
    row-gap: 0.5rem;
  }
  /* width: min(100%, 38rem); */
  padding: 3rem 2.5rem;
  /* background-color: var(--bg-4); */
  .img-background {
    width: 8.2rem;
    height: 8.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* display: grid;
    place-items: center;*/

    @media (max-width: 600px) {
      width: 52px;
      height: 52px;
    }
    grid-area: avatar;
    img {
      display: block;
      transition: 0.4s;
    }
    transition: 0.4s;
  }
  .feature-0 {
    background-color: var(--feature-0);
  }
  .feature-1 {
    background-color: var(--feature-1);
  }
  .feature-2 {
    background-color: var(--feature-2);
  }
  .feature-3 {
    background-color: var(--feature-3);
  }
  .feature-4 {
    background-color: var(--feature-4);
  }
  &:hover .img-background {
    filter: drop-shadow(0px 0px 10px #00000068);
    .features {
      transform: scale(1.05);
    }
  }
  .name {
    grid-area: name;
    /* white-space: nowrap; */

    text-transform: capitalize;
    font-size: 20px;
    font-weight: 500;
    color: var(--text-1);
    text-align: center;

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
  .desc {
    grid-area: desc;
    font-size: 15px;
    color: var(--text-2);
    text-align: center;
  }
  .features {
    font-size: 35px;
    color: var(--text-1);
    transition: 0.4s;
    font-family: "Relative Pro";
    margin-bottom: 0.4rem;

    @media (max-width: 600px) {
      font-size: 23px;
    }
  }
`;
