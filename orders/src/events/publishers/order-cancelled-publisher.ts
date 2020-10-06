import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@alexytleetickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
