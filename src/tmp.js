
import React from 'react';

//materialUIのボタンを使う
import { Button,Box } from "@material-ui/core";

import { Link } from 'react-router-dom';

class page extends React.Component {
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
                <Button variant="contained" color="primary" component={Link} to="/itasaka.jsx" >板坂</Button>
                <Button variant="contained" color="primary" component={Link} to="/gakiya.jsx" >我喜屋</Button>
                <Button variant="contained" color="primary" component={Link} to="/takahashi.jsx" >高橋</Button>
                <br/>
            </Box>
            <p>開発後にこのページは削除想定</p>
            </>
        );
    };
}

export default page;
