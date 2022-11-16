import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {Videos} from "./";
import {fetchFromAPI} from "../utils/fetchFromAPI";

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams()
    console.log(videos)

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: '2'}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
                Search Results For: <span style={{color: '#F31503'}}>{searchTerm}</span> Videos
            </Typography>
            <Videos videos={videos}/>
        </Box>
    );
};

export default SearchFeed;