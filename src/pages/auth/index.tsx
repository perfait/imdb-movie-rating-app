import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from '@tanstack/react-query';
import { mutationLogin } from './mutation';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationKey: ["login"],
        mutationFn: mutationLogin,
        onSuccess: (data) => {
            localStorage.setItem("guest_session_id", data.guest_session_id);
            navigate("/");
        },
    });

    const handleLogin = async () => {
        mutation.mutate();
    };

    return (
        <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="violet" textAlign="center">
                    Welcome! Login by registering as guest below.
                </Header>

                <Form size="large">
                    <Segment>
                        <Button color="violet" size="large" fluid onClick={handleLogin}>
                            Login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};
