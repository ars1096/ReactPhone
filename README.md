Bibliotecas añadidas: 
- Bootstrap
- firebase
- Router

- Cosas extra realizadas:
- Crear,Delete,Read de una base de datos externa para leer la información mediante el uso de la base de datos no relacional firebase
- Se ha definido una ruta para la imagen por defecto ya que esta es almacenada en firebase para la referencia de la imagen... se puede cambiar y poner la que queráis, lo que he hecho ha sido subir las fotos a cloudinary para obtener este enlace externo y referenciarlas... Se podría hacer un push a cloudinary luego un await y  haber hecho un get para obtener la url de la foto que escoja el usuario para subirlo desde el formulario y obtener la respuesta para así luego almacenarlo en firebase ya lo he hecho en otra ocasión con react native pero andaba un poco justo dde tiempo con cosas de la uni perdón.

Pasos:
1) Descargar codigo de github
2) Abrir en entorno de desarrollo, una terminal y ejecutar en npm i para obtener dependencias
3) Añadir un fichero firebase.js al mismo nivel que App.js e Index.js y pegar el contenido del firebase.txt (lo pase a un txt porque .js piensa que es un potencial virus el gmail) que se adjunto en el correo para poder realizar conexiones con firebase ya que este contiene los datos de conexión
4) npm start  y FIN
