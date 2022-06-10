import React from 'react';
import Collapsible from 'react-collapsible';

const Lev32Props = (props) => {
    return (
        <div>
            <Collapsible trigger={props.question} className="Collapsible">
                <p className="pAkkordeon">
                    {props.answer}
                </p>
            </Collapsible>
        </div>
    );
}

export default Lev32Props;