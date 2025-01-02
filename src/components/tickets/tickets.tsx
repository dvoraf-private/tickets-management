import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import {Typography, Button} from "@mui/material";
import {Ticket} from "../../types";
// @ts-ignore
import classes from './tickets.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import {getTickets} from "../../api/ticketsApi";
import {segmentConfig} from "../../config";


const Tickets: React.FC = () => {
    const [moreTickets, setMoreTickets] = useState<Ticket[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const limit = 10; // Number of tickets to fetch per page
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userType = params.get('userType') || '';
    const SegmentComponent = segmentConfig[userType];


    const loadMoreTickets = async () => {
        try {
            const {tickets} = await getTickets(page, limit, userType);
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
        userType && loadMoreTickets();
    }, []);

    const handleButtonClick = (type: string) => {
        window.location.href = `?userType=${type}`;
    };

    return (
        userType ? (
            <div className={classes.ticketsWrapper}>
                <div className={classes.adjustableWrapper}>
                    <InfiniteScroll
                        dataLength={moreTickets.length}
                        next={loadMoreTickets}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={<p><b>No more tickets to show</b></p>}
                    >
                        <SegmentComponent tickets={moreTickets} />
                    </InfiniteScroll>
                </div>
            </div>
        ) : (
            <div className={classes.wrapper}>
                <Typography variant="h5"  component="h2" gutterBottom>
                    Event Ticket Manager
                </Typography>
                <div className={classes.buttons}>
                    <Button variant="outlined" color={'inherit'} onClick={() => handleButtonClick('local')}>Local Tickets</Button>
                    <Button variant="outlined" color={'inherit'} onClick={() => handleButtonClick('tourist')}>Tourist Tickets</Button>
                </div>
            </div>

        )
    );
}

export default Tickets;