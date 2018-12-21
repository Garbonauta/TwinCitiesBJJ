import styled from 'styled-components';

import BaseTextArea from 'design/Input/TextArea';

export const InputWrapper = styled.p`
  border-bottom: solid 1px #c4c4c4;
  padding: 4px 16px 8px 16px;
`;

export const Label = styled.label`
  color: #595959;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ focus }) => focus && 'var(--black)'};
`;

export const TextArea = styled(BaseTextArea)`
  padding-top: 8px;
  width: 100%;
  color: var(--purple);
`;
