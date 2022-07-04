import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: 'bar3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Forked ',
        yAxisName: 'Forks',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16',
        yAxisNameFontSize: '16',
      },
      data,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default Column3D
