import styled from "@emotion/styled";
import exp from "constants";
//deploy
// export const NFTStyles = styled.div`
//   /* padding: 13rem; */
//   color: var(--text-1);
//   /* max-width: 140rem; */
//   width: 100%;
//   justify-content: space-around;
//   /* margin: auto; */
//   .skeleton {
//     background-color: var(--bg-4);
//     border-radius: 1rem;
//     min-width: 200px;
//     min-height: 40px;
//     margin: 1rem;
//     @media screen and (max-width: 600px) {
//       min-width: 150px;
//       min-height: 40px;
//     }
//   }
//   /* .nft-btn {
//     position: relative;
//   }
//   .nft-cost {
//     position: absolute;
//     top: 105%;
//     font-size: 1.4rem;
//     font-weight: 400;
//   } */

//   .tooltipContent {
//   }
//   .desc-skeleton {
//     margin-top: 2rem;
//     height: 16.5rem;
//   }
//   .skeleton-img {
//     height: 19.7rem;
//     width: 19.3rem;
//     @media screen and (max-width: 600px) {
//       width: 100%;
//       height: 10rem;
//     }
//   }
//   .content {
//     justify-content: center;
//     grid-area: content;
//     font-size: 4rem;
//     font-weight: 400;
//     max-width: 606px;
//     @media screen and (max-width: 600px) {
//       font-size: 32px;
//     }
//     b {
//       font-weight: 600;
//     }
//     .desc-text {
//       margin-top: 3rem;
//       font-size: 1.6rem;
//       color: var(--text-6);
//       /* b {
//         color: var(--text-1);
//       } */
//       @media screen and (max-width: 600px) {
//         font-size: 15px;
//       }
//     }
//   }
//   .illustration {
//     margin: auto;
//     margin-top: 4.4rem;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: 1fr 1fr;
//     .skeleton-single {
//       width: 197px;
//       height: 193px;
//       @media screen and (max-width: 600px) {
//         width: 100%;
//         height: 145px;
//       }
//     }
//     .card-img {
//       /* width: */
//       height: 100%;
//       img {
//         margin: 1rem;
//         width: 25rem;
//         height: 26rem;
//         @media screen and (max-width: 600px) {
//           width: 100%;
//           height: 100%;
//         }
//       }
//     }
//     .card-0 {
//       align-items: flex-end;
//       justify-content: flex-end;
//     }
//     &:hover {
//       .animatecard1 {
//         animation-play-state: paused;
//       }
//       .animatecard2 {
//         animation-play-state: paused;
//       }
//       .animatecard3 {
//         animation-play-state: paused;
//       }
//       .animatecard4 {
//         animation-play-state: paused;
//       }
//     }
//     .animatecard1 {
//       animation: animatecard1 7s infinite;
//     }
//     .card-1 {
//       align-items: flex-end;
//       justify-content: flex-start;
//     }
//     .animatecard2 {
//       animation: animatecard2 7s infinite;
//     }
//     .card-2 {
//       align-items: flex-start;
//       justify-content: flex-end;
//     }
//     .animatecard3 {
//       animation: animatecard3 7s infinite;
//     }
//     .card-3 {
//       align-items: flex-start;
//       justify-content: flex-start;
//     }
//     .animatecard4 {
//       animation: animatecard4 7s infinite;
//     }
//   }
//   .btn-bar {
//     display: flex;
//     column-gap: 2rem;
//     align-items: flex-start;
//     margin-top: -5rem;
//     /* grid-area: btn-bar; */
//     /* .btns {
//       max-width: 292px;
//     } */
//     .button {
//       border-radius: 10px;
//       width: fit-content;
//       font-size: 1.6rem;
//       @media screen and (max-width: 600px) {
//         font-size: 16px;
//       }
//     }
//     @media screen and (max-width: 600px) {
//       column-gap: 1.5rem;
//       padding-bottom: 3rem;
//     }
//     .tofuNFT {
//       text-decoration: underline;
//       transition: all 0.4s;

//       span {
//         margin-left: 0.8rem;
//       }
//       &:hover {
//         color: var(--primary);
//         span {
//           text-decoration: underline;
//           color: var(--primary);
//         }
//       }
//       svg {
//         @media screen and (max-width: 600px) {
//           transform: scale(0.7);
//         }
//       }

//       a {
//         font-size: 1.8rem;
//         color: inherit;
//         text-decoration: none;
//         &:hover {
//           text-decoration: underline;
//         }
//         @media screen and (max-width: 600px) {
//           font-size: 11px;
//           margin: 0;
//         }
//       }
//     }
//   }
//   display: grid;
//   grid-template-areas:
//     "illustration  "
//     "illustration  ";
//   /* gap: 1rem; */

//   @keyframes floating {
//     from {
//       transform: translateY(-2rem);
//     }
//     to {
//       transform: translateY(2rem);
//     }
//   }
//   @media screen and (max-width: 600px) {
//     grid-template-areas:
//       "content illustration"
//       "btn-bar illustration";
//   }
//   @media screen and (max-width: 760px) {
//     text-align: center;
//     padding: 3.5rem;
//     padding-bottom: 9rem;
//     grid-template-areas:
//       "content"
//       "illustration"
//       "btn-bar";
//     .btn-bar {
//       padding: 0 1.3rem;
//       justify-content: space-between;
//       margin-top: 4rem;
//     }
//     .tofuNFT {
//       /* margin: auto; */
//     }
//   }
//   .half-width {
//     width: 50%;
//   }
//   @keyframes animatecard1 {
//     0% {
//       transform: translate(0%, 0%);
//     }
//     25% {
//       transform: translate(100%, 0%);
//     }
//     50% {
//       transform: translate(100%, 100%);
//     }
//     75% {
//       transform: translate(0%, 100%);
//     }
//   }
//   @keyframes animatecard2 {
//     0% {
//       transform: translate(0%, 0%);
//     }
//     25% {
//       transform: translate(0%, 100%);
//     }
//     50% {
//       transform: translate(-100%, 100%);
//     }
//     75% {
//       transform: translate(-100%, 0%);
//     }
//   }
//   @keyframes animatecard3 {
//     0% {
//       transform: translate(0%, 0%);
//     }
//     25% {
//       transform: translate(0%, -100%);
//     }
//     50% {
//       transform: translate(100%, -100%);
//     }
//     75% {
//       transform: translate(100%, 0%);
//     }
//   }
//   @keyframes animatecard4 {
//     0% {
//       transform: translate(0%, 0%);
//     }
//     25% {
//       transform: translate(-100%, 0%);
//     }
//     50% {
//       transform: translate(-100%, -100%);
//     }
//     75% {
//       transform: translate(0%, -100%);
//     }
//   }
// `;



export const NFTStyles = styled.div`
  margin:8rem 0;
  gap:3rem;

  img{
    width:21rem;
    height:21rem;
  }

`