import React from 'react'


import { AiFillCheckCircle, AiFillCloseCircle} from "react-icons/ai";
import {BiLoaderCircle} from "react-icons/bi"

const iconTypes = {
    'check': <AiFillCheckCircle />,
    'delete': <AiFillCloseCircle />,
    'loading': <BiLoaderCircle />
}

function TodoIcon({ iconType }) {
    return (
        <>
            {
                iconTypes[iconType]
            }
        </>
    )
}

export default TodoIcon