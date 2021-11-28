import * as React from 'react';
import { Grid } from '@material-ui/core'
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import QuestionPage from './QuestionPage';
import QuestionAnsUser from './QuestionAnsUser'

function QuestionUser(props) {

    return (
        <main>
            <div>
                <QuestionPage />
            </div>
            <div>
                <QuestionAnsUser />
            </div>
        </main>


    );
}

export default QuestionUser