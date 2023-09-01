import styled from "styled-components";

const Background = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4.3rem;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 36rem;

    border-radius: 2rem;

    padding-bottom: 5.8rem;
    cursor: pointer;
    &:hover img {
      transform: scale(1.05);
    }
    @media (max-width: 760px) {
      margin: 0;
      margin-bottom: 2.4rem;
    }
    .image-bg {
      background: var(--bg-8);
      width: 100%;
      border-radius: 14px;
      height: 29.6rem;
      position: relative;
      img {
        transition: 0.4s;
      }
      .tag {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 4px 8px;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        text-transform: uppercase;
      }
      .tag-0 {
        background: var(--bg-10);
      }
      .tag-1 {
        background: var(--bg-11);
      }
      .tag-2 {
        background: var(--bg-12);
      }
    }
    .content-bg {
      width: 28rem;
      margin-top: 4.8rem;
    }
    .grey-circle {
      background: var(--bg-5);
      border-radius: 50%;
      width: 8.1rem;
      height: 8.1rem;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
    .name {
      color: var(--text-1);
    }

    .desc {
      color: var(--text-2);
    }
  }
`;
export default Background;
