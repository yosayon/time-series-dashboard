import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import SimpleLineChart from './SimpleLineChart'
import ComplexLineChart from './ComplexLineChart'
import DatePicker from 'react-datepicker'
import CalendarContainer from 'react-datepicker'
import moment from 'moment'
import './style.css'

class HomePage extends Component{
  state = {
    legend: {
      bonding: "#7114CD",
      unbonding: "#CD14C2",
      injections: "#14CD17",
      battery: "#CD2214",
      temperature: "#40E5E0",
      errors: "#E5E540"
      }
  }

  handleChangeStart = (startDate) => this.props.handleChange({ startDate })

  handleChangeEnd = (endDate) => this.props.handleChange({ endDate })


  render(){
    const { classes, selection, filteredSeriesCombined, updateSelected, selected, series, startDate, endDate, handleDateChange, handleChange } = this.props

    return(
     <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Typography variant="display1" gutterBottom component="h2">
          {selection}
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
            <div id="homepage-container">
              <div id="date-picker-container">
                <DatePicker
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={this.handleChangeStart}
                />
                <DatePicker
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  onChange={this.handleChangeEnd}
                />
                <button onClick={handleDateChange}>
                  GO
                </button>
              </div>
              {selection === 'home' ?
              (<ComplexLineChart
                selected={selected}
                colors={this.state.legend}
                filteredSeriesCombined={filteredSeriesCombined}
                updateSelected={updateSelected}
                series={series}
                />)
                :
                (<SimpleLineChart
                  selection={selection}
                  data={filteredSeriesCombined}
                  color={this.state.legend.selection}
                  />)
              }

            </div>
        </Typography>
      </main>
    )
  }
}

export default HomePage
