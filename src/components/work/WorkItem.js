import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../paragraphTexts/ParagraphText';

const WorkMemberItemStyles = styled.div`
  .workMember__img {
    margin-bottom: 2rem;
    width: 100%;
    height: 313px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 18px;
  }
  .workMember__name {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }
  @media only screen and (max-width: 768px) {
    .workMember__img {
      margin-bottom: 1rem;
      height: 400px;
    }
  }
`;

function WorkMemberItem({ img, name, title }) {
  return (
    <WorkMemberItemStyles>
      <div
        className="workMember__img"
        style={{ backgroundImage: `url(${img})` }}
      />
      <ParagraphText className="workMember__name">{name}</ParagraphText>
      <ParagraphText className="workMember__subtitle">{title}</ParagraphText>
    </WorkMemberItemStyles>
  );
}

export default WorkMemberItem;
