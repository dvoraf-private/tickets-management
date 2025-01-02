import { ComponentType } from 'react';
import LocalTickets from './components/tickets/localTickets';
import TouristTickets from './components/tickets/touristTickets';
import { TicketLayoutProps } from './types';

interface SegmentConfig {
    [userType: string]: ComponentType<TicketLayoutProps>;
}

export const segmentConfig: SegmentConfig = {
    local: LocalTickets,
    tourist: TouristTickets,
};