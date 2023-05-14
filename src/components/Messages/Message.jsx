import React from 'react'

function Message({ type, msg }) {
    return (
        <p className={`
        ${type === 'error' ? 'text-rose-500' : 'text-slate-400'}
     py-6 text-center`}> {msg} </p>
    )
}

export default Message