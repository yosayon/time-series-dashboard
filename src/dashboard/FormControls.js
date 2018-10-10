import FormGroup from '@material-ui/core/FormGroup'
import React, { Component } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import { formControlStyle } from './formControlStyle'

const FormControls = ({ classes, bonding, unbonding, injections, battery, temperature, errors, onChecked }) => {
    return (
      <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={bonding}
            onChange={onChecked('bonding')}
            value="bonding"
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
          />
        }
        label="Bonding"
      />

        <FormControlLabel
          control={
            <Switch
              checked={unbonding}
              onChange={onChecked('unbonding')}
              value="unbonding"
              classes={{
                switchBase: classes.colorSwitchBaseB,
                checked: classes.colorCheckedB,
                bar: classes.colorBarB,
              }}
            />
          }
          label="Unbonding"
        />

        <FormControlLabel
          control={
            <Switch
              checked={injections}
              onChange={onChecked('injections')}
              value="injections"
              classes={{
                switchBase: classes.colorSwitchBaseC,
                checked: classes.colorCheckedC,
                bar: classes.colorBarC,
              }}
            />
          }
          label="Injections"
        />

        <FormControlLabel
          control={
            <Switch
              checked={battery}
              onChange={onChecked('battery')}
              value="battery"
              classes={{
                switchBase: classes.colorSwitchBaseD,
                checked: classes.colorCheckedD,
                bar: classes.colorBarD,
              }}
            />
          }
          label="Battery"
        />

        <FormControlLabel
          control={
            <Switch
              checked={temperature}
              onChange={onChecked('temperature')}
              value="temperature"
              classes={{
                switchBase: classes.colorSwitchBaseE,
                checked: classes.colorCheckedE,
                bar: classes.colorBarE,
              }}
            />
          }
          label="Temperature"
        />

        <FormControlLabel
          control={
            <Switch
              checked={errors}
              onChange={onChecked('errors')}
              value="errors"
              classes={{
                switchBase: classes.colorSwitchBaseF,
                checked: classes.colorCheckedF,
                bar: classes.colorBarF,
              }}
            />
          }
          label="Errors"
        />

      </FormGroup>
    )
  }

export default withStyles(formControlStyle)(FormControls)
