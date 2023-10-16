export const rutas ={
    "/aplicacion": {
        "titulo": "Menu Principal",
        "items": [
            {
                "titulo": "Sensores",
                "link": "/aplicacion/sensores"
            },
            {
                "titulo": "Actuadores",
                "link": "/aplicacion/actuadores"
            },
            {
                "titulo": "Wiki IoT",
                "link": "/aplicacion/wikiiot"
            },
            {
                "titulo": "Prueba tus Conocimientos",
                "link": "/quiz"
            },
            {
                "titulo": "Conoce Nuestro Proyecto",
                "link": "/aplicacion"
            }
        ]
    },
    "/quiz": {
        "titulo": "Quiz",
        "items": [
            {
                "titulo": "Sensores",
                "link": "/quiz/sensores"
            },
            {
                "titulo": "Actuadores",
                "link": "/quiz/actuadores"
            },
            {
                "titulo": "IoT",
                "link": "/quiz/iot"
            }
        ],
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion"
            }
        }
    },
    "/quiz/sensores": {
        "titulo": "Quiz Sensores",
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/quiz"
            }
        }
    },
    "/quiz/actuadores": {
        "titulo": "Quiz Actuadores",
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/quiz"
            }
        }
    },
    "/quiz/iot": {
        "titulo": "Quiz IoT",
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/quiz"
            }
        }
    },
    "/aplicacion/sensores": {
        "titulo": "Sensores",
        "items": [
            {
                "titulo": "Temperatura",
                "link": "/aplicacion/sensores/temperatura"
            },
            {
                "titulo": "Humedad",
                "link": "/aplicacion/sensores/humedad"
            },
            {
                "titulo": "Luz",
                "link": "/aplicacion/sensores/luz"
            },
            {
                "titulo": "Aire",
                "link": "/aplicacion/sensores/aire"
            }
        ],
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion"
            }
        }
    },
    "/aplicacion/actuadores": {
        "titulo": "Actuadores",
        "items": [
            {
                "titulo": "Camara Raspberry",
                "link": "/aplicacion/actuadores/camara_r"
            },
            {
                "titulo": "Luces del Hogar",
                "link": "/aplicacion/actuadores/luces"
            },
            {
                "titulo": "Control de Puerta",
                "link": "/aplicacion/actuadores/puerta"
            }
        ],
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion"
            }
        }
    },
    "/aplicacion/wikiiot": {
        "titulo": "Wiki IoT",
        "items": [
            {
                "titulo": "¿Qué es IoT?",
                "link": "/aplicacion/wikiiot/queesiot"
            },
            {
                "titulo": "¿Cómo funciona?",
                "link": "/aplicacion/wikiiot/comofunciona"
            },
            {
                "titulo": "¿Qué es un sensor?",
                "link": "/aplicacion/wikiiot/queesunsensor"
            },
            {
                "titulo": "¿Qué es un actuador?",
                "link": "/aplicacion/wikiiot/queesunactuador"
            }
        ],
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion"
            }
        }
    },
    "/aplicacion/sensores/temperatura": {
        "titulo": "Sensor de Temperatura",
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/sensores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/sensores/temperatura/ver"
            }
        },
        "imagenes": [
            {
                "ruta": "../../../../assets/img/dht11.jpg",
            },
            {
                "ruta": "../../../../assets/img/dht11.jpg",
            }
        ],
        "texto": [
            {
                "parrafo": "En este caso se utiliza el sensor DHT 11 que es ampliamente utilizado para medir la temperatura ambiente. Este sensor digital de bajo costo es conocido por su precisión y facilidad de uso. A través de su componente de termistor, el DHT11 detecta la temperatura del entorno en el que se encuentra y la convierte en una señal digital que puede ser leída por microcontroladores, como Arduino, Raspberry Pi y otros dispositivos electrónicos."
            },
        ]
        
    },
    "/aplicacion/sensores/temperatura/ver":{
        "titulo": "Gráfico de temperatura",
        "botones": {
            "cantidad": 1,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/sensores"
            }
        },
        "datosSensor":{
            "tipoSensor":'Sensor de temperatura',
            "tituloGrafico": 'Temperatura en C°',
            "websocketURL": 'ws://192.168.2.2:8000/temperatura'
        }
    },
    "/aplicacion/sensores/humedad": {
        "titulo": "Sensor de Humedad",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/sensores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/sensores/humedad/ver"
            }
        },
        "imagenes": [
            {
                "ruta": "../../../../assets/img/dht11.jpg",
            },
            {
                "ruta": "../../../../assets/img/dht11.jpg",
            }
        ],
        "texto": [
            {
                "parrafo": "El sensor DHT11 es un dispositivo ampliamente utilizado para medir la humedad relativa del aire en su entorno. Este sensor digital de bajo costo se destaca por su precisión y facilidad de uso en aplicaciones que requieren el monitoreo de la humedad del aire. El DHT11 utiliza un sensor capacitivo para medir la humedad relativa y luego convierte esa lectura en una señal digital que puede ser fácilmente interpretada por microcontroladores y otros dispositivos electrónicos. "
            },
        ]
    },
    "/aplicacion/sensores/humedad/ver":{
        "titulo": "Gráfico de humedad",
        "botones": {
            "cantidad": 1,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/sensores"
            }
        },
        "datosSensor":{
            "tipoSensor":'Sensor de humedad',
            "tituloGrafico": 'humedad en C°',
            "websocketURL": 'ws://192.168.2.2:8000/humedad'
        }
    },
    "/aplicacion/sensores/luz": {
        "titulo": "Sensor de Luminocidad",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/sensores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/sensores/luz/ver"
            }
        },
        "imagenes": [
            {
                "ruta": "../../../../assets/img/fotoresistencia.jpg",
            },
            {
                "ruta": "../../../../assets/img/fotoresistencia.jpg",
            }
        ],
        "texto": [
            {
                "parrafo": "Una fotoresistencia, también conocida como LDR (Light-Dependent Resistor), es un componente electrónico sensible a la luz que cambia su resistencia eléctrica en respuesta a la cantidad de luz que incide sobre ella. Cuanta menos luz recibe, mayor es su resistencia, y viceversa. Este dispositivo se utiliza comúnmente en aplicaciones de control automático, como sensores de luz en sistemas de iluminación, exposímetros de cámaras, y en circuitos que requieren detección de luz para activar o desactivar funciones automáticamente. La fotoresistencia es útil para detectar niveles de luz ambiental y ajustar dispositivos o sistemas en consecuencia, lo que la hace valiosa en una variedad de aplicaciones que requieren control basado en la luminosidad del entorno."
            },
        ]
    },
    "/aplicacion/sensores/luz/ver":{
        "titulo": "Gráfico de nivel de luz",
        "botones": {
            "cantidad": 1,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/sensores"
            }
        },
        "datosSensor":{
            "tipoSensor":'Sensor de Luz',
            "tituloGrafico": 'Nivel de luz obtenida',
            "websocketURL": 'ws://192.168.2.2:8000/sensor-luz'
        }
    },
    "/aplicacion/sensores/aire": {
        "titulo": "Sensor de Calidad del Aire",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/sensores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/sensores/aire/ver"
            }
        },
        "imagenes": [
            {
                "ruta": "../../../../assets/img/mq135.jpg",
            },
            {
                "ruta": "../../../../assets/img/mq135.jpg",
            }
        ],
        "texto": [
            {
                "parrafo": "El sensor MQ-135 es un sensor de gas que se utiliza para detectar y medir la concentración de varios gases en el aire, como monóxido de carbono (CO), dióxido de carbono (CO2), amoníaco (NH3), metano (CH4) y otros gases peligrosos. Es ampliamente utilizado en aplicaciones de seguridad y calidad del aire, así como en proyectos de monitoreo ambiental. El sensor MQ-135 opera en función de la resistencia eléctrica que cambia en respuesta a la presencia y concentración de gases específicos. La lectura de resistencia se convierte en una señal eléctrica que puede ser interpretada para determinar la concentración de gases peligrosos en el aire. Este sensor es útil en sistemas de detección de gases tóxicos, control de calidad del aire en interiores, y proyectos de seguridad y automatización. Su versatilidad y capacidad para detectar múltiples gases lo hacen valioso en una variedad de aplicaciones relacionadas con la seguridad y el monitoreo ambiental."
            },
        ]
        
    },
    "/aplicacion/sensores/aire/ver":{
        "titulo": "Gráfico de aire",
        "botones": {
            "cantidad": 1,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/sensores"
            }
        },
        "datosSensor":{
            "tipoSensor":'Sensor de aire',
            "tituloGrafico": 'aire en C°',
            "websocketURL": 'ws://192.168.2.2:8000/calidad-aire"'
        }
    },
    "/aplicacion/actuadores/camara_r": {
        "titulo": "Camara Raspberry",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/actuadores/"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/actuadores/camara_r/probar"
            }
        },
        "imagenes": [
            {
                "ruta": "../../../../assets/img/raspicam.jpg",
            },
            {
                "ruta": "../../../../assets/img/raspicam.jpg",
            }
        ],
        "texto": [
            {
                "parrafo": "La Raspicam se refiere a una cámara diseñada específicamente para su uso con las placas Raspberry Pi, como la Raspberry Pi 3. Es un módulo de cámara de alta calidad que se conecta directamente a los puertos de la Raspberry Pi y permite a los usuarios capturar imágenes y videos de alta resolución de manera sencilla y eficiente. En este proyecto, la Raspicam actúa como una cámara IP, permitiendo la transmisión y visualización de imágenes o videos en tiempo real a través de una red, lo que facilita el monitoreo remoto y la grabación de contenido desde la Raspberry Pi."
            },
        ]
       
    },
    "/aplicacion/actuadores/camara_r/probar":{
        "titulo":"Probar cámara Raspberry Pi 3",
        "botones":{
            "cantidad":1,
            "ruta1":{
                "titulo": "Retroceder",
                "link":"/aplicacion/actuadores/camara_r/"
            }
        },
    },
    "/aplicacion/actuadores/luces": {
        "titulo": "Luces del Hogar",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/actuadores"
            },
            "ruta2": {
                "titulo": "Probar",
                "link": "/aplicacion/actuadores/luces/probar"
            }
        },
        "imagenes": [
            {
                "ruta": "../../../../assets/img/led1.jpeg",
            },
            {
                "ruta": "../../../../assets/img/led2.jpeg",
            }
        ],
        "texto": [
            {
                "parrafo": "En el contexto de IoT (Internet de las cosas), los LEDs se utilizan para indicar el estado de dispositivos o sensores, así como para proporcionar retroalimentación visual en aplicaciones de control de luces. Los LEDs pueden ser controlados de forma remota a través de una red, lo que permite encender, apagar o ajustar su brillo de manera programada o en respuesta a eventos específicos. Esto facilita el monitoreo y el control de la iluminación en aplicaciones de automatización del hogar, gestión de edificios, agricultura inteligente y otros escenarios de IoT."
            },
        ]
        
    },
    "/aplicacion/actuadores/puerta": {
        "titulo": "Control de Puerta",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/actuadores"
            },
            "ruta2": {
                "titulo": "Probar",
                "link": "/aplicacion/actuadores/puerta/probar"
            }
        },
        "imagenes": [
            {
                "ruta": "../../../../assets/img/sg90.jpeg",
            },
            {
                "ruta": "../../../../assets/img/sg90.jpeg",
            }
        ],
        "texto": [
            {
                "parrafo": "El actuador SG90 es un pequeño servo motor ampliamente utilizado en proyectos de robótica y automatización, incluidas las aplicaciones de IoT (Internet de las cosas). Este servo motor se utiliza para controlar el movimiento de puertas, ventanas, brazos robóticos y otros componentes mecánicos en maquetas y dispositivos. En el contexto de la maqueta domótica, el SG90 se utiliza para accionar la puerta, permitiendo abrir y cerrar la puerta de manera controlada y precisa."
            },
        ]
    },
    "/aplicacion/actuadores/luces/probar": {
        "titulo": "Prueba los sensores",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/actuadores/luces"
            }
        },
    },
    "/introduccion/1" : {
        "titulo": "Home Automation Wizard",
        "botones": {
            "ruta2": {
                "titulo": "Siguiente",
                "link": "/introduccion/2"
            }
        }
    },
    "/introduccion/2" : {
        "titulo": "Home Automation Wizard",
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/introduccion/1"
            },
            "ruta2": {
                "titulo": "Siguiente",
                "link": "/introduccion/3"
            }
        },
        "informacion": [
            {
                "titulo": "Conexión Inicial",
                "parrafo": "Un dispositivo (llamado cliente) se conecta a un servidor MQTT."
            },
            {
                "titulo": "Solicitud de Suscripción",
                "parrafo": "El cliente le dice al servidor a qué temas o canales quiere suscribirse para recibir información."
            },
            {
                "titulo": "Publicación de Mensajes",
                "parrafo": "Otros dispositivos (llamados editores) envían mensajes al servidor, etiquetados con un tema específico."
            },
            {
                "titulo": "Entrega de Mensajes",
                "parrafo": "El servidor reenvía los mensajes a los clientes suscritos a esos temas."
            },
            {
                "titulo": "Desconexión",
                "parrafo": "Cuando un cliente ya no necesita comunicarse, se desconecta del servidor."
            }
        ],
        "extra" : {
            "parrafo": "Estos pasos permiten que los dispositivos se comuniquen y se mantengan actualizados sobre la información que les interesa."
        }
    },
    "/introduccion/3" : {
        "titulo": "Home Automation Wizard",
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/introduccion/2"
            },
            "ruta2": {
                "titulo": "Comenzar",
                "link": "/introduccion/4"
            }
        },
        "imagen": {
            "ruta": "../../../../assets/img/led2.jpeg"
        },
        "extra": {
            "parrafo": "En esta animación, se puede visualizar el funcionamiento básico del protocolo. Fuente: Amazon Web Services."
        }
    },
    "/introduccion/4" : {
        "titulo": "Home Automation Wizard",
        "botones": {
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/introduccion/3"
            }
            // },
            // "ruta2": {
            //     "titulo": "Siguiente",
            //     "link": "/aplicacion"
            // }
        }
    },
}