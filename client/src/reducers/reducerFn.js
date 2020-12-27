export const initialState = {};

export const reducer = (state, action) => {
  if (action.type === 'READ') {
    return {
      ...state,
      current: action.payload.items,
      task: 'read',
    };
  }
  if (action.type === 'DELETED') {
    return {
      ...state,
      current: null,
      task: 'deleted',
    };
  }
  if (action.type === 'ADDING') {
    return {
      ...state,
      current: null,
      task: 'adding',
      add_to: action.payload,
    };
  }
  if (action.type === 'ADDED') {
    return {
      ...state,
      current: null,
      task: 'added',
    };
  }
  if (action.type === 'EDITING') {
    return {
      ...state,
      task: 'editing',
    };
  }
  if (action.type === 'UPDATED') {
    return {
      ...state,
      task: 'updated',
    };
  }
  if (action.type === 'ACTIVE_GROUP') {
    return {
      ...state,
      active_group: action.payload,
    };
  }
  if (action.type === 'NO_TASK') {
    return {
      ...state,
      task: null,
    };
  }
  return state;
};
