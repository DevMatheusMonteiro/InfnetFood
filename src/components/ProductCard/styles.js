import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.overlay};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: ${({ theme }) => theme.radius.lg}px;
`;

export const AddRemoveContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
