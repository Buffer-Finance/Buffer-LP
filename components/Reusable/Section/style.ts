import styled from "styled-components";

const Background = styled.section`
  background: ${(props) => (props.bg ? props.bg : "initial")};

  .section-heading {
    margin: 0;
    width: 100%;
    text-align: center;
    padding-top: 3.6rem;

    @media (max-width: 600px) {
      font-size: 30px;
      padding: 0 2rem 0;
    }
  }

  .soon {
    background: linear-gradient(180deg, rgba(51, 243, 255, 0.25) 0%, rgba(51, 243, 255, 0) 100%);
    border: 0.858254px solid #224649;
    color: #b2f1ff;

    @media only screen and (max-width: 450px) {
      margin: 12px 0;
    }
  }
`;
export default Background;
