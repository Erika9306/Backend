# Proyecto Backend 
 En el proyecto se realiza gestión de usuarios, relaciones entre colecciones, gestión de la subida y el borrado de imágenes de Cloudinary, etc.

## Tecnologías usadas:
    - NodeJs
    - Express
    - Mongoose
    - MongoDB
    - Cloudinary
    - Insomnia / Postman
    - Json Web Tokens, Bcrypt
    - Multer
    - VS Code

## Requisitos:
 - por defecto solo hay un rol "user" y el rol de "admin" se modifica directamente en la base de datos.  
 - el "user" puede gestionar y eliminar solo su propia cuenta.
 - el "admin" tiene más privilegios, como eliminar otros usuarios, cambiar roles de otros usuarios, sin embargo, no puede eliminar su propia cuenta.
- cada "user" puede subir imagenes y borrarlos de la plataforma.
- al eliminar la cuenta, se debe eliminarse toda la información de Cloudinary.
- los datos no se pueden duplicar.

## Instalación:
 - para poder correr el programa hay que tener instalado el NodeJs u sus dependecias.


## Autor:
 - Nombre: Erika Bausyte
 - Proyecto Backend para: ThePower



