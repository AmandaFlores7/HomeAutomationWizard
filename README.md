# Home Automation Wizard

## Actualización en Raspberry
Para actualizar con los nuevos cambios de este proyecto seguir los siguientes pasos:

1. Borrar el directorio `/dist`

2. Crear nuevamente el directorio `/dist` a través del comando `ng build`

3. Existe un archivo importante `.htaccess` en el directorio principal, el cual debe ser copiado al interior de `HAW-FED/dist/haw-fed` (donde se genera los archivos del proyecto a deployar)

4. Ahora, dentro de la Raspberry, si es primera vez que se compila el proyecto, lo primero es clonar el proyecto en la raiz de archivos. Si ya está clonado, pasar al siguiente paso.

5. Relizar un `git pull` para asegurarnos tener los ultimos cambios

6. Si ya esta instalado Apache2, seguir con los siguientes pasos, sino continuar con este link hasta tenerlo instalado [Instalar Apache2](https://singleboardblog.com/install-apache-server-on-raspberry-pi/).

7. Remover los archivos existentes `sudo rm -r /var/www/html/*`

8. **Copiar** los archivos del dist a la carpeta recien vaciada `sudo cp -r /home/ha_wizard/HAWHAW/HAW-FED/dist/haw-fed/* /var/www/html/`. (cambiar `ha_wizard` por el nombre de raiz de la Raspberry, `HAWHAW` por el nombre del proyecto si este es distinto)

9. Reiniciar el servicio con los siguientes comando: `sudo systemctl reload apache2` y `sudo systemctl restart apache2`

## Desarrollo
Para relizar avances sobre el proyecto, de manera estratégica se creo unas Constantes para el manejo de IPs, asi para trabajar de manera local puedo cambiar la ip desde aca, para que funcione a traves de todo el proyecto y sus servicios. Esto esta en `HAW-FED/src/app/app.component.ts` al final de este archivo.