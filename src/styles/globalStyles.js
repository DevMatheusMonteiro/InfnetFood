import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const GlobalContainer = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.colors.darkBlue};
`;

export const ScreenContainer = styled.View`
  flex: 1;
  padding: 0 20px;
  padding-top: 16px;
  background: ${({ theme }) => theme.colors.background};
`;

const BaseText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const BodyText = styled(BaseText)`
  font-size: 16px;
`;

export const H1 = styled(BaseText)`
  font-family: ${({ theme }) => theme.fonts.primaryBold};
  font-size: 32px;
`;

export const H2 = styled(H1)`
  font-size: 24px;
`;

export const H3 = styled(H1)`
  font-size: 20px;
`;
