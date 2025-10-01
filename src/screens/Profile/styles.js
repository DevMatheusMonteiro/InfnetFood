import styled from "styled-components/native";

export const ProfileContainer = styled.View`
  background: ${({ theme }) => theme.colors.surface};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: ${({ theme }) => theme.radius.lg}px;
  ${({ theme }) => theme.shadow.md};
`;

export const ConfigContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
