
export type Ticket = {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    userType: string;
}

export type TicketLayoutProps = {
    tickets: Ticket[];
}