import { Order } from "../../types/Order";
import { Board, OrdersContainer } from "../OrdersBoard/styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <span>{title}</span>
        <span>(1)</span>
      </header>


      <OrdersContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <strong>2 itens</strong>
        </button>
        <button type="button">
          <strong>Mesa 2</strong>
          <strong>2 itens</strong>
        </button>
      </OrdersContainer>
    </Board>
  )
}
