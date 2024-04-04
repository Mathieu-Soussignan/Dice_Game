import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Jouer maintenant</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center; /* Ajouté pour centrer horizontalement le contenu */
  flex-direction: column; /* Stack les éléments verticalement */

  .content {
    text-align: center; /* Centrer le texte si la page rétrécit */
    h1 {
      font-size: 6rem; /* Taille de police plus flexible */
      white-space: nowrap;
      @media (max-width: 768px) {
        font-size: 4rem; /* Taille de police plus petite pour les tablettes */
      }
      @media (max-width: 480px) {
        font-size: 2rem; /* Taille de police encore plus petite pour les mobiles */
      }
    }
  }

  img {
    width: 80%; /* Taille relative */
    max-width: 500px; /* Maximum size */
    @media (max-width: 768px) {
      max-width: 300px;
    }
    @media (max-width: 480px) {
      max-width: 200px;
    }
  }
`;
