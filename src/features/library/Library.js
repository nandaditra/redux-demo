import React from "react"
import { useSelector, useDispatch} from 'react-redux'
import { addData } from "./librarySlice"

export function Library() {
    const lib = useSelector(state => state.library.data)
    const dispatch = useDispatch() 

    return (
        <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(addData())}
          >
            Increment
          </button>
          <span>{lib}</span>
        </div>
      </div>
    )
}
