import React from 'react';
import styled from '../styling/styled';

type ParagraphProps = {
  textAlign?: 'right' | 'center';
  children: string;
};

const Paragraph = styled.div<ParagraphProps>`
  font-size: 1.125em;
  line-height: 1.45em;
  color: ${props => props.theme.colors.text};
  text-align: ${props => props.textAlign || 'left'};
`;

export default (props: ParagraphProps) => <Paragraph {...props} />;