import React from 'react';
import styled from 'styled-components';

function Button() {
    return(
        <div>
            <StyledButton>
                <a href="https://reactjs.org/" target="_blank">Learn More</a>
            </StyledButton>
        </div>
    )
}

export default Button;

const StyledButton = styled.button`
    font-size: 20px;
    color: black;
    background-color: #61DBFB;
    border-weight: 2px;
    padding: 5px;
    border-color: black;

`;
