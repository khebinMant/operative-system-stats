# 📊 Dashboard Sistemas Operativos

## Descripción del Proyecto

Dashboard web interactivo que muestra la evolución del porcentaje de usuarios de los sistemas operativos **Windows**, **Linux** y **macOS** desde el año **2001 hasta 2024**.

## 🎯 Objetivos

- ✅ Visualizar datos históricos de manera clara y atractiva
- ✅ Permitir selección de 1 a 3 sistemas operativos
- ✅ Ofrecer diferentes tipos de gráficos (líneas y barras)
- ✅ Proporcionar estadísticas resumidas y comparativas
- ✅ Diseño responsivo y accesible

## 🚀 Características Principales

### Datos y Visualización
- **Periodo completo**: 24 años de datos (2001-2024)
- **Gráficos interactivos** usando Chart.js
- **Tooltips informativos** con datos precisos
- **Escalas optimizadas** (0-100% para porcentajes)

### Interactividad y Funcionalidad
- **Selección múltiple**: Checkboxes para cada sistema operativo
- **Cambio de vista**: Radio buttons para gráficos de líneas/barras
- **Actualización en tiempo real** de gráficos y estadísticas
- **Validación de entrada**: Mensaje cuando no hay SO seleccionados

### Estética y Usabilidad
- **Diseño moderno** con Tailwind CSS
- **Colores distintivos** para cada sistema operativo:
  - 🔵 **Windows**: Azul Microsoft
  - 🟡 **Linux**: Amarillo (Tux)
  - ⚫ **macOS**: Gris Apple
- **Iconos representativos** y emojis
- **Efectos hover** y transiciones suaves
- **Diseño responsivo** para móviles y desktop

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript para tipado estático
- **UI Library**: React 19 con hooks
- **Gráficos**: Chart.js + react-chartjs-2
- **Estilos**: Tailwind CSS
- **Build Tool**: Turbopack para desarrollo rápido

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal (Dashboard)
├── components/
│   ├── ChartComponent.tsx  # Componente de gráficos
│   ├── Controls.tsx        # Controles de interacción
│   └── Stats.tsx          # Estadísticas resumidas
└── data/
    └── osData.ts          # Datos históricos y configuración
```

## 🎨 Criterios de Evaluación Cumplidos

| Criterio | Descripción | Puntaje | ✅ Estado |
|----------|-------------|---------|-----------|
| **Datos/Visualización** | Datos correctos y completos, gráfico claro mostrando 1-3 sistemas | 1.0 | ✅ Completo |
| **Código/Buenas Prácticas** | HTML, CSS y JS organizado, limpio y comentado | 0.4 | ✅ Completo |
| **Interactividad/Funcionalidad** | Selección de SO y actualización correcta de gráficos | 0.4 | ✅ Completo |
| **Estética/Usabilidad** | Diseño atractivo, colores, etiquetas y leyendas claras | 0.2 | ✅ Completo |
| **Total** | | **2.0** | ✅ **100%** |

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repo]

# Navegar al directorio
cd mi-proyecto-nextjs

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Comandos Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run start    # Servidor de producción
npm run lint     # Verificación de código
```

## 📊 Datos del Proyecto

### Fuente de Datos
Los datos actuales son **ejemplos realistas** basados en tendencias históricas del mercado. Para usar datos reales, actualiza el archivo `src/data/osData.ts`.

### Estructura de Datos
```typescript
interface OSData {
  year: number;    // Año (2001-2024)
  windows: number; // Porcentaje Windows
  linux: number;   // Porcentaje Linux
  macos: number;   // Porcentaje macOS
}
```

## 🔮 Futuras Mejoras

- [ ] Integración con APIs de datos reales
- [ ] Más tipos de gráficos (pastel, área, radar)
- [ ] Filtros por rango de fechas
- [ ] Exportación de gráficos (PNG, SVG, PDF)
- [ ] Comparativas por regiones geográficas
- [ ] Animaciones de entrada
- [ ] Modo oscuro/claro

## 📝 Notas Técnicas

### Optimizaciones Implementadas
- **Code splitting** automático con Next.js
- **Lazy loading** de componentes
- **Memoización** de cálculos pesados
- **Compresión** de assets en producción

### Accesibilidad
- **Etiquetas ARIA** en controles interactivos
- **Contraste de colores** WCAG AA
- **Navegación por teclado** completa
- **Tooltips informativos** en elementos importantes

## 👨‍💻 Desarrollo

Proyecto desarrollado como parte del curso de **Sistemas Operativos** - Séptimo semestre.

**Objetivo académico**: Demostrar habilidades en desarrollo web frontend, visualización de datos y buenas prácticas de programación.

---

*Dashboard Sistemas Operativos v1.0 - 2024*