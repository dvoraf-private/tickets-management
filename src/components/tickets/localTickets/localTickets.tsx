import React from "react";
import {TicketLayoutProps} from "../../../types";
import {Grid, Card, CardContent, Typography} from "@mui/material";

const LocalTickets: React.FC<TicketLayoutProps> = ({ tickets }) => (
    <>
        <Grid container spacing={2}>
            {tickets.map((ticket, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">{ticket.title}</Typography>
                            <Typography variant="body2" component="p">
                                {ticket.description}
                            </Typography>
                            <Typography color="textSecondary">{`Date: ${new Date(ticket.date).toLocaleString()}`}</Typography>
                            <Typography color="textSecondary">{`Location: ${ticket.location}`}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </>
);

export default LocalTickets