import { Container, Header, Menu, Segment, Loader } from 'semantic-ui-react';
import { DisplayType } from '../home';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRatedMovies, fetchRatedTvShows } from './query';
import { ColumnDisplay } from '../home/column-display';
import { Navigate } from 'react-router-dom';

export const Rated = () => {
    const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

    const { data: ratedMovies, isLoading: isLoadingRatedMovies, error: errorRatedMovies } = useQuery({
        queryKey: ["ratedMovies"],
        queryFn: fetchRatedMovies,
    });

    const { data: ratedTvShows, isLoading: isLoadingRatedTvShows, error: errorRatedTvShows } = useQuery({
        queryKey: ["ratedTvShows"],
        queryFn: fetchRatedTvShows,
    });

    if (isLoadingRatedMovies || isLoadingRatedTvShows) {
        return <Loader active />;
    }

    if (errorRatedMovies || errorRatedTvShows) {
        return <div>Error fetching data</div>;
    }

    const ratedMoviesResults = ratedMovies?.results ?? [];
    const ratedTvShowsResults = ratedTvShows?.results ?? [];

    if (localStorage.getItem("guest_session_id") === null){
        return <Navigate to="/auth" />
    }
    

    return (
        <Container style={{ marginTop: 50 }}>
            <Menu pointing secondary>
                <Menu.Item 
                    name="Movies" 
                    active={activeTabs === DisplayType.Movies} 
                    onClick={() => setActiveTabs(DisplayType.Movies)} 
                />
                <Menu.Item 
                    name="TV Shows" 
                    active={activeTabs === DisplayType.TvShows} 
                    onClick={() => setActiveTabs(DisplayType.TvShows)} 
                />
            </Menu>

            <Segment>
                {activeTabs === DisplayType.Movies ? (
                    <div>
                        <Header as={"h2"}>Rated Movies</Header>
                        {ratedMoviesResults.length > 0 ? (
                            <ColumnDisplay
                                data={ratedMoviesResults}
                                displayType={DisplayType.Movies}
                                isRated={true}
                            />
                        ) : (
                            <div>No rated movies available.</div>
                        )}
                    </div>
                ) : (
                    <div>
                        <Header as={"h2"}>Rated TV Shows</Header>
                        {ratedTvShowsResults.length > 0 ? (
                            <ColumnDisplay
                                data={ratedTvShowsResults}
                                displayType={DisplayType.TvShows}
                                isRated={true}
                            />
                        ) : (
                            <div>No rated TV shows available.</div>
                        )}
                    </div>
                )}
            </Segment>
        </Container>
    );
};
