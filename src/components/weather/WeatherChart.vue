<script setup lang="ts">
import { ref, watch, useTemplateRef } from 'vue';
import type { ChartItem } from 'chart.js';
import { Chart, CategoryScale, LinearScale, LineController, LineElement, PointElement, Tooltip } from 'chart.js';
import type { ChartData } from 'chart.js';

const props = defineProps<{
  chartData: ChartData
}>()

const lineChartCanvas = useTemplateRef<HTMLCanvasElement>('refLineChartCanvas')
const chart = ref<ChartItem>()

watch(lineChartCanvas, val => {
  if (!val || !!chart.value) return

  initChart()
}, { immediate: true })

const initChart = () => {
  if (!lineChartCanvas.value) return

  Chart.register([
    CategoryScale,
    LineController,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
  ])

  chart.value = new Chart(lineChartCanvas.value, {
    type: 'line',
    data: props.chartData,
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: context => context?.parsed?.y ?`${context.parsed.y.toFixed(0)}°C` : ``,
          },
        },
      },
      elements: {
        line: {
          tension: 0.35,
          borderWidth: 2,
          borderColor: '#4F7FFF',
        },
        point: {
          radius: 0,
          hoverRadius: 4,
          hitRadius: 12,
          backgroundColor: '#4F7FFF',
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            callback: value => `${value}°`,
          },
        },
      },
    },
  })
}

</script>

<template>
  <canvas ref="refLineChartCanvas" />
</template>
