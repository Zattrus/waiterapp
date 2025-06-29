import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    '_id': '6372e48cbcd195b0d3d0f7f3',
    'table': '123',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1737419008488-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbcd195b0d3d0f7f4'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1737573266761-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6372e48cbcd195b0d3d0f7f5'
      },
    ],
  }
]
export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders.filter(order => order.status === 'WAITING')}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em Preparação"
        orders={orders.filter(order => order.status === 'IN_PRODUCTION')}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={orders.filter(order => order.status === 'DONE')}
      />
    </Container>
  )
}
