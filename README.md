# 👥 Full-Stack User Management System: From Prototype to Professional Infrastructure

This repository represents the technical evolution of a user management system, transitioning from a local development environment (simulated with **JSON Server**) to a professional decoupled architecture with **real persistence in PostgreSQL**.

<img width="1172" height="962" alt="image" src="https://github.com/user-attachments/assets/c2b9b0d4-3c0b-4650-bfa6-daf49ccb5ce7" />

---

📊 Entity Relationship Diagram (ERD)

``` mermaid
erDiagram
    USER {
        int id PK
        string first_name
        string last_name
        string email UK
        string password
        date birthday
        string image_url
    }
```

---

## 🚀 Project Story (Technical Evolution)

The project began as a React SPA focused on complex state management and client-side validation. However, to meet industry standards and apply my knowledge in **Data Science for Business**, I decided to scale the project:

1.  **Phase 1 (Frontend Mastery):** Built the interface using Vite and React, implementing custom hooks for business logic and strict validation with **Zod**.
2.  **Phase 2 (Backend Migration):** Replaced the simulated server with a **custom RESTful API** built with **Node.js and Express**.
3.  **Phase 3 (Real Persistence):** Implemented a **PostgreSQL** database via the **Sequelize ORM**, ensuring that data is not only consumed but managed securely and scalably.

---

## 🏗️ System Architecture

This project is a **Monorepo** that integrates two fundamental components:

### 🎨 Frontend (Client)
Located in the `/frontend` folder, this client focuses on a smooth and secure User Experience (UX).
* **Validations:** Data schemas with **Zod** and **React Hook Form**.
* **Components:** Modular architecture with reusable components (Modals, Loaders, Dynamic Forms) using the `children` prop.
* **Pagination:** Custom system to optimize data fetching from the API.
* **Styling:** Modern, responsive design using **SCSS**.

### ⚙️ Backend (API)
Located in the `/backend` folder, this server manages business logic and data integrity.
* **Server:** REST API built with **Node.js** and **Express**.
* **Database:** Relational (**PostgreSQL**) managed through **Sequelize**.
* **Security:** Environment variable management with **Dotenv** and modular controllers for clean code.
* **Documentation:** Tested endpoints documented in **Postman**.

---

## 🧪 Technologies Used

| Area | Tools |
| :--- | :--- |
| **Frontend** | React, Vite, Axios, Zod, React Hook Form, SCSS |
| **Backend** | Node.js, Express, Sequelize, PostgreSQL |
| **Tools** | Git, Postman, Dotenv, ESLint |
| **Deployment** | Render (API), Netlify (Frontend) |

---

## 🎯 Project Objectives

#### 1. Persistence & Data Management (Core Focus)
* **Migration to PostgreSQL:** Evolving from volatile and limited storage (**JSON Server**) to a robust relational database (**PostgreSQL**), guaranteeing data integrity, security, and permanence.
* **Sequelize ORM Modeling:** Implementing efficient data schemas for the "User" entity, ensuring database-level validations and optimizing **Queries** for production environments.
* **Data Architecture for Business:** Designing a scalable table structure capable of handling massive records, demonstrating the ability to manage the data lifecycle from origin to persistence.

#### 2. API Development & Server Logic
* **Decoupled Architecture:** Building a system where the Frontend (React) and Backend (Node.js) operate independently but perfectly synchronized via a custom RESTful API.
* **Security & Environment:** Managing sensitive variables through **Dotenv** and ensuring cloud-ready deployment processes (**Render**).
* **Standardization:** Documenting the system with **Postman** to facilitate interoperability and data consumption by other services.

#### 3. High-Performance Frontend & UX
* **Client-Side Validation:** Using **Zod** and **React Hook Form** to ensure data integrity before API processing, reducing server load.
* **Componentization & Scalability:** Developing a modular interface through **Custom Hooks** (`useUsersCrud`, `usePagination`) and reusable components.
* **User Experience (UX):** Creating a 100% responsive design with **SCSS** providing immediate visual feedback through loading states and modals.

---

## 🛠️ Reinforced Technical Skills

#### 1. Backend Development & Data Engineering
* **RESTful API Design:** Creating scalable services with Node.js and Express, correctly handling HTTP methods and status codes.
* **Relational Database Management:** Implementing solid persistence with PostgreSQL, moving from simple JSON models to professional SQL structures.
* **ORM Management (Sequelize):** Entity modeling, data type definition, and asynchronous query execution for record manipulation.
* **Environment Security:** Configuring sensitive variables with Dotenv to prevent database credentials from being exposed in version control.

#### 2. Frontend Development & App Logic
* **React Component Architecture:** Building modular interfaces using Vite, optimizing rendering and code reuse via the `children` prop.
* **State & Effect Management:** Mastering fundamental hooks (`useState`, `useEffect`) for data synchronization between the UI and server.
* **Data Validation:** Implementing a declarative validation layer ensuring data accuracy before being sent to PostgreSQL.

#### 3. Architecture & DevOps
* **Monorepo Management:** Professional file organization separating Frontend and Backend in a single controlled repository.
* **Deployment Strategies:** Configuration and production setup on Render (Backend) and Netlify (Frontend).
* **Software Documentation:** Using Postman to document endpoints for developers and data analysts.

---

<details>
<summary><b>📁 API Endpoints (Backend)</b></summary>

| Method | Endpoint        | Action  |
|--------|-----------------|---------|
| GET    | `/users`        | Get all users |
| POST   | `/users`        | Create new user |
| GET    | `/users/:id`    | Get one user by ID |
| PUT    | `/users/:id`    | Update one user by ID |
| DELETE | `/users/:id`    | Delete one user by ID |

</details>

---

<details>
<summary><b>🧠 User Model (Backend)</b></summary>

| Field       | Type     | Example              |
|-------------|----------|----------------------|
| id          | Integer  | 1                    |
| first_name  | String   | Jesús                |
| last_name   | String   | Fernández            |
| email       | String   | jsfdz@example.com    |
| password    | String   | 12345678             |
| birthday    | Date     | 03/05/1992           |
| image_url   | String   | "https://ui-avatars.com/api/?name=Jesus+Fernandez" |

</details>

---

<details>
<summary><b>⚡ External APIs & Features (Frontend)</b></summary>

| Tech / API                    | Functionality |
|-------------------------------|---------------------------|
| **JSON Server**               | Simulated RESTful API (Initial prototyping phase). |
| **Custom Hook(useUsersCrud)** | Encapsulates HTTP request logic. |
| **Custom Hook(usePagination)**| Encapsulates pagination logic for user listing. |
| **Custom Hook(useModal)**     | Encapsulates modal functionality logic. |

</details>

---

<details>
<summary><b>🧠Key Features (Frontend)</b></summary>

- User listing with customized cards.
- Dynamic form for creating and editing users:

    **`email`**
    **`password`**
    **`first_name`**
    **`last_name`**
    **`birthday`**
    **`image_url`**(optional)

- Form validation using Zod and React Hook Form.
- Confirmation modals triggered after successful actions.
- Custom Hooks for handling HTTP requests.  
- Modular design with highly reusable components.
- Component-level styling using SCSS.
- Implementation of the `children` prop for flexible modals and buttons.
- Responsive and accessible user experience (UX).

</details>

---

<details>
<summary><b>⚛️ React Logic & Structure (Frontend)</b></summary>

- **`useState`**: Management of inputs, errors, modals, and user data.
- **`useEffect`**: Initial user fetching and state synchronization.
- **`react-hook-form`**: Form data capture and validation handling.
- **`zod`**: Declarative and reusable data schemas for validation.
- **`useUsersCrud`**: Custom hook to manage all HTTP requests (GET, POST, PUT, PATCH, DELETE).
- **`children` Prop**: Implementation for flexible modals, buttons, and reusable components.
- **Custom Components.**: `UserCard`, `Form`, `Modal`, `LoadingScreen`, `Pagination`, `UserContent`.

</details>

---

<details>
<summary><b>🧑‍💻 User Experience (Frontend)</b></summary>

- Animated Carousel Loader: Featuring randomly styled user cards (placeholder state) during data fetching.
- Data-driven User Cards: Dynamic rendering of user profiles with pre-established data from the API/JSON source.
- Button-based Pagination: Efficient navigation displaying six users per page to optimize readability.
- Dynamic Form States: Seamless transition between "Create" and "Edit" modes within the same component.
- Clear Input Validation: Real-time feedback with customized error messages for a better UX flow.
- Action Confirmation Modals: Visual feedback and confirmation triggers after creating, editing, or deleting a user.
- Responsive Design: Fully optimized layout for desktop, tablet, and mobile devices.
- Fluid Interaction: Smooth transitions and immediate visual feedback for all user actions.

</details>

---

<details>
<summary><b>🗂️ Project Structure</b></summary>

```bash
📁 Full Stack-User-Management/
|   ├── 📁 backend/
│   |    └── 📁 node_modules/
│   |    └── 📁 src/
│   |    |    └── 📁 controllers
|   |    |    |    └── users.controllers.js
│   |    |    └── 📁 db
|   |    |    |    └── connect.js
│   |    |    └── 📁 models
|   |    |    |    └── user.model.js
│   |    |    └── 📁 routes
|   |    |    |    └── 📁 api
|   |    |    |    |    └── index.js
|   |    |    |    |    └── users.routes.js
|   |    |    |    └── auth.routes.js
|   |    |    |    └── index.js
|   |    |    └── app.js
|   |    |    └── server.js
│   |    └── .env
│   |    └── .env.example
│   |    └── package-lock.json
│   |    └── package.json
|   ├── 📁 frontend/
│   |    └── 📁 node_modules/
│   |    └── 📁 public/
│   |    └── 📁 src/
│   |    └── 📁 assets/
│   |    └── 📁 components/
|   |    |    └── Form.jsx
|   |    |    └── LoadingScreen.jsx
|   |    |    └── Modal.jsx
|   |    |    └── Pagination.jsx
|   |    |    └── UserCard.jsx
|   |    |    └── UserContent.jsx
│   |    └── 📁 hooks/
|   |    |   └── useCrud.jsx
|   |    |   └── useModal.jsx
|   |    |   └── usePagination.jsx
│   |    └── 📁 lib/
│   |    |   └── utils.js
│   |    └── 📁 styles/
│   |    |   └── App.css
|   |    |   └── Form.css
|   |    |   └── LoadingScreen.css
|   |    |   └── Modal.scss
|   |    |   └── Pagination.css
|   |    |   └── UserCard.css
|   |    |   └── UserContent.css
|   |    └── App.jsx
|   |    └── index.css
|   |    └── main.jsx
│   |    └── .env
│   |    └── .env.example
│   |    └── eslint.config.js
│   |    └── index.html
│   |    └── package-lock.json
│   |    └── package.json
│   |    └── vite.config.js
|   ├── .gitignore
|   ├── README.md
```

</details>

---

## 🚀 Local Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Clic-stack/fullstack-user-management.git
cd fullstack-user-management
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a `.env` file based on `.env.example` and configure your PostgreSQL credentials.
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
# Create a `.env` file based on `.env.example` with your API URL.
```

---

🔗 Project Links
**🚀 Live Demo:**https://usercrud-fullstack.netlify.app

**⚙️ API Server:**https://users-crud-api-gikf.onrender.com/api/users

**📄 Postman Documentation:**https://documenter.getpostman.com/view/48309056/2sB3WtsJn4

---

## 🎨 Author
Clio Salgado – Full-Stack Developer & Data Science for Business Student. This project showcases my transition into professional software development, merging data analysis precision with robust backend infrastructure.

🔽 **Versión en Español** 🔽

# 👥 Full-Stack User Management System: De Prototipo a Infraestructura Profesional

Este repositorio representa la evolución técnica de un sistema de gestión de usuarios, transitando de un entorno de desarrollo local (simulado con **JSON Server**) hacia una arquitectura desacoplada profesional con **persistencia real en PostgreSQL**.

<img width="1172" height="962" alt="image" src="https://github.com/user-attachments/assets/3c059985-12f5-4b4c-b37d-b15beba50fa1" />

---

📊 Entity Relationship Diagram (ERD)

``` mermaid
erDiagram
    USER {
        int id PK
        string first_name
        string last_name
        string email UK
        string password
        date birthday
        string image_url
    }
```
---

## 🚀 La Historia del Proyecto (Evolución Técnica)

El proyecto nació como una aplicación SPA en React enfocada en el manejo de estados complejos y validaciones en el cliente. Sin embargo, para cumplir con los estándares de la industria y aplicar mis conocimientos en **Data Science para Negocios**, decidí escalar el proyecto:

1.  **Fase 1 (Frontend Mastery):** Construcción de la interfaz con Vite y React, implementando hooks personalizados para la lógica de negocio y validaciones estrictas con **Zod**.
2.  **Fase 2 (Backend Migration):** Sustitución del servidor simulado por una **API RESTful propia** construida con **Node.js y Express**.
3.  **Fase 3 (Persistencia Real):** Implementación de una base de datos **PostgreSQL** mediante el ORM **Sequelize**, asegurando que los datos no solo se consuman, sino que se gestionen de forma segura y escalable.

---

## 🏗️ Arquitectura del Sistema

El proyecto es un **Monorepo** que integra dos componentes fundamentales:

### 🎨 Frontend (Client)
Ubicado en la carpeta `/frontend`, este cliente se enfoca en una experiencia de usuario (UX) fluida y segura.
* **Validaciones:** Esquemas de datos con **Zod** y **React Hook Form**.
* **Componentes:** Arquitectura modular con componentes reutilizables (Modales, Loaders, Formularios dinámicos) usando la propiedad `children`.
* **Paginación:** Sistema personalizado para optimizar la carga de datos desde la API.
* **Estilos:** Diseño responsivo y moderno con **SCSS**.

### ⚙️ Backend (API)
Ubicado en la carpeta `/backend`, este servidor gestiona la lógica de negocio y la integridad de los datos.
* **Servidor:** API REST construida con **Node.js** y **Express**.
* **Base de Datos:** Relacional (**PostgreSQL**) gestionada a través de **Sequelize**.
* **Seguridad:** Manejo de variables de entorno con **Dotenv** y controladores modulares para un código limpio.
* **Documentación:** Endpoints testeados y documentados en **Postman**.

---

## 🧪 Tecnologías Usadas

| Área | Herramientas |
| :--- | :--- |
| **Frontend** | React, Vite, Axios, Zod, React Hook Form, SCSS |
| **Backend** | Node.js, Express, Sequelize, PostgreSQL |
| **Tools** | Git, Postman, Dotenv, ESLint |
| **Deployment** | Render (API), Netlify (Frontend) |

---

## 🎯 Objetivos del Proyecto
1. Persistencia y Gestión de Datos (Foco Principal)
Migración a PostgreSQL: Evolucionar de un almacenamiento volátil y limitado (JSON Server) a una base de datos relacional robusta (PostgreSQL), garantizando la integridad, seguridad y permanencia de la información.

Modelado con Sequelize (ORM): Implementar esquemas de datos eficientes para la entidad "Usuario", asegurando validaciones a nivel de base de datos y optimizando las consultas (Queries) para entornos de producción.

Arquitectura de Datos para Negocios: Diseñar una estructura de tablas escalable que permita el manejo masivo de registros, demostrando la capacidad de gestionar el ciclo de vida del dato desde su origen hasta su persistencia.

2. Desarrollo de API y Lógica de Servidor
Arquitectura Desacoplada: Construir un sistema donde el Frontend (React) y el Backend (Node.js) operen de forma independiente pero perfectamente sincronizada a través de una API RESTful propia.

Seguridad y Entorno: Gestionar variables sensibles mediante Dotenv y asegurar procesos de despliegue listos para la nube (Render).

Estandarización: Documentar el sistema mediante Postman, facilitando la interoperabilidad y el consumo de datos por parte de otros servicios.

3. Frontend de Alto Rendimiento y UX
Validación de Datos en el Cliente: Utilizar Zod y React Hook Form para garantizar que la información sea íntegra antes de ser procesada por la API, reduciendo la carga en el servidor.

Componentización y Escalabilidad: Desarrollar una interfaz modular mediante Custom Hooks (useUsersCrud, usePagination) y componentes reutilizables con la propiedad children.

Experiencia de Usuario (UX): Crear un diseño 100% responsivo con SCSS que proporcione retroalimentación visual inmediata a través de estados de carga y modales.

---

🛠️ Habilidades Técnicas Reforzadas
1. Desarrollo Backend e Ingeniería de Datos
* Diseño de APIs RESTful: Creación de servicios escalables con Node.js y Express, manejando correctamente los métodos HTTP y códigos de estado.

* Gestión de Bases de Datos Relacionales: Implementación de persistencia sólida mediante PostgreSQL, pasando de modelos simples (JSON) a estructuras SQL profesionales.

* Manejo de ORM (Sequelize): Modelado de entidades, definición de tipos de datos y ejecución de consultas (Queries) asíncronas para la manipulación de registros.

* Seguridad de Entorno: Configuración de variables sensibles con Dotenv, asegurando que las credenciales de la base de datos nunca se expongan en el control de versiones.

2. Desarrollo Frontend y Lógica de Aplicación
* Arquitectura de Componentes en React: Construcción de interfaces modulares utilizando Vite, optimizando el renderizado y la reutilización de código mediante la propiedad children.

* Gestión de Estado y Efectos: Dominio de hooks fundamentales (useState, useEffect) para la sincronización de datos entre la UI y el servidor.

* Validación de Datos (Zod & React Hook Form): Implementación de una capa de validación declarativa que asegura que la información sea correcta antes de ser enviada a PostgreSQL.

* Consumo de APIs con Axios: Manejo de peticiones asíncronas, interceptación de errores y retroalimentación visual al usuario.

3. Arquitectura y DevOps
* Gestión de Monorepos: Organización profesional de archivos separando Frontend y Backend en un solo repositorio controlado.

* Estrategias de Despliegue: Configuración y puesta en producción de servicios en Render (Backend) y Netlify (Frontend), incluyendo el manejo de builds.

* Documentación de Software: Uso de Postman para documentar endpoints, permitiendo que otros desarrolladores o analistas de datos entiendan la estructura de la API.

---

<details>
<summary><b>📁 Endpoints de la API (Backend)</b></summary>

| Método | Endpoint        | Función |
|--------|-----------------|---------|
| GET    | `/users`        | Obtener todos los usuarios |
| POST   | `/users`        | Crear un nuevo usuario |
| GET    | `/users/:id`    | Obtener un usuario por ID |
| PUT    | `/users/:id`    | Actualizar un usuario por ID |
| DELETE | `/users/:id`    | Eliminar un usuario por ID |

</details>

---

<details>
<summary><b>🧠 Modelo de Usuario (Backend)</b></summary>

| Campo       | Tipo     | Ejemplo              |
|-------------|----------|----------------------|
| id          | Entero   | 1                    |
| first_name  | String   | Jesús                |
| last_name   | String   | Fernández            |
| email       | String   | jsfdz@example.com    |
| password    | String   | 12345678             |
| birthday    | Date     | 03/05/1992           |
| image_url   | String   | "https://ui-avatars.com/api/?name=Jesus+Fernandez" |

</details>

---

<details>
<summary><b>⚡ APIs y funcionalidades externas (Frontend)</b></summary>

| Tecnología / API              | Funcionalidad |
|-------------------------------|---------------------------|
| **JSON Server**               | Simulación de API RESTful para usuarios. |
| **Custom Hook(useUsersCrud)** | Encapsula lógica de peticiones HTTP. |
| **Custom Hook(usePagination)**| Encapsula lógica para la paginación en los usuarios. |
| **Custom Hook(useModal)**     | Encapsula lógica para el funcionamiento del modal. |

</details>

---

<details>
<summary><b>🧠Funcionalidades principales (Frontend)</b></summary>

- Listado de usuarios con tarjetas personalizadas.
- Formulario para crear y editar usuarios:

    **`email`**
    **`password`**
    **`first_name`**
    **`last_name`**
    **`birthday`**
    **`image_url`**(opcional)

- Validaciones con `zod` y `react-hook-form`.
- Modales de confirmación tras acciones exitosas.
- Hooks personalizados para peticiones HTTP.  
- Diseño modular y componentes reutilizables.
- Estilos SCSS por componente.
- Propiedad `children` para modales y botones.
- Experiencia responsiva y accesible.

</details>

---

<details>
<summary><b>⚛️ Lógica y estructura con React (Frontend)</b></summary>

- **`useState`**: Control de inputs, errores, modales y usuarios.
- **`useEffect`**: Carga inicial de usuarios y sincronización de estados.
- **`react-hook-form`**: Captura y validación de datos del formulario.
- **`zod`**: Validaciones declarativas y reutilizables.
- **`useUsersCrud`**: Custom hook para manejar todas las peticiones HTTP (GET, POST, PUT, PATCH, DELETE).
- **Propiedad `children`**: Para modales, botones y componentes reutilizables.
- **Componentes personalizados.**: `UserCard`, `Form`, `Modal`, `LoadingScreen`, `Pagination`, `UserContent`.

</details>

---

<details>
<summary><b>🧑‍💻 Experiencia del usuario (Frontend)</b></summary>

- Loader con un carrusel animado que contiene tarjetas de usuario creadas al azar(sin mostrar datos).
- Carga de los datos en tarjetas de usuarios, cada usuario contiene sus respectivos datos preestablecidos en el archivo json.
- Paginación en botones que muestra seis usuarios por página.
- Formulario dinámico que cambia entre modo creación y edición.
- Validaciones claras con mensajes personalizados.
- Modales de confirmación tras crear, editar o eliminar.
- Diseño responsivo para escritorio y móvil.
- Interacción fluida y retroalimentación visual inmediata.

</details>

---

<details>
<summary><b>🗂️ Estructura del proyecto</b></summary>

```bash
📁 Full Stack-User-Management/
|   ├── 📁 backend/
│   |    └── 📁 node_modules/
│   |    └── 📁 src/
│   |    |    └── 📁 controllers
|   |    |    |    └── users.controllers.js
│   |    |    └── 📁 db
|   |    |    |    └── connect.js
│   |    |    └── 📁 models
|   |    |    |    └── user.model.js
│   |    |    └── 📁 routes
|   |    |    |    └── 📁 api
|   |    |    |    |    └── index.js
|   |    |    |    |    └── users.routes.js
|   |    |    |    └── auth.routes.js
|   |    |    |    └── index.js
|   |    |    └── app.js
|   |    |    └── server.js
│   |    └── .env
│   |    └── .env.example
│   |    └── package-lock.json
│   |    └── package.json
|   ├── 📁 frontend/
│   |    └── 📁 node_modules/
│   |    └── 📁 public/
│   |    └── 📁 src/
│   |    └── 📁 assets/
│   |    └── 📁 components/
|   |    |    └── Form.jsx
|   |    |    └── LoadingScreen.jsx
|   |    |    └── Modal.jsx
|   |    |    └── Pagination.jsx
|   |    |    └── UserCard.jsx
|   |    |    └── UserContent.jsx
│   |    └── 📁 hooks/
|   |    |   └── useCrud.jsx
|   |    |   └── useModal.jsx
|   |    |   └── usePagination.jsx
│   |    └── 📁 lib/
│   |    |   └── utils.js
│   |    └── 📁 styles/
│   |    |   └── App.css
|   |    |   └── Form.css
|   |    |   └── LoadingScreen.css
|   |    |   └── Modal.scss
|   |    |   └── Pagination.css
|   |    |   └── UserCard.css
|   |    |   └── UserContent.css
|   |    └── App.jsx
|   |    └── index.css
|   |    └── main.jsx
│   |    └── .env
│   |    └── .env.example
│   |    └── eslint.config.js
│   |    └── index.html
│   |    └── package-lock.json
│   |    └── package.json
│   |    └── vite.config.js
|   ├── .gitignore
|   ├── README.md
```

</details>

---

## 🚀 Instalación y Configuración Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Clic-stack/fullstack-user-management.git
cd fullstack-user-management
```

### 2. Configuración del Backend
```bash
cd backend
npm install
# Crea un archivo `.env` basado en `.env.example` y configura tus credenciales de PostgreSQL
npm start
```

### 3. Configuración del Frontend
```bash
cd ../frontend
npm install
# Crea un archivo `.env` basado en `.env.example` con la URL de tu API
npm run dev
```

---

🔗 Enlaces del Proyecto
**🚀 App en vivo:**https://usercrud-fullstack.netlify.app

**⚙️ API Server:**https://users-crud-api-gikf.onrender.com/api/users

**📄 Documentación Postman:**https://documenter.getpostman.com/view/48309056/2sB3WtsJn4

---

## 🎨 Autora
Clio Salgado - Desarrolladora Full-Stack & Estudiante de Ciencia de Datos para Negocios. Este proyecto es testimonio de mi transición hacia el desarrollo de software profesional, combinando la precisión del análisis de datos con la robustez del desarrollo backend.


