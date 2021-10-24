import { Grid } from '@material-ui/core'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Basic(props) {

    const [category, setCategory] = React.useState(localStorage.getItem('category'));

    const handleChange = (event) => {
      setCategory(event.target.value);
      localStorage.setItem('category', event.target.value);

    };

    return (
        <Grid container>
            <Grid sm={2} />
            <Grid lg={8} sm={8} spacing={10}>
                <InputLabel id="demo-simple-select-label">カテゴリ</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="カテゴリー"
                    onChange={handleChange}
                >
                    <MenuItem value={'agedCare'}>介護系</MenuItem>
                    <MenuItem value={'childCare'}>育児系</MenuItem>
                </Select>
            </Grid>
        </Grid>
    )
}

export default Basic