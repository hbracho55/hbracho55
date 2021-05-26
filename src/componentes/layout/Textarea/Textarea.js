import React from 'react'

function Textarea(props) {
    return (
        <div>
            <div class="form-floating mb-3">
                <textarea class="form-control form-control-sm" placeholder={props.placeholder} id={props.id} style={props.style} {...props.required} ></textarea>
                <label for="floatingInput col-form-label-sm">{props.label}</label>
            </div>
        </div>
    )
}

export default Textarea
