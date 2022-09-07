//create card component

import styled from "styled-components";

const Card = styled.div`
    /* styled text center in a box with border radius */
    text-align: center;
    padding: 0.5rem;
    border-radius: 12px;
    margin: 2rem auto;
    width: 80%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background: darkgray;
    
    /* media query for mobile */
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export default Card;
