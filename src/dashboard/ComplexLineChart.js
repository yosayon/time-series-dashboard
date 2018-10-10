import React, { Component } from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import LineChart from 'recharts/lib/chart/LineChart'
import XAxis from 'recharts/lib/cartesian/XAxis'
import YAxis from 'recharts/lib/cartesian/YAxis'
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid'
import Tooltip from 'recharts/lib/component/Tooltip'
import Legend from 'recharts/lib/component/Legend'
import Line from 'recharts/lib/cartesian/Line'
import FormControls from './FormControls'

class ComplexLineChart extends Component{
  state = {
    bonding: true,
    unbonding: true,
    injections: true,
    battery: true,
    temperature: true,
    errors: true,
    filteredSeriesCombined: this.props.filteredSeriesCombined,
    selected: this.props.selected
  }


  onChecked = name => event => {
    let newSeries = this.props.updateSelected(name, event.target.checked, this.props.selected, this.props.filteredSeriesCombined, this.props.series[name], this.props.startDate, this.props.endDate)
    this.setState({...this.state, filteredSeriesCombined: newSeries[0], selected: newSeries[1], [name]: event.target.checked})
  }

  render(){

    let displayLines = []
    if(this.props.selected !== undefined){
      displayLines = this.props.selected.map(series => <Line type="monotone" key={series} dataKey={series} stroke={this.props.colors[series]} />)
    }
    return(
      <div>
      <ResponsiveContainer width="99%" height={320}>
        <LineChart data={this.props.filteredSeriesCombined}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {displayLines}
        </LineChart>
      </ResponsiveContainer>
      <FormControls
        selected={this.props.selected}
        filteredSeriesCombined={this.props.filteredSeriesCombined}
        updateSelected={this.props.updateSelected}
        series={this.props.series}
        bonding={this.state.bonding}
        unbonding={this.state.unbonding}
        injections={this.state.injections}
        battery={this.state.battery}
        temperature={this.state.temperature}
        errors={this.state.errors}
        onChecked={this.onChecked}
      />
      </div>
    )
  }
}

export default ComplexLineChart;
