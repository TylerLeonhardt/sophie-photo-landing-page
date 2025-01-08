import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
import themeList from '../data/themeList';
import authenticSelf from '../assets/images/authenticSelf.jpg';

const AboutStyles = styled.div`
  background-image: url(${authenticSelf});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 350px;
    text-shadow: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? `0 0 5px var(--white)`
        : `0 0 5px var(--black)`};
  }
  .about__desc {
    margin-bottom: 2rem;
    max-width: 300px;
    text-shadow: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? `0 0 5px var(--white)`
        : `0 0 5px var(--black)`};
  }
  .about__info {
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_4)'};
    padding: 5rem 3rem;
    border-radius: 12px;
    max-width: 500px;
  }
  .about__gap {
    flex: 3;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__subtitle {
      color: var(--lightBlue_1);
      text-shadow: 0 0 5px var(--black);
    }
    .about__title {
      color: var(--lightBlue_1);
      text-shadow: 0 0 5px var(--black);
    }
    .about__desc {
      color: var(--lightBlue_1);
      text-shadow: 0 0 5px var(--black);
    }
    .about__info {
      color: var(--lightBlue_1);
      background: none;
      background-color: ${({ theme: { theme } }) =>
        theme === themeList.light
          ? 'rgb(255, 255, 255, 0.3)'
          : 'rgb(0, 0, 0, 0.6)'};
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__info">
            <ParagraphText className="about__subtitle">Who am I</ParagraphText>
            <SectionTitle className="about__title">
              Capturing your true authentic self
            </SectionTitle>
            <ParagraphText className="about__desc">
              Capturing the most sensual, intimate, vulnerable, weird, and
              unique aspects of people. Each shoot is an opportunity to connect
              with someone.
            </ParagraphText>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Get In Touch
            </PrimaryButton>
          </div>
          <div className="about__gap" />
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
