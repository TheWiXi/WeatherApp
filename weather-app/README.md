# Aplicación del Clima 🌤️

Una aplicación meteorológica moderna y elegante construida con React que proporciona información detallada del clima, incluyendo condiciones actuales, pronósticos por hora y predicciones de 10 días.

## Características ✨

- **Visualización del Clima Actual**: Muestra temperatura, sensación térmica y condiciones actuales
- **Múltiples Modos de Vista**:
  - Pronóstico de hoy
  - Pronóstico de mañana
  - Pronóstico de 10 días
- **Información Meteorológica Detallada**:
  - Velocidad del viento
  - Probabilidad de lluvia
  - Presión atmosférica
  - Índice UV
- **Pronósticos por Hora**: Temperatura y condiciones para cada hora
- **Resumen del Día**: Temperaturas máximas/mínimas y humedad
- **Detalles de Precipitación**: Probabilidad de lluvia y precipitación total
- **Horarios Solares**: Amanecer y atardecer
- **Búsqueda de Ciudades**: Cambio fácil de ubicación con función de búsqueda

## Tecnologías Utilizadas 🛠️

- **React** - v18.2.0
- **React Query** (@tanstack/react-query) - Para obtención y caché de datos
- **Tailwind CSS** - Para estilos
- **Lucide React** - Para iconos
- **WeatherAPI** - Para datos meteorológicos
- **Vite** - Para empaquetado y desarrollo del proyecto

## Requisitos Previos 📋

Antes de comenzar, asegúrate de tener instalado:

- Node.js (v16.0.0 o superior)
- npm o yarn
- Una clave de API de WeatherAPI (Obténla en [WeatherAPI.com](https://www.weatherapi.com/))

## Instalación 🚀

1. Clona el repositorio:

```bash
git clone https://github.com/TheWiXi/WeatherApp.git
cd WeatherApp
```

2. Instala las dependencias:

```bash
npm install
# o
yarn
```

3. Crea un archivo `.env` en el directorio raíz y agrega tu clave de WeatherAPI:

```env
VITE_WEATHER_API_KEY=your_api_key_here
VITE_WEATHER_API_URL=https://api.weatherapi.com/v1
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

5. Construye para producción:

```bash
npm run build
# o
yarn build
```

## Scripts Disponibles 📝

- `dev` - Inicia el servidor de desarrollo
- `build` - Crea una construcción para producción

## Uso de la API 🌐

Esta aplicación utiliza el servicio WeatherAPI.com. Así es como se utiliza la API:

1. **URL Base**: `https://api.weatherapi.com/v1`
2. **Endpoints Utilizados**:

   - `/forecast.json` - Para pronósticos del tiempo
3. **Parámetros**:

   - `key`: Tu clave de API
   - `q`: Nombre de la ciudad (ej., "Madrid, España")
   - `days`: Número de días de pronóstico (usamos 10)
   - `aqi`: Datos de calidad del aire (establecido en "no")

Ejemplo de llamada a la API:

```javascript
https://api.weatherapi.com/v1/forecast.json?key=TU_CLAVE_API&q=Madrid,España&days=10&aqi=no
```

## Agradecimientos 🙏

- Datos meteorológicos proporcionados por [WeatherAPI.com](https://www.weatherapi.com/)
- Iconos de [Lucide](https://lucide.dev/)
