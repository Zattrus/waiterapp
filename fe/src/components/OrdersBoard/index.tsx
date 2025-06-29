import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "../OrdersBoard/styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);


  function handleOpenModal(order: Order) {
    setModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>

      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <span>{title}</span>
        <span>({orders.length})</span>
      </header>


      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  )
}
