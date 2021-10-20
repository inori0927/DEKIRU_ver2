import { Grid } from '@material-ui/core'
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';

function Optional(props) {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            multilineText: "",
        },
    });
    const onSubmit = (action) => {
        if(action === 'back') {
            props.handleBack();
        } else if (action === 'next') {
            props.handleNext();
        }
    };
    return (
        <Grid container>
            <Grid sm={2}/>
            <Grid lg={8} sm={8} spacing={10}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                        control={control}
                        name="textBox"
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="タイトル"
                                fullWidth
                                margin="normal"
                                placeholder="【至急】〇〇〇..."
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="multilineText"
                        render={({ field }) => (
                            <Tooltip
                                title="自由に記入することができます"
                                placement="top-start"
                                arrow
                            >
                                <TextField
                                    {...field}
                                    label="詳細"
                                    fullWidth
                                    margin="normal"
                                    rows={8}
                                    multiline
                                    variant="outlined"
                                    placeholder="
                                    - 聞きたいこと（質問の概要）&#13;
                                    - 目的（それを聞いてあなたは何がしたいのか）&#13;
                                    - 状況（あなたが今どのような状況で、なぜ悩んでいるのか）&#13;
                                    - 何でどこまで調べて何がわかったか（自分でやった事）&#13;
                                    - あなたの考え（自分としてはどうするべきと判断しているのか）&#13;
                                    ※ご自由に記載ください"
                                />
                            </Tooltip>
                        )}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => onSubmit("back")}
                    >
                        戻る
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => onSubmit("next")}
                    >
                        次へ
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Optional