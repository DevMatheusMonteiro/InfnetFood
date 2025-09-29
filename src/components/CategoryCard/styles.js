import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.overlay};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: ${({ theme }) => theme.radius.lg}px;
`;
