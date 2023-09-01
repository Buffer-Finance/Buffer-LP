import styled from "styled-components";

const Background = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10.6rem;
  padding-bottom: 14rem;

  @media (max-width: 1046px) {
    flex-direction: column;
    align-items: center;
  }
  .imaage {
    width: 18rem;
    height: 12rem;
  }
  .card {
    width: 35.7rem;
    min-height: 48rem;
    border-radius: 2rem;
    background: var(--bg-4);
    position: relative;
    padding-bottom: 5.8rem;
    @media (max-width: 1046px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
    @media (max-width: 606px) {
      margin-right: 0;
      margin-bottom: 10px;
      &.fixedHeight {
        height: 50rem;
      }
    }

    &:hover .illustration {
      transform: scale(1.05);
    }
    .illustration {
      display: flex;
      transition: 0.4s;
      object-fit: contain;
      position: absolute !important;
      top: 5rem !important;
    }
    .illustration0 {
      width: 130px;
      height: 108px;
    }
    .illustration1 {
      width: 147px;
      height: 114px;
    }

    .illustration2 {
      width: 87px;
      height: 130px;
      @media (max-width: 1046px) {
        top: 3rem !important;
      }
    }

    .name {
      color: var(--text-1);
      margin-top: 5rem;
    }

    .desc {
      color: var(--text-2);
    }
  }
`;
export default Background;
