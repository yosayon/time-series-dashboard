import React from 'react'

const Loader = () => {
  return(
  <div id="loading-background-container">
    <svg width="51px" height="50px" viewBox="0 0 51 50">
      <rect y="0" width="13" height="50" fill="#ABDFEB">
          <animate attributeName="height" values="50;10;50" begin="0s" dur="1s" repeatCount="indefinite" />
          <animate attributeName="y" values="0;20;0" begin="0s" dur="1s" repeatCount="indefinite" />
      </rect>
      <rect x="19" y="0" width="13" height="50" fill="#83AEDA">
          <animate attributeName="height" values="50;10;50" begin="0.2s" dur="1s" repeatCount="indefinite" />
          <animate attributeName="y" values="0;20;0" begin="0.2s" dur="1s" repeatCount="indefinite" />
      </rect>
      <rect x="38" y="0" width="13" height="50" fill="#6290CF">
          <animate attributeName="height" values="50;10;50" begin="0.4s" dur="1s" repeatCount="indefinite" />
          <animate attributeName="y" values="0;20;0" begin="0.4s" dur="1s" repeatCount="indefinite" />
      </rect>
    </svg>
  </div>
  )
}

export default Loader
