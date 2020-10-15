import React from 'react';
import styled from 'styled-components';


function Header () {
    const Title = 'This is my Test React App!';

    return(
        <StyledDiv>
            <p> {Title} </p>
        </StyledDiv>
    )

}


export default Header;


const StyledDiv = styled.div`
    color: black;
    font-size: 40px;
    background-color: #61DBFB;
    font-family: verdana;
    font-weight: bold;
    padding: 5px;

`;
