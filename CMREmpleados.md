# BACKEND

## Recuperar todos los empleados

GET https://crm-empleados.onrender.com/api/empleados
Headers: {
    Authorization -> TOKEN
}
<br>Respuesta: Array con todos los empleados

## Recuperar un único empleado

GET https://crm-empleados.onrender.com/api/empleados/EMPLEADOID
<br>Respuesta: El empleado requerido

## Creación de empleados

POST https://crm-empleados.onrender.com/api/empleados
<br>Body: nombre, apellidos, email, telefono, departamento, salario
<br>Respuesta: El nuevo empleado creado

## Editar un empleado

PUT https://crm-empleados.onrender.com/api/empleados/EMPLEADOID
<br>Body: nombre, apellidos, email, telefono, departamento, salario
<br>Respuesta: El empleado actualizado

## Borrar un empleado

DELETE https://crm-empleados.onrender.com/api/empleados/EMPLEADOID
Authorization -> TOKEN
<br>Respuesta: El empleado borrado

## Registro usuarios
POST https://crm-empleados.onrender.com/api/usuarios/registro
<br>Body: email, username, password
<br>Respuesta: sucess

## FRONTEND

- Instalar el grid de Bootstrap
- Instalar `primeNg`.
- Crear interfaz para los empleados

### Servicio Empleados

- Modificar la configuración de la app de angular para poder lanzar peticiones HTTP
- Inyectar `HttpClient`
- Crear la `baseUrl`
- Crear un método para recuperar todos los empleados. 

### ListaEmpleados

- Ruta: /empleados -> ListaEmpleados
- Cuando arranca el componente recuperamos todos los empleados 

### CardEmpleado

```html
<card-empleado [empleado]="EL EMPLEADO QUE SEA"></card-empleado>
```

## Registro Usuarios

- Creación de la interfaz Usuario (_id, username, email, password, createdAt, updatedAt)
- Creación del servicio Usuarios
    - Función registro
- Creación de la página RegistroUsuarios
    - ruta: /registro
    - Formulario para poder incluir todos los datos del registro
    - En el submit del formulario lanzamos la petición de registro
    - FINAL: Observar qué me retornar como respuesta

## Detalle de empleado

- Servicio de Empleados
    - función **getById**

GET https://crm-empleados.onrender.com/api/empleados/EMPLEADOID
Headers: Authorization -> Token
<br>Respuesta: El empleado requerido

- Creación de la página DetalleEmpleado
- Ruta: /empleados/EMPLEADOID
- Cuando carga el componente:
    1. Recuperar el ID del Empleado a mostrar
    2. A partir de ese ID recuperar el empleado del back
    3. Pintar los datos del empleado

TODO
- Botón para ver el detalle del empleado desde la CARD
- Barra de navegación para poder moverme entre las diferentes páginas (Lista empleados, nuevo empleado, registro, login, logout)