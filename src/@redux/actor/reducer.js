import constants from './constants'
import initialState from './initialState'

const {SET_ACTOR, SET_ACTOR_ID} = constants

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTOR:
      return {...state, actor: action.payload}
    case SET_ACTOR_ID:
      return {...state, actorId: action.payload}
    default:
      return state
  }
}

export default reducer
