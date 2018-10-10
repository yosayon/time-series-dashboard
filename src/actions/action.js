import moment from 'moment'

export const fetchTimeSeries = () => {
  const combinedData = {
    "bonding":{},
    "unbonding":{},
    "injections":{},
    "battery":{},
    "temperature":{},
    "errors":{},
  }
  return dispatch => {
    dispatch({ type: 'LOADING'})
    const bonding = fetch('http://assignment.quio.com/bonding' )
    .then(response => response.json())
    const unbonding = fetch('http://assignment.quio.com/unbonding')
    .then(response => response.json())
    const injections = fetch('http://assignment.quio.com/injections')
    .then(response => response.json())
    const battery = fetch('http://assignment.quio.com/battery')
    .then(response => response.json())
    const temperature = fetch('http://assignment.quio.com/temperature')
    .then(response => response.json())
    const errors = fetch('http://assignment.quio.com/errors')
    .then(response => response.json())
    return Promise.all([bonding, unbonding, injections, battery, temperature, errors])
    .then(function(values){
    combinedData["bonding"] = values[0]
    combinedData["unbonding"] = values[1]
    combinedData["injections"] = values[2]
    combinedData["battery"] = values[3]
    combinedData["temperature"] = values[4]
    combinedData["errors"] = values[5]
    })
    .then(() => formatDataPoints(combinedData, dispatch))
  }
}

export const formatDataPoints = (data, dispatch) => {
    const dataPoints = [], bonding = [], unbonding = [], injections = [], battery = [], temperature = [], errors = []
    let startDate = moment().subtract(7,'d').format('YYYY-MM-DD')
    for(let i = 0; i < data.bonding.length; i++){
      dataPoints.push({
        name: data["bonding"][i].date,
        bonding: Number(data["bonding"][i].value),
        unbonding: Number(data["unbonding"][i].value),
        injections: Number(data["injections"][i].value),
        battery: Number(data["battery"][i].value),
        temperature: Number(data["temperature"][i].value),
        errors: Number(data["errors"][i].value)
      })
      bonding.push({
        name: data["bonding"][i].date,
        bonding: Number(data["bonding"][i].value)
      })
      unbonding.push({
        name: data["unbonding"][i].date,
        unbonding: Number(data["unbonding"][i].value)
      })
      injections.push({
        name: data["injections"][i].date,
        injections: Number(data["injections"][i].value)
      })
      battery.push({
        name: data["battery"][i].date,
        battery: Number(data["battery"][i].value)
      })
      temperature.push({
        name: data["temperature"][i].date,
        temperature: Number(data["temperature"][i].value)
      })
      errors.push({
        name: data["errors"][i].date,
        errors: Number(data["errors"][i].value)
      })
    }

      let index = bonding.map(x => x.name).indexOf(startDate)

      return dispatch({
        type: 'ADD_COMBINED_DATA',
        seriesCombined: dataPoints,
        series: {
          bonding: bonding,
          unbonding: unbonding,
          injections: injections,
          battery: battery,
          temperature: temperature,
          errors: errors
        },
        filteredSeriesCombined: dataPoints.slice(index, dataPoints.length),
        selection: 'home',
        loading: false,
        hide: false,
        selected: ['bonding', 'unbonding', 'injections', 'battery', 'temperature', 'errors'],
        endDate: moment(),
        startDate: moment(startDate)
      })
}

export const updateSelection = (series) => {
  return dispatch => {
    dispatch({ type: 'LOADING' })
    dispatch({ type: 'UPDATE_SELECTION', selection: series})
  }
}

export const sortFilteredDataByDateRange = (seriesCombined, startDate, endDate, selected) => {
  return dispatch => {
    dispatch({ type: 'LOADING'})
    let start =  moment(startDate).format('YYYY-MM-DD')
    let end = moment(endDate).format('YYYY-MM-DD')
    let startIndex = seriesCombined.map(x => x.name).indexOf(start)
    let endIndex = seriesCombined.map(x => x.name).lastIndexOf(end)
    let newSeriesCombined = seriesCombined.slice(startIndex, endIndex + 1)
    dispatch({ type: 'UPDATE_DATE_RANGE', filteredSeriesCombined: newSeriesCombined, startDate: startDate, endDate: endDate})
    return newSeriesCombined
    }
  }

export const sortDataByDateRange = (series, startDate, endDate, selection) => {
  let start =  moment(startDate).format('YYYY-MM-DD')
  let end = moment(endDate).format('YYYY-MM-DD')
  let startIndex = series.map(x => x.name).indexOf(start)
  let endIndex = series.map(x => x.name).lastIndexOf(end)
  return series.slice(startIndex, endIndex + 1)
  }

export const updateSelected = (selection, isChecked, selected, filteredSeriesCombined, series, startDate, endDate) => {
  return dispatch => {
    dispatch({ type: 'LOADING'})
    if(isChecked){
      selected.push(selection)
      let newSeries = sortDataByDateRange(series, startDate, endDate, selection)
      let filteredSeries = mergeTimeSeriesData(filteredSeriesCombined, newSeries, selection)
      return [filteredSeries, selected]
      dispatch({ type: 'UPDATE_SELECTED', selected: selected, filteredSeriesCombined: filteredSeries})
    }else{
      filteredSeriesCombined.map(x => delete x[selection])
      let newSeries = filteredSeriesCombined
      selected.splice(selected.indexOf(selection), 1)
      return [newSeries,selected]
      dispatch({ type: 'UPDATE_SELECTED', selected: selected, filteredSeriesCombined: newSeries})
    }

    }
  }

export const mergeTimeSeriesData = (filteredSeriesCombined, newSeries, selection) => {
  for(let i = 0; i < newSeries.length; i++){
    filteredSeriesCombined[i][selection] = Number(newSeries[i][selection])
  }
  return filteredSeriesCombined
}
