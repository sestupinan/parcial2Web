import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import useData from "./useData";

function Detail(props) {
    const [data] = useData();
    const test = props.test;

    return(
        <div>
            <Card>

            </Card>
        </div>
    );


};

export default Detail;