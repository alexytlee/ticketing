import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@alexytleetickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
