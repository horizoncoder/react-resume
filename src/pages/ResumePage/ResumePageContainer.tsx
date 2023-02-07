import React from 'react';
import {useParams} from "react-router-dom";
export const ResumePageContainer = () => {
const {username} = useParams()
    return (
        <div >
            <h1>
                {username}
            </h1>

</div>

);
}

