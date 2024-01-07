import React from 'react'

function ColorChange() {

    let style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '79vh',
        flexDirection: 'column',
        fontSize: '1.5rem',
        fontWeight: '700'
    }

    let changecolor = (event) => {
        document.body.style.backgroundColor = event.target.value;
    }

    return (
        <div style={style}>
            <input type="color" onChange={changecolor} />
            <label className='text-light mt-4'>Color Picker</label>
        </div>
    )
}

export default ColorChange
