import styled from "styled-components";
const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px; // Peut-être diminuer le gap sur les petits écrans

    p {
      font-size: 24px; // Adapter la taille de la police pour les petits écrans
      font-weight: 700; // Le poids de la police est probablement ok
    }

    .error {
      color: red;
      // Assure-toi que le message d'erreur est visible mais pas envahissant sur les petits écrans
    }
  }

  @media (max-width: 768px) {
    .flex {
      gap: 16px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .flex {
      gap: 8px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const Box = styled.div`
  height: 72px; // Adapter la taille pour les petits écrans
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px; // Réduire pour les petits écrans
  font-weight: 700;
  background-color: ${props => (props.isSelected ? "black" : "white")};
  color: ${props => (props.isSelected ? "white" : "black")};

  @media (max-width: 768px) {
    height: 60px; 
    width: 60px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 16px;
  }
`;
