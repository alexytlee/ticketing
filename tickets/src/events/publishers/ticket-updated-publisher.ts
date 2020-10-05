import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@alexytleetickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
