import styled from 'styled-components';

const DarkLightButton = styled.button`
  background: ${props => props.dark ? 'pink' : 'blue'};
  color: ${props => props.dark ? 'black' : 'white'};
  font-size: 18px;
  border-radius: 5px;
  margin: 10px;
  padding: 5px 10px;
`;

export default DarkLightButton;