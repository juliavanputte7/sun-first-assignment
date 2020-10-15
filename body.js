import React from 'react';
import styled from 'styled-components';
import react from './react.png';
import './App.css';

function Body () {
    return (
        <div className='flex-container'>

            <img src={react} height='250px' width='350px' />
            <div>
            <StyledP>Hello World!</StyledP>
            <StyledP>This app is made using React.</StyledP>
            <StyledP>React is a JavaScript library for building user interfaces.</StyledP>
            </div>
        </div>
    )
}

export default Body;

const StyledP = styled.p`
    text-align: center;
    font-size: 20px;
    color: black;
    font-family: verdana;
    background-color: black;
    color: white;
    padding: 5px;
    margins: 2px;

`;
