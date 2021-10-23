
import React from 'react';
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
            </Box>
            <p>開発後にこのページは削除想定</p>
            <pre>{`
            ・DEKIRUメイン画面★板坂
                ⇨App.jsx板坂作業中
            ・質問ページ★板坂※コンポーネント作成
            ・Video通話★我喜屋※コンポーネント作成
            ・質問一★板坂※コンポーネント作成
            ・質問の詳細★高橋※コンポーネント作成
                ⇨質問の詳表示
                要素：カテゴリー、タイトル、詳細
                ⇨回答できる人がオンラインかオフライン判断できる
            `}</pre>
            </>
        );
    };
}

export default page;
