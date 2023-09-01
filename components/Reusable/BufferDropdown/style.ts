import styled from 'styled-components'

const Background = styled.div`
  @media (max-width: 600px) {
    /* display: none; */
    margin-top: 10px;
  }
  .message {
    color: #8b8b8b;
    font-weight: 500;
    font-size: 1.4rem;
    padding: 13px 11px;
  }
  .dropdown-box {
    z-index: 1;
    position: relative;
    border-radius: 10px;

    border: 2px solid var(--bg-sec-l);
    cursor: pointer;
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
    .dropdown-items {
      position: absolute;
      z-index: 10000;
      pointer-events: none;
      bottom: 40%;
      left: 0;
      opacity: 0;
      width: 15rem;
      height:fit-content;
      background-color:#1b1b1d;
      padding: 0.6rem 0rem 0.6rem 0rem;
      border-radius: 10px;
      transition: 200ms ease;
      display: flex;
      flex-direction: column;
      top: 40px;
      // color: var(--text-1);
    }
    .dropdown-value {
      width: 5rem;
      &.sm {
        font-weight: 400;
        font-size: 14px;
      }
    }
    .dropdown-icon {
      transition: transform 400ms ease;
      width: 1.2rem;
      height: 0.8rem;
      /* margin-left: 4rem; */
    }

    .dropdown-item {
      padding-left: 1rem;
      padding-right: 1rem;
      background-color: var(--bg-3);

      // &:hover {
      //   filter: brightness(50%);
      // }
      &.active {
        color: var(--bg-sec-d);
      }
    }
    .item-img {
      width: 2rem;
      object-fit: none;
      margin-right: 1rem;
      border-radius: 50%;
      &.sm {
        width: 1.7rem;
        height: 1.7rem;
      }
    }
    &.bottom {
      .dropdown-items {
        bottom: auto;
        top: 40%;
      }
      .dropdown-icon {
        transform: rotateZ(180deg);
      }
    }
    &.active {
      .dropdown-items {
        opacity: 1;
        pointer-events: auto;
        bottom: 105%;
        /* top: auto; */
      }
      .dropdown-icon {
        transform: rotateZ(180deg);
      }
    }
    &.active-bottom {
      .dropdown-items {
        opacity: 1;
        pointer-events: auto;
        top: 100%;
        bottom: ;
      }
      .dropdown-icon {
        transform: rotateZ(0deg);
      }
    }
  }
`
export default Background
