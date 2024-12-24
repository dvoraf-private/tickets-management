import React from "react";
import {TicketLayoutProps} from "../../../types";
import {Ticket} from "../../../types";
import {List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography} from "@mui/material";

const ListLayout: React.FC<TicketLayoutProps> = ({ tickets }) => (
    <>
        <h1>{`${tickets[0]?.userType} Tickets`}</h1>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>        {tickets.map((ticket: Ticket) => (

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={ticket.title} src={`assets/images/${ticket.title}`}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={ticket.title}
                            secondary={
                                <>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{color: 'text.primary', display: 'inline'}}
                                    >
                                        {ticket.description}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))}

            </List>
    </>
);
export default ListLayout


