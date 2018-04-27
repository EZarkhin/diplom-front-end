import { createSelector, createStructuredSelector } from 'reselect'

const getState = state => state.user

export const getUser = createSelector(getState, user => user.user)
export const getUsers = createSelector(getState, user => user.users)

export const getFullUserData = createStructuredSelector({
  user: getUser,
  users: getUsers
})