
import React from 'react';
import { Button, Box } from "@material-ui/core";

class gakiya extends React.Component {
    render() {
        return (
            <>
                <Box display="flex" justifyContent="space-between"
                sx={{
                    height: 100,
                    display: "flex",
                    padding: 8,
                    justifyContent: "space-around",
                    alignItems: "center"
                }}
            >
                <div layout="columns">
                <h1>ログイン</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="userid" />
                    <input placeholder="password" />
                    <div style={{ textAlign: "center" }}>
                        <Button variant="contained" color="primary" type="submit">ログイン</Button>
                    </div>
                </form>
                </div>
            </Box>
            </>
        );
    }
}

export default gakiya;
