import styled from "styled-components";

const Background = styled.nav`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 2rem;
  z-index: 2;
  .footer {
    /* column-gap: 2rem; */
    border-radius: 20px;
    padding: 1.2rem 2.5rem;
    // border: 2px solid rgba(40, 40, 59, 0.5);
    background: #0e1014;
    /* backdrop-filter: blur(30px); */
  }
  .mar {
    margin: 0 1rem;
    :first-of-type {
      margin-left: 0;
    }
    :last-of-type {
      margin-right: 0;
    }
  }
  .icon {
    color: var(--text-3);
    width: 28px;
    height: 28px;
    transition: 0.2s;

    &:hover {
      transform: rotate(12deg);
      filter: drop-shadow(0 0 10px var(--social-shadow));
      color: var(--social-text);
    }
  }
  @media (max-width: 460px) {
    left: 50%;
    transform: translate(-50%, 0);
    right: unset;
  }
`;
export default Background;
