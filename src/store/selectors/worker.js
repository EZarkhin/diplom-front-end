import { createSelector, createStructuredSelector } from 'reselect'

const getState = state => state.worker

export const getWorker = createSelector(getState, worker => worker.worker)
export const getWorkers = createSelector(getState, worker => worker.workers)


export const getFullUserData = createStructuredSelector({
  worker: getWorker,
  workers: getWorkers
})