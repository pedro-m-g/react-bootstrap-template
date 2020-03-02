# React Bootstrap Template

Proyecto generado con la herramienta [Create React App](https://github.com/facebook/create-react-app).

Template de app React con las siguientes características instaladas:
- [SCSS](https://sass-lang.com/guide)
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
- [React Icons](https://react-icons.netlify.com/#/icons/fa)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

## Instalación

Para instalar el proyecto, ejecuta el comando `yarn`. Se pueden consultar las instrucciones para
instalar yarn en el [sitio oficial](https://classic.yarnpkg.com/en/docs/install/).

## Scripts

Desde el directorio de proyecto, se pueden ejecutar los siguientes comandos:

### `yarn start`

Inicia el servidor de desarrollo.<br />
El comando abrirá la app en tu navegador predeterminado.

Las páginas de la app se actualizarán conforme se edita el código.<br />
Los errores que tenga el código aparecerán en consola.

### `yarn test`

Inicia el servidor de pruebas.<br />
Ver la sección de [pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `yarn build`

Genera una versión de producción de la app en el directorio `build`.<br />
Ver la sección de [despliegue](https://facebook.github.io/create-react-app/docs/deployment) par amás información.

### `yarn eject`

**Nota: Operación irreversible**

Retirar estos scripts del proyecto. Esto puede ser util si se desea integrar herramientas externas incompatibles con
esta configuración.

Se pueden agregar más scripts en la entrada "scripts" del archivo `package.json`.

## Estructura del proyecto

- **public/**: Contiene recursos estáticos de la app, incluyendo los archivos `index.html` y `favicon.ico`.
- **src/**: Contiene el código fuente de la app.
    - **assets/**: Contiene imágenes y SCSS.
    - **components/**: Contiene los componentes React de la app.
    - **views/**: Contiene las vistas asignadas a rutas de React Router.
    - **hooks/**: Contiene React Hooks, los cuales son funciones reutilizables entre componentes. Para más
        información consulte la [documentación de React Hooks](https://es.reactjs.org/docs/hooks-intro.html).
    - **services/**: Contiene servicios utilizados por la app.


