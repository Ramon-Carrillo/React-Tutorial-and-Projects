import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: 'column3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most Popular ',
        yAxisName: 'Stars',
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
