import { types } from "../types/user.types"

const initialState = {
    name:"Hovha",
    userName:"Hovh+React",
    password:"React2013"
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case types.CHANGE_NAME:
    return { ...state, name:"Jorge" }

  default:
    return state
  }
}
