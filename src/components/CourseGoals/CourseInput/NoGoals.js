//create NoGoals component
import styled from "styled-components";

const GoalsControl = styled.p`
  /* styled text center in a box with border radius */
  text-align: center;
  padding: 0.5rem;
  border-radius: 12px;
  margin: 2rem auto;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  /* media query for mobile */
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const NoGoals = () => {
  return <GoalsControl>No goals found. Maybe add one?</GoalsControl>;
};

export default NoGoals;
