import styled from 'styled-components'

import { Title } from 'Components/Typography/Title'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--background-black);
`;

export const Content = styled.div`
  padding: 0 12rem;
`;

export const Text = styled(Title)`
  max-width: 16rem;
  color: var(--color-text-beige);
  font-size: var(--font-size-title);
  line-height: var(--line-height-default);
`;
