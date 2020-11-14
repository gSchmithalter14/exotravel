import styled, { css } from 'styled-components';

export const MainTitle = styled.h1`
 font-weight: bold;
 font-size: 1.4rem;
 letter-spacing: 4px;
 margin-bottom: 1rem;
`;

export const SubTitle = styled.h2`
 letter-spacing: 5px;
 margin-bottom: 1rem;
 font-weight: bold;
 font-size: 2.6rem;
 
 color: ${(props) => props.theme.bluenights};

 ${(props) => props.center && css`
    text-align: center;
 `}

 ${(props) => props.nowrap && css`
    white-space: nowrap;
 `}

 ${(props) => props.moccasin && css`
    color: props.theme.moccasin;
 `}

 ${(props) => props.underline && css`
  width: 50px;
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: 2.5px ${props.theme.hippiepinklight} solid;
  `}

  @media screen and (max-width: 600px) {
        font-size: 1.8rem;
    }
`;

export const Paragraph = styled.p`
 
 letter-spacing: 3px;
 font-size: 1.4rem;
 font-weight: bold;

 color: ${(props) => (props.light ? props.theme.light : props.theme.electromagnetic)};

 ${(props) => props.center && css`
    text-align: center;
 `}
`;
