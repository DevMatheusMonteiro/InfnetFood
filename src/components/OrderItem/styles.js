import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.surface};
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg}px;
  border: 1px solid ${({ theme }) => theme.colors.mediumBlue};
`;
