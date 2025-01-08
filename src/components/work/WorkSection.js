import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import WorkMemberItem from './WorkItem';
// work member images
import engagement from '../../assets/images/engagement.jpg';
import intimates from '../../assets/images/intimates.jpg';
import wedding from '../../assets/images/wedding.jpg';

const WorkSectionStyles = styled.div`
  padding: 10rem 0;
  .work__wrapper {
    display: flex;
    gap: 1rem;
  }
  .work__info {
    max-width: 250px;
  }
  .work__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .work__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 790px) {
    .work__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .work__info {
      margin: 0 auto;
    }
    .work__members {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

function WorkSection() {
  return (
    <WorkSectionStyles>
      <div className="container">
        <div className="work__wrapper">
          <div className="work__info">
            <ParagraphText className="work__subtitle">Work</ParagraphText>
            <SectionTitle className="work__title">
              A few examples of my work
            </SectionTitle>
          </div>
          <div className="work__members">
            <WorkMemberItem
              img={engagement}
              name="Philip &amp; Ruby"
              title="Engagement"
            />
            <WorkMemberItem
              img={intimates}
              name="Brooklyn & Amber"
              title="Intimates"
            />
            <WorkMemberItem
              img={wedding}
              name="Elena & Justin"
              title="Wedding"
            />
          </div>
        </div>
      </div>
    </WorkSectionStyles>
  );
}

export default WorkSection;
