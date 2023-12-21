# Home Automation Wizard

## Actualización en Raspberry

### Desde tu laptop/computadora personal donde estes trabajando
Para actualizar con los nuevos cambios de este proyecto seguir los siguientes pasos:

1. Borrar el directorio `/dist`

2. Crear nuevamente el directorio `/dist` a través del comando

```bash
    ng build
```

3. Existe un archivo importante `.htaccess` en el directorio principal, el cual debe ser copiado al interior de `HAW-FED/dist/haw-fed` (donde se genera los archivos del proyecto a deployar)

### Desde la Raspberry
1. Primera consideracion, el directorio raiz privisto aca es `ha_wizard`, si es distinto cambiar este.
2. Ahora, dentro de la Raspberry, si es primera vez que se compila el proyecto, lo primero es clonar el proyecto en la raiz de archivos. Si ya está clonado, pasar al siguiente paso.

```bash
    git clone https://github.com/AmandaFlores7/HomeAutomationWizard.git /home/ha_wizard/haw-frontend
```

3. Relizar un `git pull` para asegurarnos tener los ultimos cambios (si el proyecto esta alojado en otro directorio, reemplazar `/home/ha_wizard/haw-frontend`)

```bash
    cd /home/ha_wizard/haw-frontend
```

```bash
    git pull
```

4. Si ya esta instalado Apache2, seguir con los siguientes pasos, sino continuar con este link hasta tenerlo instalado [Instalar Apache2](https://singleboardblog.com/install-apache-server-on-raspberry-pi/).

5. Remover los archivos existentes

```bash
    sudo rm -r /var/www/html/*
```

6. **Copiar** los archivos del dist a la carpeta recien vaciada. (cambiar `ha_wizard` por el nombre de raiz de la Raspberry, `haw-frontend` por el nombre del proyecto si este es distinto)

```bash
    sudo cp -r /home/ha_wizard/haw-frontend/HAW-FED/dist/haw-fed/* /var/www/html/
```

7. Reiniciar el servicio con los siguientes comando:

```bash
    sudo systemctl reload apache2
```

```bash
    sudo systemctl restart apache2
```

## Desarrollo
Para relizar avances sobre el proyecto, de manera estratégica se creo unas Constantes para el manejo de IPs, asi para trabajar de manera local puedo cambiar la ip desde aca, para que funcione a traves de todo el proyecto y sus servicios. Esto esta en `HAW-FED/src/app/app.component.ts` al final de este archivo.