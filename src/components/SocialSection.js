import React from 'react';
import styled from 'styled-components';
import SectionTitle from './titles/SectionTitle';

const SocialStyles = styled.div`
  padding: 10rem 0;
  .social__wrapper {
    padding: 3rem 3rem;
    border-radius: 12px;
    max-width: 500px;
    margin: 0 auto;
    background: var(--mediumSlateBlue);
    text-align: center;
  }
  .social__title {
    color: var(--lightBlue_1);
    margin-bottom: 2rem;
  }
  svg {
    g {
      fill: var(--lightBlue_1);
    }
  }
  svg:hover {
    g {
      fill: var(--darkBlue_3);
    }
  }
  @media only screen and (max-width: 768px) {
    .social__wrapper {
      padding: 3rem 2rem;
    }
  }
`;

function SocialSection() {
  return (
    <SocialStyles>
      <div className="container">
        <div className="social__wrapper">
          <SectionTitle className="social__title">More of my work</SectionTitle>
          <a href="https://www.instagram.com/sophiedituriphoto/">
            <svg width="48px" height="12px" viewBox="0 0 24 24">
              <g
                id="brand"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="instagram">
                  <path
                    d="M11.9999802,2 C9.28416306,2 8.94357942,2.01151157 7.87701279,2.06017771 C6.81258969,2.10872478 6.0856937,2.27778605 5.44958032,2.5250069 C4.79203161,2.78052401 4.23431598,3.12245728 3.67838663,3.67838663 C3.12245728,4.23435568 2.78052401,4.79203161 2.5249672,5.44962002 C2.27774635,6.0856937 2.10872478,6.81262938 2.06013802,7.87701279 C2.01147187,8.94361912 2,9.28412336 2,11.9999802 C2,14.7158369 2.01147187,15.0563809 2.06013802,16.1229872 C2.10872478,17.1873706 2.27774635,17.9143063 2.5249672,18.55038 C2.78052401,19.2079287 3.12245728,19.7656443 3.67838663,20.3216134 C4.23431598,20.8775427 4.79203161,21.2194363 5.44958032,21.4750328 C6.0856937,21.722214 6.81258969,21.8912752 7.87701279,21.939862 C8.94357942,21.9884884 9.28416306,22 11.9999802,22 C14.7158369,22 15.0563412,21.9884884 16.1229475,21.939862 C17.1873706,21.8912752 17.9142666,21.722214 18.55038,21.4750328 C19.2079684,21.2194363 19.7656443,20.8775427 20.3215737,20.3216134 C20.8775427,19.7656443 21.2194363,19.2079684 21.4749931,18.55038 C21.722214,17.9143063 21.8912752,17.1873706 21.9397826,16.1229872 C21.9884884,15.0563809 22,14.7158369 22,11.9999802 C22,9.28416306 21.9884884,8.94361912 21.9397826,7.87701279 C21.8912752,6.81262938 21.722214,6.0856937 21.4749931,5.44962002 C21.2194363,4.79203161 20.8775427,4.23435568 20.3215737,3.67838663 C19.7656443,3.12245728 19.2079684,2.78052401 18.55038,2.5250069 C17.9142666,2.27778605 17.1873706,2.10872478 16.1229475,2.06017771 C15.0563412,2.01151157 14.7158369,2 11.9999802,2 M11.9999802,3.80179858 C14.6701082,3.80179858 14.9863588,3.81196052 16.0408184,3.86007094 C17.0158086,3.9045691 17.545301,4.06747764 17.8976741,4.2044256 C18.3644483,4.38583204 18.697609,4.60252738 19.0475209,4.95243936 C19.3974329,5.30239103 19.6141283,5.635512 19.7955744,6.10228624 C19.9324827,6.45465931 20.0953912,6.98419144 20.1398894,7.95914187 C20.1879601,9.01360151 20.1981617,9.32989177 20.1981617,11.9999802 C20.1981617,14.6701082 20.1879601,14.9863985 20.1398894,16.0408184 C20.0953912,17.0158483 19.9324827,17.5453407 19.7955744,17.8977138 C19.6141283,18.3644483 19.3974329,18.697609 19.0475209,19.0475209 C18.697609,19.3974726 18.3644483,19.614168 17.8976741,19.7955744 C17.545301,19.9324827 17.0158086,20.0954309 16.0408184,20.1398894 C14.9865176,20.1879998 14.6703067,20.1982014 11.9999802,20.1982014 C9.3296536,20.1982014 9.01344273,20.1879998 7.95914187,20.1398894 C6.98415175,20.0954309 6.45461961,19.9324827 6.10224654,19.7955744 C5.635512,19.614168 5.30235134,19.3974726 4.95247906,19.0475209 C4.60252738,18.697609 4.38579234,18.3644483 4.20438591,17.8977138 C4.06747764,17.5453407 3.9045691,17.0158483 3.86007094,16.0408581 C3.81196052,14.9863985 3.80179858,14.6701082 3.80179858,11.9999802 C3.80179858,9.32989177 3.81196052,9.01360151 3.86007094,7.95914187 C3.9045691,6.98419144 4.06747764,6.45465931 4.20438591,6.10228624 C4.38579234,5.635512 4.60252738,5.30239103 4.95243936,4.95247906 C5.30235134,4.60252738 5.635512,4.38583204 6.10224654,4.2044256 C6.45461961,4.06747764 6.98415175,3.9045691 7.95910218,3.86007094 C9.01360151,3.81196052 9.32985208,3.80179858 11.9999802,3.80179858 M11.9999802,15.3333333 C10.1590422,15.3333333 8.66662697,13.8409181 8.66662697,11.9999802 C8.66662697,10.1590422 10.1590422,8.66666667 11.9999802,8.66666667 C13.8409181,8.66666667 15.3333333,10.1590422 15.3333333,11.9999802 C15.3333333,13.8409181 13.8409181,15.3333333 11.9999802,15.3333333 M11.9999802,6.86486808 C9.16392671,6.86486808 6.86482839,9.16392671 6.86482839,11.9999802 C6.86482839,14.8360733 9.16392671,17.1351319 11.9999802,17.1351319 C14.8360336,17.1351319 17.1350922,14.8360733 17.1350922,11.9999802 C17.1350922,9.16392671 14.8360336,6.86486808 11.9999802,6.86486808 M18.5379991,6.66197868 C18.5379991,7.32472744 18.0007661,7.86196042 17.3380174,7.86196042 C16.6752686,7.86196042 16.1379959,7.32472744 16.1379959,6.66197868 C16.1379959,5.99922992 16.6752686,5.46195724 17.3380174,5.46195724 C18.0007661,5.46195724 18.5379991,5.99922992 18.5379991,6.66197868"
                    id="Shape"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </SocialStyles>
  );
}

export default SocialSection;
