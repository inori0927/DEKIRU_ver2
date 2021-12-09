import * as React from 'react';
import { Grid } from '@material-ui/core'
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import QuestionPage from './QuestionPage';
import QuestionAnsUser from './QuestionAnsUser'
import AnsUser from './AnsUser';

function QuestionUser(props) {
    const [title, setTitle] = React.useState(localStorage.getItem('title'));
    const [detail, setDetail] = React.useState(localStorage.getItem('detail'));
    return (
        <main>
            <div>
                <Grid container>
                    <Grid sm={2} />
                    <Grid lg={8} sm={8} spacing={10}>
                        <TextField
                            label="タイトル"
                            fullWidth
                            margin="normal"
                            value={title}

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
                            />
                        </Tooltip>
                    </Grid>
                </Grid>
            </div>
            <div>
                <QuestionAnsUser />
            </div>
            <div>
                <AnsUser />
            </div>
        </main>


    );
}

export default QuestionUser