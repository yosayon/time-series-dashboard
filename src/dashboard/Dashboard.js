import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles'
import NavBar from './NavBar'
import HomePage from './HomePage'
import Loader from '../loader'
import ErrorPage from '../errorPage'
import { fetchTimeSeries, formatDataPoints, updateSelection, sortDataByDateRange, updateSelected, sortFilteredDataByDateRange } from '../actions/index'

class Dashboard extends Component {
  state = {
    loading: false,
    open: false,
    hide: this.props.hide,
    error: this.props.error,
    selection: this.props.selection,
    seriesCombined: this.props.seriesCombined,
    series: this.props.series,
    filteredSeriesCombined: this.props.filteredSeriesCombined,
    selected: this.props.selected,
    startDate: this.props.startDate,
    endDate: this.props.endDate
  }

  componentDidMount = () => {
    this.setState({...this.state, loading: true})
    try{
      this.props.fetchTimeSeries()
      .then(response => {
        this.setState({
          ...this.state,
          selection: response.selection,
          loading: response.loading,
          hide: response.hide,
          series: response.series,
          seriesCombined: response.seriesCombined,
          filteredSeriesCombined: response.filteredSeriesCombined,
          selected: response.selected,
          startDate: response.startDate,
          endDate: response.endDate
        })
      })
    } catch(err){
      this.setState({...this.state, loading: false, open: false, hide: true, error: true})
    }
  }


  handleDashChange = (e) => {
    this.props.updateSelection(e)
    this.setState({
      ...this.state,
      selection: e
    })
  }

  handleErrors = (errors) => {
    this.setState({...this.state, error: true, errorMessage: errors, open: false, hide: true})
  }

  handleLoadingOn = (on) => {
    this.setState({...this.state, loading: on, hide: true, open: false})
  }

  handleLoadingOff = (off) => {
    this.setState({...this.state, loading: off, hide: false, open: true})
  }

  handleMenuOpen = () => {
    this.setState({ open: true })
  }

  handleMenuClose = () => {
    this.setState({ open: false })
  }

  handleDateChange = () => {
    this.setState({ ...this.state, loading: true})
    let newSeries = this.props.sortFilteredDataByDateRange(this.state.seriesCombined, this.state.startDate, this.state.endDate, this.state.selected)
    this.setState({ ...this.state, loading: false, filteredSeriesCombined: newSeries})
  }

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate
    endDate = endDate || this.state.endDate
    if (startDate.isAfter(endDate)){
      endDate = startDate
    }
    this.setState({ startDate, endDate })
  }

  render() {
    const loading = this.props.loading ? {} : { display: 'none'}
    const error = this.props.error ? {} : { display: 'none'}
    const hide = this.props.hide? { display: 'none'} : {}
    const { classes } = this.props

    return (
      <React.Fragment>
          <div className="loader-container" style={loading}>
            <Loader />
          </div>
          <div className="loader-container" style={error}>
            <ErrorPage errorMessage={this.props.errorMessage}/>
          </div>

          <div id="dashboard-container" style={hide}>
            <NavBar
              classes={classes}
              isOpen={this.props.open}
              handleMenuOpen={this.handleMenuOpen}
              handleMenuClose={this.handleMenuClose}
              handleDashChange={this.handleDashChange}
              selection={this.props.selection}
            />

            <HomePage
              classes={classes}
              series={this.state.series}
              selection={this.state.selection}
              sortDataByDateRange={this.state.sortDataByDateRange}
              filteredSeriesCombined={this.state.filteredSeriesCombined}
              updateSelected={this.props.updateSelected}
              selected={this.state.selected}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              sortFilteredDataByDateRange={this.props.sortFilteredDataByDateRange}
              seriesCombined={this.state.seriesCombined}
              handleDateChange={this.handleDateChange}
              handleChange={this.handleChange}
            />
          </div>

      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTimeSeries,
    formatDataPoints,
    updateSelection,
    sortDataByDateRange,
    updateSelected,
    sortFilteredDataByDateRange
  }, dispatch)
}

const mapStateToProps = state => {
  return ({
    loading: state.loading,
    open: state.open,
    hide: state.hide,
    selection: state.selection,
    error: state.error,
    errorMessage: state.errorMessage,
    seriesCombined: state.seriesCombined,
    series: state.series,
    selected: state.selected,
    endDate: state.endDate,
    startDate: state.startDate,
    filteredSeriesCombined: state.filteredSeriesCombined
  })
}

export default withStyles(styles)(connect(
  mapStateToProps, mapDispatchToProps)(Dashboard))
