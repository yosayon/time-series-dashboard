import React from 'react'
import homeIcon from './home.png'
import bondingIcon from './bonding.png'
import unbondingIcon from './unbonding.png'
import injectionsIcon from './injections.png'
import temperatureIcon from './temperature.png'
import batteryIcon from './battery.png'
import errorsIcon from './errors.png'



const icons =
{
  home: <img src={homeIcon} alt='bonding' />,
  bonding: <img src={bondingIcon} alt='bonding' />,
  unbonding: <img src={unbondingIcon} alt='bonding' />,
  injections: <img src={injectionsIcon} alt="bonding" />,
  temperature: <img src={temperatureIcon} alt="bonding" />,
  battery: <img src={batteryIcon} alt="bonding" />,
  errors: <img src={errorsIcon} alt="bonding" />
  }


export default icons;
