# Project Zomboid - Dead State

Bienvenido al proyecto "Dead State", una aplicación web inspirada en el videojuego Project Zomboid. Esta aplicación está diseñada para proporcionar información sobre las reglas de las facciones, enlaces a Discord, y más. Construida con React, esta aplicación también presenta un carrusel interactivo con videos y imágenes relacionados con el juego.

## Características

- **Carrusel Interactivo**: Un carrusel que muestra videos de YouTube e imágenes con leyendas divertidas sobre el juego.
- **Reproducción Automática de Videos**: Los videos del carrusel se reproducen automáticamente al pasar el ratón sobre ellos.
- **Reglas de Facción**: Una página dedicada a las reglas de facción con un fondo personalizado y un botón para regresar a la página principal.
- **Enlaces Importantes**: Enlaces a las reglas del servidor, el canal de Discord, y la IP del servidor.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Responsive Carousel**: Para el carrusel interactivo.
- **Animate.css**: Para las animaciones de entrada.
- **GitHub Pages**: Para el despliegue de la aplicación.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clona el repositorio:
    ```bash
    git clone git@github.com:Branduwu/pagezomboid.git
    cd pagezomboid
    ```

2. Instala las dependencias:
    ```bash
    npm install --legacy-peer-deps
    ```

3. Inicia la aplicación:
    ```bash
    npm start
    ```

La aplicación estará disponible en `http://localhost:3000`.

## Despliegue

Este proyecto está configurado para desplegarse en GitHub Pages. Sigue estos pasos para desplegar la aplicación:

1. Asegúrate de tener el repositorio remoto configurado:
    ```bash
    git remote add origin git@github.com:Branduwu/pagezomboid.git
    ```

2. Realiza un commit de tus cambios:
    ```bash
    git add .
    git commit -m "Deploying application"
    git push -u origin main
    ```

3. Despliega la aplicación:
    ```bash
    npm run deploy
    ```

La aplicación se desplegará en `https://Branduwu.github.io/pagezomboid`.

## Estructura del Proyecto


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) /src
/assets
imagen2.png
imagen3.png
imagen4.png
imagenfondoreglas.jpg
discord.png
rules.png
server.png
image.jpg
HomePage.js
HomePage.css
RulesPage.js
RulesPage.css
App.js
App.css
index.js


## Contribuyendo

Las contribuciones son bienvenidas. Por favor, sigue los siguientes pasos:

1. Realiza un fork del proyecto.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza commit de tus cambios (`git commit -m 'Agregar nueva funcionalidad'`).
4. Empuja a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre una solicitud de extracción.

## Licencia

Este proyecto está bajo la licencia MIT.

---

Gracias por visitar nuestro proyecto "Dead State". ¡Esperamos que disfrutes usando la aplicación tanto como nosotros disfrutamos creándola!

