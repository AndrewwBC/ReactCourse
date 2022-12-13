import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectDescription = [
  {
    href: 'https://andrewwbc.github.io/Bikcraft/',
    link: './img/primeirobik.png',
    icons: ['./iconesL/html.png', './iconesL/css.png'],
    conclusion: ' Conclusão: 06/22',
  },
  {
    href: 'https://andrewwbc.github.io/Portifolio-Origamid/',
    link: './img/portpro1.png',
    icons: [
      './iconesL/html.png',
      './iconesL/css.png',
      './iconesL/javascript.png',
    ],
    conclusion: ' Conclusão: 07/22',
  },
  {
    href: 'https://andrewwbc.github.io/animaisFantasticos/',
    link: './img/animais.png',
    icons: [
      './iconesL/html.png',
      './iconesL/css.png',
      './iconesL/javascript.png',
    ],
    conclusion: ' Conclusão: 10/22',
  },
  {
    href: 'https://andrewwbc.github.io/ProjetoFinal---Bikcraft/',
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
  margin-bottom: 60px;
  color: white;
`;

const ProjectsContainer = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectAndIcones = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;

const EachProject = styled.div``;

const IconesConclusion = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Conclusion = styled.div`
  font-size: 24px;
  color: white;
  text-align: end;
  justify-self: end;
`;

const Projects = () => {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {}, [state]);

  return (
    <>
      <ProjectsContainer>
        <ProjectsTitle>Projetos</ProjectsTitle>
        {ProjectDescription.map(({ link, icons, href, conclusion }, index) => (
          <ProjectAndIcones>
            <EachProject
              style={
                index % 2 === 0 ? { gridColumn: '1' } : { gridColumn: '2' }
              }
            >
              <a href={href} target="blank">
                <img
                  onMouseEnter={() => setState(index)}
                  onMouseLeave={() => setState(null)}
                  key={link}
                  src={require(`${link}`)}
                  alt={`${link}`}
                />
              </a>
            </EachProject>
            <motion.div
              animate={{ x: state !== null ? 60 : 0 }}
              transition={{ duration: 0.3 }}
              style={
                index % 2 === 0
                  ? { gridColumn: '2', textAlign: 'end' }
                  : { gridColumn: '1', textAlign: 'start' }
              }
            >
              <IconesConclusion>
                {index === state
                  ? icons.map((item, index) => (
                      <img
                        height="42"
                        key={index}
                        src={require(`${item}`)}
                        alt={`${item}`}
                      />
                    ))
                  : null}
              </IconesConclusion>
              <Conclusion>{index === state ? conclusion : ''}</Conclusion>
            </motion.div>
          </ProjectAndIcones>
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
