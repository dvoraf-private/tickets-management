import React, {useState} from "react";
import {TicketLayoutProps} from "../../../types";
import {Ticket} from "../../../types";
// @ts-ignore
import classes from './touristTickets.module.scss';
import {List, ListItem, ListItemText, Typography, ListItemAvatar, Avatar} from "@mui/material";
import Divider from '@mui/material/Divider'

import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TouristTickets: React.FC<TicketLayoutProps> = ({ tickets }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggleExpand = (index: any) => {
        setExpandedIndex(expandedIndex !== index ? index : null);
    };
    // <>
    //     <div>
    //         {tickets.map((ticket: Ticket) => (
    //             <div className={classes.wrapper}>
    //                 <img src={''}/>
    //                 <div className={classes.title}>{`${ticket.title}`}</div>
    //                 <div>{`At ${ticket.date}`}</div>
    //                 <div className={classes.divider}></div>
    //             </div>
    //         ))}/
    //     </div>
    // </>

return (
    <div className={classes.mainWrapper}>
        <List>
            {tickets.map((ticket, index) => (
                <React.Fragment key={index}>
                    <ListItem alignItems="flex-start"
                              onClick={() => handleToggleExpand(index)}>
                        <ListItemAvatar>
                            <Avatar alt={ticket.title} src={`https://${ticket.title}`} />
                        </ListItemAvatar>
                        <ListItemText primary={ticket.title} secondary={ticket.description} />
                        <IconButton
                            edge="end"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleToggleExpand(index);
                            }}
                            aria-expanded={expandedIndex === index}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon
                                style={{
                                    transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s',
                                }}
                            />
                        </IconButton>
                    </ListItem>
                    <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <>
                                        <Typography variant="body2" color="text.primary">
                                            {`Date: ${new Date(ticket.date).toLocaleString()}`}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Location: {ticket.location}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    </Collapse>
                    {index < tickets.length - 1 && <Divider component="li" />}
                </React.Fragment>
            ))}
        </List>
        {/*<List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>        {tickets.map((ticket: Ticket) => (*/}

        {/*            <ListItem alignItems="flex-start" divider={true}>*/}
        {/*                /!*<ListItemAvatar>*!/*/}
        {/*                /!*    <Avatar alt={ticket.title} src={`assets/images/${ticket.title}`}/>*!/*/}
        {/*                /!*</ListItemAvatar>*!/*/}
        {/*                <ListItemText*/}
        {/*                    primary={ticket.title}*/}
        {/*                    secondary={*/}
        {/*                        <>*/}
        {/*                            <Typography*/}
        {/*                                component="span"*/}
        {/*                                variant="body2"*/}
        {/*                                sx={{color: 'text.primary', display: 'inline'}}*/}
        {/*                            >*/}
        {/*                                {ticket.description}*/}
        {/*                            </Typography>*/}
        {/*                        </>*/}
        {/*                    }*/}
        {/*                />*/}
        {/*            </ListItem>*/}
        {/*        ))}*/}

        {/*    </List>*/}
    </div>)
    };
export default TouristTickets


