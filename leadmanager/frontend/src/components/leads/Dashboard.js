import React, {Fragment} from "react";
import Form from './Form';
import Leads from './Leads';

export default function Dashboard() {
    return (
        <Fragment>
                <div className="row ">
                    <div className="col-4">
                        <Form/>
                    </div>
                    <div className="col-8">
                       <Leads/>
                    </div>
                </div>
        </Fragment>
    );
};
