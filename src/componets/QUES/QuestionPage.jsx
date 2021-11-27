import * as React from 'react';
import { Grid } from '@material-ui/core'
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';


function QuestionPage(props) {

    const [title, setTitle] = React.useState(localStorage.getItem('title'));
    const [detail, setDetail] = React.useState(localStorage.getItem('detail'));

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        localStorage.setItem('title', event.target.value);
    };
    const handleDetailChange = (event) => {
        setDetail(event.target.value);
        localStorage.setItem('detail', event.target.value);
    };
    return (
        <Grid container>
            <Grid sm={2} />
            <Grid lg={8} sm={8} spacing={10}>
                <TextField
                    label="タイトル"
                    fullWidth
                    margin="normal"
                    value={title}
                    placeholder="【至急】〇〇〇..."
                    onChange={handleTitleChange}
                />
                {/* TODO/音声認識ソフトを追加 */}
                <Tooltip
                    title="自由に記入することができます"
                    placement="top-start"
                    arrow
                >
                    <TextField
                        label="詳細"
                        fullWidth
                        margin="normal"
                        rows={8}
                        multiline
                        variant="outlined"
                        value={detail}
                        onChange={handleDetailChange}
                    />
                </Tooltip>
                <Grid container spacing={3} alignItems="center" justify="center" margin="5px">
                    <Button
                        variant="secondary"
                        style={{ margin: "5px", fontSize: "20px", padding: "0" }}
                    >
                        解答DEKIRU
                    </Button>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default QuestionPage