import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.mediumBlue};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: 100%;
  padding: 12px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md}px;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  ${({ theme, shadow }) => theme.shadow[shadow]}
`;

export const Label = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.secondaryBold};
  font-size: 16px;
  margin-left: ${({ loading }) => (loading ? "8px" : "0px")};
`;
