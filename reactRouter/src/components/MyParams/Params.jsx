import React from "react";
import { useParams } from "react-router-dom";

function Params() {
    const { myParams } = useParams();
    return (
        <div className="bg-green-700 text-white text-3xl p-4 text-center">Params : {myParams}</div>
    )
}

export default Params