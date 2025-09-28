import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: ${({ theme }) => theme.radius.md}px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 16px;
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondaryBold};
  font-size: 16px;
`;
