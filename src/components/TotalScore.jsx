import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px; // Peut-être augmenter un peu pour les grands écrans
  text-align: center;

  h1 {
    font-size: 100px; // Trop grand pour les mobiles
    line-height: 100px; // Idem
    @media (max-width: 768px) {
      font-size: 50px; // Plus petit pour les tablettes
      line-height: 50px;
    }
    @media (max-width: 480px) {
      font-size: 30px; // Encore plus petit pour les mobiles
      line-height: 30px;
    }
  }

  p {
    font-size: 24px; // Peut-être un peu grand pour mobile
    font-weight: 500px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
