import React from "react";
import {Ticket, TicketLayoutProps} from "../../../types";
import {Grid} from "@mui/material";

const GridLayout: React.FC<TicketLayoutProps> = ({ tickets }) => (
    <>
        <h1>{`${tickets[0]?.userType} Tickets`}</h1>
        {tickets.map((ticket: Ticket) => (
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <h2>{ticket.title}</h2>
                </Grid>
                <Grid item xs={4}>
                    <p>{ticket.description}</p>
                </Grid>
                <Grid item xs={6}>
                    <h2>{ticket.location}</h2>
                </Grid>
                <Grid item xs={6}>
                    <p>{ticket.date}</p>
                </Grid>
            </Grid>
        ))}
    </>
);

export default GridLayout