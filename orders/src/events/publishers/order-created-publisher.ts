import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@alexytleetickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
