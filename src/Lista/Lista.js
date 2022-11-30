import React from "react";

function Lista(props){



    return(
        <React.Fragment>
        <div className="titulo">
        <h1>Mi lista</h1>
        </div>
        {props.children}
        </React.Fragment>

    );
    }

    export default Lista;