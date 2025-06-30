
import React from 'react';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  /* WebKit браузеры */
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  /* IE/Edge */
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

export const ScrollWrapper = ({ children, className }) => {
    return <ScrollContainer className={className}>{children}</ScrollContainer>;
};