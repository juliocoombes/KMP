1️⃣ Ir a la carpeta del proyecto

En la terminal:

cd ruta/donde/clonaste/el/proyecto


Por ejemplo:

cd C:\Proyectos\MiAppViteReact

2️⃣ Verificar que tengas Node instalado
node -v


Si no te devuelve nada o sale error, tenés que instalar Node.js LTS desde la web oficial.
Ideal que sea versión 18 o superior.

3️⃣ Instalar dependencias

En la raíz del proyecto (donde está package.json):

npm install


🔹 Esto baja todo lo que el proyecto necesita (incluido Vite, React, @vitejs/plugin-react, etc.).
🔹 Hacelo una sola vez después de clonar.

Si el proyecto usa otro manejador de paquetes y ves alguno de estos archivos:

yarn.lock → usarías yarn install

pnpm-lock.yaml → usarías pnpm install

Pero si no sabés, npm install suele estar perfecto.

4️⃣ Levantar el servidor de desarrollo

Una vez terminado el npm install:

npm run dev
