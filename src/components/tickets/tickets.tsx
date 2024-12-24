import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import {List, ListItem, ListItemText, Typography} from "@mui/material";
import {Ticket} from "../../types";
import InfiniteScroll from 'react-infinite-scroll-component';
import {getTickets} from "../../api/ticketsApi";
import ListLayout from "./listLayout/listLayout";
import GridLayout from "./gridLayout/gridLayout";


const Tickets: React.FC = () => {
    const [moreTickets, setMoreTickets] = useState<Ticket[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const limit = 10; // Number of tickets to fetch per page
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userType = params.get('userType');
    const ticketLayout = {
        local: <ListLayout tickets={moreTickets}/>,
        tourist: <GridLayout tickets={moreTickets}/>,
    }

    const loadMoreTickets = async () => {
        try {
            const {tickets} = await getTickets(page, limit, userType);
            console.log('---newTickets---', tickets)
            setMoreTickets((prevTickets) => [...prevTickets, ...tickets]);
            setPage((prevPage) => prevPage + 1);
            if (tickets.length < limit) {
                setHasMore(false);
            }
        } catch (err) {
            console.error("Failed to load tickets:", err);
            setHasMore(false);
        }
    };

    useEffect(() => {
        loadMoreTickets();
    }, []);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Event Ticket Manager
                </Typography>
            <InfiniteScroll
                dataLength={moreTickets.length}
                next={loadMoreTickets}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={<p><b>No more tickets to show</b></p>}
            >
                {
                    React.cloneElement(ticketLayout[userType as keyof typeof ticketLayout], { tickets: moreTickets })
                }
                {/*{*/}
                {/*    ticketLayout[userType as keyof typeof ticketLayout]*/}
                {/*}*/}
                {/*<List>*/}
                {/*    {moreTickets.map((ticket, index) => (*/}
                {/*        <ListItem key={index}>*/}
                {/*            <ListItemText primary={`${ticket.title} - ${ticket.description} `} />*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
            </InfiniteScroll>
        </div>
    );
}

export default Tickets;