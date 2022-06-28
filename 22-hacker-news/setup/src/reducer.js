import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        totalPages: action.payload.totalPages,
      }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      }
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      }
    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let nextPage = state.page + 1
        if (nextPage > state.totalPages - 1) {
          nextPage = 0
        }
        return { ...state, page: nextPage }
      }

      if (action.payload === 'dec') {
        let prePage = state.page - 1
        if (prePage < 0) {
          prePage = state.totalPages - 1
        }
        return { ...state, page: prePage }
      }
      break

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
export default reducer
