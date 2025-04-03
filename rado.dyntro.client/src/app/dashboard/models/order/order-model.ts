import { OrderStatus, OrderPriority, OrderCategory } from '../../Enums/OrderEnums';

export interface Order {
  id: number;
  status: OrderStatus;
  topic: string;
  firstName: string;
  lastName: string;
  category: OrderCategory;
  priority: OrderPriority;
  date: Date;
}
