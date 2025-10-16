/**
 * Componente de controles interactivos del dashboard
 * Permite al usuario:
 * - Seleccionar qué sistemas operativos mostrar (1-3 opciones)
 * - Cambiar entre gráficos de líneas y barras
 * - Interfaz intuitiva con checkboxes y radio buttons
 */
'use client';

import React from 'react';

// Interfaz que define las propiedades del componente
interface ControlsProps {
  selectedOS: {
    windows: boolean;  // Estado de selección de Windows
    linux: boolean;    // Estado de selección de Linux
    macos: boolean;    // Estado de selección de macOS
  };
  chartType: 'line' | 'bar';  // Tipo de gráfico actual
  onOSChange: (os: keyof ControlsProps['selectedOS']) => void;  // Callback para cambios de SO
  onChartTypeChange: (type: 'line' | 'bar') => void;           // Callback para cambios de tipo
}

export default function Controls({ selectedOS, chartType, onOSChange, onChartTypeChange }: ControlsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Controles del Dashboard</h2>
      
      {/* Selección de Sistemas Operativos */}
      {/* Sección de selección de sistemas operativos */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-700">
          Sistemas Operativos: 
          <span className="text-sm font-normal text-gray-500">(Selecciona de 1 a 3)</span>
        </h3>
        <div className="flex flex-wrap gap-4">
          {/* Checkbox para Windows */}
          <label className="flex items-center space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded transition-colors">
            <input
              type="checkbox"
              checked={selectedOS.windows}
              onChange={() => onOSChange('windows')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              aria-label="Seleccionar Windows"
            />
            <span className="text-sm font-medium text-gray-700 flex items-center">
              <div className="w-4 h-4 bg-blue-600 rounded mr-2" title="Color Windows"></div>
              Windows 💻
            </span>
          </label>
          
          {/* Checkbox para Linux */}
          <label className="flex items-center space-x-2 cursor-pointer hover:bg-yellow-50 p-2 rounded transition-colors">
            <input
              type="checkbox"
              checked={selectedOS.linux}
              onChange={() => onOSChange('linux')}
              className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500"
              aria-label="Seleccionar Linux"
            />
            <span className="text-sm font-medium text-gray-700 flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded mr-2" title="Color Linux"></div>
              Linux 🐧
            </span>
          </label>
          
          {/* Checkbox para macOS */}
          <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
            <input
              type="checkbox"
              checked={selectedOS.macos}
              onChange={() => onOSChange('macos')}
              className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500"
              aria-label="Seleccionar macOS"
            />
            <span className="text-sm font-medium text-gray-700 flex items-center">
              <div className="w-4 h-4 bg-gray-600 rounded mr-2" title="Color macOS"></div>
              macOS 🍎
            </span>
          </label>
        </div>
      </div>

      {/* Selección de Tipo de Gráfico */}
      <div>
        <h3 className="text-lg font-medium mb-3 text-gray-700">
          Tipo de Gráfico:
          <span className="text-sm font-normal text-gray-500 ml-2">(Cambia la visualización)</span>
        </h3>
        <div className="flex gap-6">
          {/* Radio button para gráfico de líneas */}
          <label className="flex items-center space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded transition-colors">
            <input
              type="radio"
              name="chartType"
              value="line"
              checked={chartType === 'line'}
              onChange={() => onChartTypeChange('line')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              aria-label="Gráfico de líneas"
            />
            <span className="text-sm font-medium text-gray-700">📈 Líneas</span>
          </label>
          
          {/* Radio button para gráfico de barras */}
          <label className="flex items-center space-x-2 cursor-pointer hover:bg-blue-50 p-2 rounded transition-colors">
            <input
              type="radio"
              name="chartType"
              value="bar"
              checked={chartType === 'bar'}
              onChange={() => onChartTypeChange('bar')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              aria-label="Gráfico de barras"
            />
            <span className="text-sm font-medium text-gray-700">📊 Barras</span>
          </label>
        </div>
      </div>
    </div>
  );
}