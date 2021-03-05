import constants from './constants'
const {SET_ACTOR, SET_ACTOR_ID, IS_FETCHING_ACTOR} = constants

const setIsFetchingActor = isFetching => ({
  type: IS_FETCHING_ACTOR,
  payload: isFetching,
})

const setActorId = actorId => ({
  type: SET_ACTOR_ID,
  payload: actorId,
})

const setActor = actor => ({
  type: SET_ACTOR,
  payload: actor,
})
