/**
 * DASHBOARD SISTEMAS OPERATIVOS
 * 
 * Proyecto desarrollado para mostrar la evolución histórica del porcentaje
 * de usuarios de sistemas operativos desde 2001 hasta 2024.
 * 
 * Características principales:
 * ✅ Visualización interactiva con Chart.js
 * ✅ Selección múltiple de sistemas operativos (1-3)
 * ✅ Gráficos de líneas y barras
 * ✅ Estadísticas en tiempo real
 * ✅ Diseño responsivo y accesible
 * 
 * Tecnologías utilizadas:
 * - Next.js 15 con TypeScript
 * - React 19 con hooks
 * - Chart.js para visualizaciones
 * - Tailwind CSS para estilos
 * 
 * @author Dashboard de Sistemas Operativos
 * @version 1.0
 */
'use client';

import React, { useState } from 'react';
// Importación de componentes personalizados
import ChartComponent from '@/components/ChartComponent';  // Componente principal del gráfico
import Controls from '@/components/Controls';              // Controles de interacción
import Stats from '@/components/Stats';                    // Estadísticas resumidas
import { osData } from '@/data/osData';                   // Datos históricos

export default function Home() {
  // Estado para controlar qué sistemas operativos están seleccionados
  // Por defecto todos están activos para mostrar la evolución completa
  const [selectedOS, setSelectedOS] = useState({
    windows: true,   // Microsoft Windows
    linux: true,     // Distribuciones Linux
    macos: true,     // Apple macOS
  });
  
  // Estado para el tipo de gráfico (líneas por defecto por mejor legibilidad)
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');

  /**
   * Maneja el cambio de selección de sistemas operativos
   * Permite activar/desactivar cualquier SO manteniendo los demás estados
   * @param os - Clave del sistema operativo a cambiar
   */
  const handleOSChange = (os: keyof typeof selectedOS) => {
    setSelectedOS(prev => ({
      ...prev,
      [os]: !prev[os]    // Invierte el estado actual del SO seleccionado
    }));
  };

  /**
   * Maneja el cambio de tipo de gráfico
   * Actualiza la visualización entre líneas y barras
   * @param type - Tipo de gráfico seleccionado
   */
  const handleChartTypeChange = (type: 'line' | 'bar') => {
    setChartType(type);
  };

  // Verifica si al menos un sistema operativo está seleccionado
  // Necesario para mostrar el gráfico o mensaje de selección
  const hasSelectedOS = Object.values(selectedOS).some(selected => selected);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📊 Dashboard Sistemas Operativos
          </h1>
          <p className="text-lg text-gray-600">
            Evolución del porcentaje de usuarios de sistemas operativos (2001-2024)
          </p>
        </header>

        {/* Controls */}
        <Controls
          selectedOS={selectedOS}
          chartType={chartType}
          onOSChange={handleOSChange}
          onChartTypeChange={handleChartTypeChange}
        />

        {/* Stats */}
        {hasSelectedOS && (
          <Stats data={osData} selectedOS={selectedOS} />
        )}

        {/* Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {hasSelectedOS ? (
            <ChartComponent
              data={osData}
              selectedOS={selectedOS}
              chartType={chartType}
            />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Selecciona al menos un sistema operativo
              </h3>
              <p className="text-gray-500">
                Usa los controles de arriba para elegir qué sistemas operativos mostrar en el gráfico.
              </p>
            </div>
          )}
        </div>

        {/* Footer con información del proyecto */}
        <footer className="text-center mt-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="text-gray-500 space-y-2">
            <p className="font-medium">
              📊 Dashboard Sistemas Operativos - Evolución 2001-2024
            </p>
            <p className="text-sm">
              Desarrollado con ❤️ usando Next.js, React, TypeScript y Chart.js
            </p>
            <p className="text-xs text-gray-400">
              Datos de ejemplo • Visualización interactiva • Diseño responsivo
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
