import React from 'react';
import styled from 'styled-components';

const GridIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  max-width: 800px;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
  gap: 0px 32px;
`;

const IntroText = styled.div``;

const Name = styled.h1`
  font-size: 48px;
  color: #202020;
  margin-bottom: 12px;
`;

const History = styled.p`
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.3px;
  color: #202020;
  margin-bottom: 16px;
`;

const Knowledges = styled.p`
  font-size: 18px;
  color: #202020;
  letter-spacing: 0.3px;
  margin-bottom: 0px;
`;

const Intro = () => {
  return (
    <>
      <GridIntro>
        <img
          alt="Perfil"
          style={{
            display: 'block',
            maxWidth: '100%',
            border: '4px solid #303030',
            borderRadius: '6px',
            boxSizing: 'border-box',
          }}
          src={require('./img/perfil.jpg')}
        />

        <IntroText>
          <Name>Andrew Campos</Name>
          <History>
            Estou programando desde março de 2022. Comecei estudando os cursos
            Origamid e, posteriormente, iniciei no curso de Sistemas para
            Internet no IFSul Campus Pelotas, em maio.
          </History>
          <Knowledges>
            Linguagens em contato: HTML, CSS, C, JavaScript, PHP, SQL.
          </Knowledges>
        </IntroText>
      </GridIntro>
    </>
  );
};

export default Intro;
