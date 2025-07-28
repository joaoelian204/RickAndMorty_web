# Rick and Morty - Angular PWA

Una aplicación web progresiva (PWA) desarrollada en Angular que consume la API de Rick and Morty para mostrar información sobre los personajes de la serie.

## 🚀 Características

- **Lista de Personajes**: Visualización de todos los personajes de Rick and Morty
- **Detalles de Personaje**: Página individual con información detallada de cada personaje
- **Diseño Responsivo**: Interfaz adaptada para diferentes dispositivos
- **PWA Ready**: Configurada como Progressive Web App
- **Service Worker**: Soporte para funcionamiento offline

## 🛠️ Tecnologías Utilizadas

- **Angular 20.1.0**: Framework principal
- **TypeScript**: Lenguaje de programación
- **RxJS**: Manejo de observables y operaciones asíncronas
- **Angular Router**: Navegación entre páginas
- **Angular Service Worker**: Funcionalidad PWA

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── interfaces/          # Interfaces TypeScript
│   │   ├── icharacter.ts   # Interfaz para personaje individual
│   │   └── icharacters.ts  # Interfaz para lista de personajes
│   ├── pages/              # Componentes de páginas
│   │   ├── character/      # Página de detalle de personaje
│   │   └── characters/     # Página de lista de personajes
│   ├── service/            # Servicios
│   │   └── characters.service.ts  # Servicio para API
│   ├── app.component.ts    # Componente principal
│   ├── app.routes.ts       # Configuración de rutas
│   └── app.config.ts       # Configuración de la aplicación
├── styles.css              # Estilos globales
└── main.ts                 # Punto de entrada
```

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd restPWA
```

2. Instala las dependencias:
```bash
npm install
```

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
# o
npx ng serve
```

La aplicación estará disponible en `http://localhost:4200/`

### Construcción

Para generar la versión de producción:

```bash
npm run build
# o
npx ng build
```

Los archivos se generarán en el directorio `dist/`

### Testing

Para ejecutar las pruebas unitarias:

```bash
npm test
# o
npx ng test
```

## 📱 Funcionalidades

### Página Principal (`/`)
- Lista completa de personajes de Rick and Morty
- Información básica de cada personaje (nombre, estado, especie)
- Navegación a detalles individuales

### Detalle de Personaje (`/characters/:id`)
- Información completa del personaje seleccionado
- Imagen del personaje
- Detalles de origen y ubicación
- Lista de episodios en los que aparece

## 🔧 API

La aplicación consume la API pública de Rick and Morty:
- **Base URL**: `https://rickandmortyapi.com/api/character`
- **Endpoints**:
  - `GET /character` - Lista de personajes
  - `GET /character/:id` - Detalle de personaje específico
