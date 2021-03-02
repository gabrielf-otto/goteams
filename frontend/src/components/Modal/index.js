import React from 'react';
import { Animated } from 'react-animated-css';

import { Container, Content } from './styles';


const Modal = ({ isVisible=false, size, bg, children }) => (
   <Animated 
      animationInDuration={300} 
      animationOutDuration={300} 
      animateOnMount={false} 
      isVisible={isVisible}
   >
      <Container>
         <Content size={size} bg={bg}>{children}</Content>
      </Container>
   </Animated>
);


export default Modal;
