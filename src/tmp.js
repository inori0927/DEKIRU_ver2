
import React from 'react';
import { Link } from 'react-router-dom';

class page extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <Link to={`/itasaka.jsx`}>板坂</Link>
                <br/>
                <Link to={`/gakiya.jsx`}>我喜屋</Link>
                <br/>
                <Link to={`/takahasi.jsx`}>高橋</Link>
            </div>
        );
    }
}

export default page;
