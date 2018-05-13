import { createSelector, createStructuredSelector } from 'reselect'

const getState = state => state.unit

export const getUnit = createSelector(getState, unit => unit.unit)
export const getUnits = createSelector(getState, unit => unit.units)

export const getFullUnitData = createStructuredSelector({
  unit: getUnit,
  units: getUnits
})
