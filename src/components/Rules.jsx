import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>Comment jouer au jeu de dés</h2>
      <div className="text">
        <p>Sélectionner un numéro</p>
        <p>Cliquez sur l'image du dé</p>
        <p>
          Après avoir cliqué sur le dé, si le nombre sélectionné est égal au nombre du dé, vous obtiendrez le même point que le dé.
          {" "}
        </p>
        <p>Si vous vous trompez, 2 points vous seront retirés. </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;