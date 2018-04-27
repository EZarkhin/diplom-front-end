import { createSelector, createStructuredSelector } from 'reselect'

const getState = state => state.type

export const getType = createSelector(getState, type => type.type)
export const getTypes = createSelector(getState, type => type.types)


export const getFullUserData = createStructuredSelector({
  type: getType,
  types: getTypes
})