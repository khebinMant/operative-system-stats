/**
 * Componente de estadísticas que muestra un resumen de datos actuales
 * Presenta:
 * - Porcentaje actual (2024) de cada sistema operativo
 * - Cambio porcentual desde 2001
 * - Indicadores visuales con colores y emojis
 * - Solo muestra estadísticas de los SO seleccionados
 */
'use client';

import React from 'react';
import { OSData } from '@/data/osData';

// Propiedades del componente de estadísticas
interface StatsProps {
  data: OSData[];        // Datos históricos completos
  selectedOS: {          // Sistemas operativos seleccionados por el usuario
    windows: boolean;
    linux: boolean;
    macos: boolean;
  };
}

export default function Stats({ data, selectedOS }: StatsProps) {
  // Obtener datos del año más reciente (2024) y más antiguo (2001)
  const latestData = data[data.length - 1];  // Último elemento del array (2024)
  const oldestData = data[0];                // Primer elemento del array (2001)

  /**
   * Calcula la diferencia porcentual entre dos valores
   * @param current - Valor actual (2024)
   * @param old - Valor inicial (2001)
   * @returns Diferencia en puntos porcentuales
   */
  const calculateChange = (current: number, old: number) => {
    return current - old;
  };

  /**
   * Formatea el cambio con signo y símbolo de porcentaje
   * @param change - Cambio calculado
   * @returns String formateado (ej: "+5.0%" o "-3.2%")
   */
  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';  // Agregar '+' para valores positivos
    return `${sign}${change.toFixed(1)}%`;
  };

  /**
   * Determina el color del texto según si el cambio es positivo o negativo
   * @param change - Cambio calculado
   * @returns Clase CSS para el color
   */
  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-600' : 'text-red-600';  // Verde para positivo, rojo para negativo
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Tarjeta de estadísticas para Windows */}
      {selectedOS.windows && (
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-800">Windows</h3>
              <p className="text-2xl font-bold text-blue-900" title="Porcentaje actual en 2024">
                {latestData.windows}%
              </p>
              <p className="text-sm text-blue-600">
                Cambio desde 2001: 
                <span 
                  className={`ml-1 font-semibold ${getChangeColor(calculateChange(latestData.windows, oldestData.windows))}`}
                  title={`Cambio de ${oldestData.windows}% en 2001 a ${latestData.windows}% en 2024`}
                >
                  {formatChange(calculateChange(latestData.windows, oldestData.windows))}
                </span>
              </p>
            </div>
            <div className="text-3xl" title="Sistema operativo Windows">💻</div>
          </div>
        </div>
      )}

      {/* Tarjeta de estadísticas para Linux */}
      {selectedOS.linux && (
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-yellow-800">Linux</h3>
              <p className="text-2xl font-bold text-yellow-900" title="Porcentaje actual en 2024">
                {latestData.linux}%
              </p>
              <p className="text-sm text-yellow-600">
                Cambio desde 2001: 
                <span 
                  className={`ml-1 font-semibold ${getChangeColor(calculateChange(latestData.linux, oldestData.linux))}`}
                  title={`Cambio de ${oldestData.linux}% en 2001 a ${latestData.linux}% en 2024`}
                >
                  {formatChange(calculateChange(latestData.linux, oldestData.linux))}
                </span>
              </p>
            </div>
            <div className="text-3xl" title="Sistema operativo Linux">🐧</div>
          </div>
        </div>
      )}

      {/* Tarjeta de estadísticas para macOS */}
      {selectedOS.macos && (
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">macOS</h3>
              <p className="text-2xl font-bold text-gray-900" title="Porcentaje actual en 2024">
                {latestData.macos}%
              </p>
              <p className="text-sm text-gray-600">
                Cambio desde 2001: 
                <span 
                  className={`ml-1 font-semibold ${getChangeColor(calculateChange(latestData.macos, oldestData.macos))}`}
                  title={`Cambio de ${oldestData.macos}% en 2001 a ${latestData.macos}% en 2024`}
                >
                  {formatChange(calculateChange(latestData.macos, oldestData.macos))}
                </span>
              </p>
            </div>
            <div className="text-3xl" title="Sistema operativo macOS">🍎</div>
          </div>
        </div>
      )}
    </div>
  );
}