import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.surface};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: ${({ theme }) => theme.radius.lg}px;
  ${({ theme }) => theme.shadow.md};
`;
