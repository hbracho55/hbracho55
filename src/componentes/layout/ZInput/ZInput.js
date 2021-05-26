import React from 'react'

function ZInput(props) {

    return (
        <div>
            <input type={props.type} className="form-control form-control-sm" placeholder={props.placeholder} {...props.register}/>
            <label for="floatingInput col-form-label-sm">{props.label}</label>     
        </div>
    )
}

export default ZInput
