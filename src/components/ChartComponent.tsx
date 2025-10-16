/**
 * Componente principal para renderizar gráficos de sistemas operativos
 * Soporta gráficos de líneas y barras usando Chart.js
 * Permite mostrar de 1 a 3 sistemas operativos simultáneamente
 */
'use client';

import React from 'react';
// Importación de elementos necesarios de Chart.js
import {
  Chart as ChartJS,
  CategoryScale,    // Escala para el eje X (años)
  LinearScale,      // Escala para el eje Y (porcentajes)
  PointElement,     // Puntos en gráficos de línea
  LineElement,      // Líneas en gráficos de línea
  BarElement,       // Barras en gráficos de barras
  Title,            // Título del gráfico
  Tooltip,          // Tooltips interactivos
  Legend,           // Leyenda del gráfico
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { OSData, osColors } from '@/data/osData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps {
  data: OSData[];
  selectedOS: {
    windows: boolean;
    linux: boolean;
    macos: boolean;
  };
  chartType: 'line' | 'bar';
}

export default function ChartComponent({ data, selectedOS, chartType }: ChartComponentProps) {
  const datasets = [];

  if (selectedOS.windows) {
    datasets.push({
      label: 'Windows',
      data: data.map(item => item.windows),
      backgroundColor: osColors.windows.background,
      borderColor: osColors.windows.border,
      borderWidth: 2,
      tension: 0.1,
    });
  }

  if (selectedOS.linux) {
    datasets.push({
      label: 'Linux',
      data: data.map(item => item.linux),
      backgroundColor: osColors.linux.background,
      borderColor: osColors.linux.border,
      borderWidth: 2,
      tension: 0.1,
    });
  }

  if (selectedOS.macos) {
    datasets.push({
      label: 'macOS',
      data: data.map(item => item.macos),
      backgroundColor: osColors.macos.background,
      borderColor: osColors.macos.border,
      borderWidth: 2,
      tension: 0.1,
    });
  }

  const chartData = {
    labels: data.map(item => item.year.toString()),
    datasets,
  };

  // Configuración completa del gráfico con opciones de accesibilidad y usabilidad
  const options = {
    responsive: true, // Gráfico responsivo que se adapta al contenedor
    plugins: {
      // Configuración de la leyenda
      legend: {
        position: 'top' as const, // Leyenda en la parte superior
      },
      // Configuración del título principal
      title: {
        display: true,
        text: 'Evolución del Porcentaje de Usuarios por Sistema Operativo (2001-2024)',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
    },
    // Configuración de las escalas (ejes X e Y)
    scales: {
      // Eje Y: Porcentajes de 0 a 100
      y: {
        beginAtZero: true,  // Comenzar desde 0
        max: 100,           // Máximo 100%
        ticks: {
          // Formato personalizado: agregar '%' a los valores
          callback: function(value: any) {
            return value + '%';
          }
        },
        title: {
          display: true,
          text: 'Porcentaje de Usuarios (%)',
        },
      },
      // Eje X: Años de 2001 a 2024
      x: {
        title: {
          display: true,
          text: 'Año',
        },
      },
    },
  };

  return (
    <div className="w-full h-96 p-4">
      {chartType === 'line' ? (
        <Line data={chartData} options={options} />
      ) : (
        <Bar data={chartData} options={options} />
      )}
    </div>
  );
}