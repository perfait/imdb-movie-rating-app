import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {Segment, Loader, Header, Grid, Image, List, Label} from 'semantic-ui-react';
import { fetchMovieDetails } from "./query";



export const Movie = () => {
    const {id} = useParams<string>();

    if (!id){
        return <div>Invalid Movie ID</div>
    }


    const {data, isLoading } = useQuery({
        queryKey: ["movie"],
        queryFn: () => fetchMovieDetails(id),
    });


    if (isLoading) {
        return <Loader active />

    }



    return (
        <div style={{marginTop: 50}}>
        <Segment>
            <Header>{data.title}</Header>
            <Grid columns={2} divided textAlign="left" style={{marginTop:20}}>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <Image 
                                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                                size="medium"
                                centered
                            />
                        </div>
                    </Grid.Column>

                    <Grid.Column  width={10}>
                            <List>
                                <List.Item>
                                    <List.Header>Is The Movie For Adults: </List.Header>
                                    <List.Description>
                                    {data.adult ? "Yes" : "No"}
                                    </List.Description>
                                </List.Item>

                                <List.Item>
                                    <List.Header>Budget: </List.Header>
                                    <List.Description>
                                    {data.budget}
                                    </List.Description>
                                </List.Item>

                                <List.Item>
                                    <List.Header>Genre: </List.Header>
                                    <List.Description>
                                    {data.genres.map((genre: any) => (
                                    <Label key={genre.id}> {genre.name} </Label>
                                    ))}
                                    </List.Description>
                                </List.Item>

                                <List.Item>
                                    <List.Header>Popularity: </List.Header>
                                    <List.Description>
                                    {data.popularity}
                                    </List.Description>
                                </List.Item>

                                <List.Item>
                                    <List.Header>Production Companies: </List.Header>
                                    <List.Description>
                                    {data.production_companies
                                    .map((company: any) => company.name)
                                    .join(", ")}
                                    </List.Description>
                                </List.Item>

                                <List.Item>
                                    <List.Header>Release Date: </List.Header>
                                    <List.Description>
                                    {data.release_date}
                                    </List.Description>
                                </List.Item>

                                <List.Item>
                                    <List.Header>Revenue: </List.Header>
                                    <List.Description>
                                    {data.revenue}
                                    </List.Description>
                                </List.Item>

                                <List.Item>
                                    <List.Header>Runtime: </List.Header>
                                    <List.Description>
                                    {data.runtime}
                                    </List.Description>
                                </List.Item>

                                <List.Item>
                                    <List.Header>Vote Average: </List.Header>
                                    <List.Description>
                                    {data.vote_average}
                                    </List.Description>
                                </List.Item>

                                <List.Item>
                                    <List.Header>Original Language: </List.Header>
                                    <List.Description>
                                    {data.original_language}
                                    </List.Description>
                                </List.Item>
                            </List>
                    </Grid.Column>
                
                </Grid.Row> 

            </Grid>
        </Segment>
        </div>
    );
    
};