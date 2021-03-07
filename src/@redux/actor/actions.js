import constants from './constants'
const {SET_ACTOR, SET_ACTOR_ID, SET_SEARCH} = constants

const setActorId = actorId => ({
  type: SET_ACTOR_ID,
  payload: actorId,
})

const setActor = actor => ({
  type: SET_ACTOR,
  payload: actor,
})

const setSearch = actor => ({
  type: SET_SEARCH,
  payload: actor,
})

export {setActor, setActorId, setSearch}
