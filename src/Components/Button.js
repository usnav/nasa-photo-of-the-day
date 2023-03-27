import React from "react";
import styled from "styled-components";

const Button = styled.button`
padding: 5px 10px;
margin: 4px;
border: none;
border-radius: 3px;
color: white; 

${props => (props.type === 'primary' ? 'background: blue' : null)}
`;

export default Button; 