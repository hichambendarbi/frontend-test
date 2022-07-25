import { YOU_HAVE_WON } from '../actions/types'

const initialState = {
  result: {},
}

export default function (state = initialState, action: any) {
  const { type, payload }: any = action
  switch (type) {
    case YOU_HAVE_WON:
      return {
        ...state,
        result: payload,
      }
    default:
      return state
  }
}
