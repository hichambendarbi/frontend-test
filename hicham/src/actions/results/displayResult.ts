import { YOU_HAVE_WON } from '../types'
import store from '../../store'


// fetch result game
export const displayResult = (result: any) => {
  console.log("result", result)
  try {
    store.dispatch({
      type: YOU_HAVE_WON,
      payload: result,
    })
  } catch (err) {
    console.log(err)
  }
}
