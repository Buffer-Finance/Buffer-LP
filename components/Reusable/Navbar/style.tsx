import styled from "styled-components";

const Background = styled.nav`
  z-index: 100;
  background: var(--bg-1);
  grid-area: navbar;
  .balck-bg {
    background: var(--bg-1);
  }

  .a-link {
    color: inherit;
    text-decoration: none;
  }
  .nav-background {
    padding: 1.6rem 3rem;
    padding-right: 6rem;
    @media (max-width: 760px) {
      padding-right: 2rem;
      padding-left: 2rem;
    }
    .buffer-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 3rem;
    }
  }
  .buffer-logo {
    /* border-right: 1px solid var(--bg-14); */
  }

  .btn {
    background: var(--primary);
    padding: 0.4rem 1.5rem;
    min-width: fit-content;
    border-radius: 10px;
    transition: 300ms ease;
    white-space: nowrap;
    /* display: none; */

    &.show {
      transform: translateX(0%);
      @media (max-width: 600px) {
        transform: translateX(20%);
      }
    }

    /* &.hideable{
    } */

    &:hover {
      background: var(--primary);
    }
  }
  .nav-links {
    /* transition: 0.4s; */

    @media (max-width: 1200px) {
      display: none;
    }
  }
  .nav-link {
    /* border-radius: 8px; */
    /* border: 1px solid transparent; */
    /* transition: 1s ease ; */
    /* &:hover a {
      color: var(--text-5);
    } */
    &.active {
      color: var(--bg-sec-d);
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  .dropdown-value {
    color: var(--text-3);
    &:hover {
      color: var(--text-5);
    }
  }
  .new {
    color: var(--text-3);
    &:hover {
      color: var(--text-1);
    }
  }
  .dropdown-item-text {
    font-size: 1.4rem;
  }
  .hamburger {
    color: var(--text-1);
    font-size: 2.4rem;
    display: none;
    @media (max-width: 1200px) {
      display: block;
    }
  }
`;
export default Background;
