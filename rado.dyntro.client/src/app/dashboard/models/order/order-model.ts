import { OrderStatus, OrderPriority, OrderCategory } from '../../Enums/OrderEnums';

export interface Order {
  id?: number | null; 
  topic: string | null;
  firstName: string | null;
  lastName: string | null;
  status: OrderStatus | null;
  category: OrderCategory | null;
  priority: OrderPriority | null;
  date?: Date;
}
