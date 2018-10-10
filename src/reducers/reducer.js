export default function timeSeries(state = {
  loading: false,
  open: false,
  hide: false,
  selection: 'home',
  error: false,
  errorMessage: '',
  seriesCombined: [],
  series: {},
  selected: [],
  endDate: '',
  startDate: '',
  startIndex: '',
  endIndex: '',
  filteredSeriesCombined: [],
}, action){

  switch(action.type){
    case 'LOADING':
      console.log("loading data....")
      return {...state, loading: true, hide: true}
    case 'ADD_COMBINED_DATA':
      console.log("Loading Complete and Data successfully Added...")
      return {
        ...state,
        loading: action.loading,
        hide: action.hide,
        selection: action.selection,
        series: action.series,
        seriesCombined: action.seriesCombined,
        filteredSeriesCombined: action.filteredSeriesCombined,
        selected: action.selected,
        startDate: action.startDate,
        endDate: action.endDate
    }
    case 'UPDATE_SELECTION':
      return {
        ...state,
        selection: action.selection
      }
    case 'UPDATE_DATE_RANGE':
      return {
        ...state,
        filteredSeriesCombined: action.filteredSeriesCombined,
        endDate: action.endDate,
        startDate: action.startDate
      }
    case 'UPDATE_SELECTED':
    console.log("Updating selected data to be ", action.selected)
      return {
        ...state,
        selected: action.selected,
        filteredSeriesCombined: action.filteredSeriesCombined,
        loading: action.loading
      }
    default:
      return state
  }
}
