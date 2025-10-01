import styled from "styled-components/native";

export const OrderContainer = styled.View``;

export const CartContainer = styled.View`
  background: ${({ theme }) => theme.colors.surface};
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.radius.md}px;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
`;

export const PriceQuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const PaymentMethods = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-around;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 10px;
`;
