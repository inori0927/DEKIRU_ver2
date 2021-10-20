import { Grid } from '@material-ui/core'
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Basic(props) {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            checkBox: false,
            textBox: "",
            pullDown: "",
        },
    });
    const onSubmit = () => {
        props.handleNext();
    };
    return (
        <Grid container>
            <Grid sm={2} />
            <Grid lg={8} sm={8} spacing={10}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="checkBox"
                        render={({ field: { value, onChange } }) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={value}
                                        onChange={onChange}
                                        color='primary'
                                    />
                                }
                                label="チェックボックス"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="pullDown"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="プルダウンリスト"
                                fullWidth
                                margin="normal"
                                id="select"
                                select
                            >
                                <MenuItem value="one">選択肢1</MenuItem>
                                <MenuItem value="two">選択肢2</MenuItem>
                                <MenuItem value="three">選択肢3</MenuItem>
                            </TextField>
                        )}
                    />
                </form>
            </Grid>
        </Grid>
    )
}

export default Basic