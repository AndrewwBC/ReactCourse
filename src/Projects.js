import React from 'react';
import styled from 'styled-components';

const ProjectDescription = [
  {
    link: './img/primeirobik.png',
    icons: ['./iconesL/html.png', './iconesL/css.png'],
    conclusion: ' Conclusão: 06/22',
  },
  {
    link: './img/portpro1.png',
    icons: [
      './iconesL/html.png',
      './iconesL/css.png',
      './iconesL/javascript.png',
    ],
    conclusion: ' Conclusão: 07/22',
  },
  {
    link: './img/animais.png',
    icons: [
      './iconesL/html.png',
      './iconesL/css.png',
      './iconesL/javascript.png',
    ],
    conclusion: ' Conclusão: 10/22',
  },
  {
    link: './img/bikpro1.png',
    icons: [
      './iconesL/html.png',
      './iconesL/css.png',
      './iconesL/javascript.png',
    ],
    conclusion: ' Conclusão: 11/22',
  },
];

const ProjectsTitle = styled.h1`
  font-size: 48px;
  margin-top: 120px;
  margin-bottom: 120px;
  color: #202020;
`;

const ProjectsContainer = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectAndIcones = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
  align-items: center;
  justify-content: center;
`;

const EachProject = styled.div`
  margin-bottom: 12px;
`;

const IconesContainer = styled.div`
  display: flex;
  margin-left: 64px;
  height: 20%;
`;

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectsTitle>Projetos</ProjectsTitle>
        {ProjectDescription.map(({ link, icons, conclusion }) => (
          <ProjectAndIcones>
            <EachProject>
              <img key={link} src={require(`${link}`)} alt={`${link}`} />
            </EachProject>
            <IconesContainer>
              {icons.map((item) => (
                <img key={item} src={require(`${item}`)} alt={`${item}`} />
              ))}
            </IconesContainer>
          </ProjectAndIcones>
        ))}
      </ProjectsContainer>
    </>
  );
};
{
  /* <img key={link} src={require(`${link}`)} alt={`${link}`} /> */
}
export default Projects;
