import Skill from 'domains/Skill'
import * as types from 'constants/ActionTypes'

interface State {
  selected: Skill
}

interface Action {
  type: string
  selected?: Skill
}

const initialState = {
  selected: null,
}

export default function skill(state: State = initialState, action: Action) {
  switch (action.type) {
  case types.SELECT:
    state.selected = action.selected
    return state
  default:
    return state
  }
}
