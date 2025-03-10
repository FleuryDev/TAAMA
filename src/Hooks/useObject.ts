import { useReducer } from 'react';

import { CommentInterface } from '../lib/interfaces/CommentInterface';

const enum _ {
    INDEX = 1
}

function ObjectReducer(state, action) {

    if (state.type === _.INDEX) {

    }
    return state
}
export default function useObject({ object }: { object: Array<CommentInterface> | any }) {
    // const [Object, setComment] = useState()

    const [Object, dispatch] = useReducer(ObjectReducer, object)
    return [Object, dispatch]
}