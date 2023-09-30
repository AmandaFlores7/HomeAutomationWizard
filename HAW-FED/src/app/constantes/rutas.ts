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
                "link": "/aplicacion/"
            },
            {
                "titulo": "Conoce Nuestro Proyecto",
                "link": "/aplicacion/"
            }
        ]
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
                "ruta": "../../../../assets/img/led1.jpeg",
            },
            {
                "ruta": "../../../../assets/img/led2.jpeg",
            }
        ],
        "texto": [
            {
                "parrafo": "7El sensor de luminocidad es un dispositivo que permite medir la cantidad de luz que hay en un ambiente. Este sensor es muy utilizado en la domótica, ya que permite controlar la iluminación de un ambiente de manera automática. El sensor de luminocidad que utilizamos en nuestro proyecto es el BH1750, el cual es un sensor digital que permite medir la cantidad de luz en un ambiente. Este sensor se comunica con el microcontrolador mediante el protocolo I2C."
            },
        ]
        
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
                "ruta": "../../../../assets/img/led1.jpeg",
            },
            {
                "ruta": "../../../../assets/img/led2.jpeg",
            }
        ],
        "texto": [
            {
                "parrafo": "6El sensor de luminocidad es un dispositivo que permite medir la cantidad de luz que hay en un ambiente. Este sensor es muy utilizado en la domótica, ya que permite controlar la iluminación de un ambiente de manera automática. El sensor de luminocidad que utilizamos en nuestro proyecto es el BH1750, el cual es un sensor digital que permite medir la cantidad de luz en un ambiente. Este sensor se comunica con el microcontrolador mediante el protocolo I2C."
            },
        ]
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
                "ruta": "../../../../assets/img/led1.jpeg",
            },
            {
                "ruta": "../../../../assets/img/led2.jpeg",
            },
            {
                "ruta": "../../../../assets/img/led2.jpeg",
            },
            {
                "ruta": "../../../../assets/img/led1.jpeg",
            }
        ],
        "texto": [
            {
                "parrafo": "5El sensor de luminocidad es un dispositivo que permite medir la cantidad de luz que hay en un ambiente. Este sensor es muy utilizado en la domótica, ya que permite controlar la iluminación de un ambiente de manera automática. El sensor de luminocidad que utilizamos en nuestro proyecto es el BH1750, el cual es un sensor digital que permite medir la cantidad de luz en un ambiente. Este sensor se comunica con el microcontrolador mediante el protocolo I2C."
            },
        ]
    },
    "/aplicacion/sensores/aire": {
        "titulo": "Sensor de Aire",
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
                "ruta": "../../../../assets/img/led1.jpeg",
            },
            {
                "ruta": "../../../../assets/img/led2.jpeg",
            }
        ],
        "texto": [
            {
                "parrafo": "4El sensor de luminocidad es un dispositivo que permite medir la cantidad de luz que hay en un ambiente. Este sensor es muy utilizado en la domótica, ya que permite controlar la iluminación de un ambiente de manera automática. El sensor de luminocidad que utilizamos en nuestro proyecto es el BH1750, el cual es un sensor digital que permite medir la cantidad de luz en un ambiente. Este sensor se comunica con el microcontrolador mediante el protocolo I2C."
            },
        ]
        
    },
    "/aplicacion/actuadores/camara_r": {
        "titulo": "Camara Raspberry",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Retroceder",
                "link": "/aplicacion/actuadores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/actuadores/camara_r/ver"
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
                "parrafo": "3El sensor de luminocidad es un dispositivo que permite medir la cantidad de luz que hay en un ambiente. Este sensor es muy utilizado en la domótica, ya que permite controlar la iluminación de un ambiente de manera automática. El sensor de luminocidad que utilizamos en nuestro proyecto es el BH1750, el cual es un sensor digital que permite medir la cantidad de luz en un ambiente. Este sensor se comunica con el microcontrolador mediante el protocolo I2C."
            },
            {
                "parrafo": "3El sensor de luminocidad es un dispositivo que permite medir la cantidad de luz que hay en un ambiente. Este sensor es muy utilizado en la domótica, ya que permite controlar la iluminación de un ambiente de manera automática. El sensor de luminocidad que utilizamos en nuestro proyecto es el BH1750, el cual es un sensor digital que permite medir la cantidad de luz en un ambiente. Este sensor se comunica con el microcontrolador mediante el protocolo I2C."
            },
        ]
       
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
                "parrafo": "2El sensor de luminocidad es un dispositivo que permite medir la cantidad de luz que hay en un ambiente. Este sensor es muy utilizado en la domótica, ya que permite controlar la iluminación de un ambiente de manera automática. El sensor de luminocidad que utilizamos en nuestro proyecto es el BH1750, el cual es un sensor digital que permite medir la cantidad de luz en un ambiente. Este sensor se comunica con el microcontrolador mediante el protocolo I2C."
            },
            {
                "parrafo": "3El sensor de luminocidad es un dispositivo que permite medir la cantidad de luz que hay en un ambiente. Este sensor es muy utilizado en la domótica, ya que permite controlar la iluminación de un ambiente de manera automática. El sensor de luminocidad que utilizamos en nuestro proyecto es el BH1750, el cual es un sensor digital que permite medir la cantidad de luz en un ambiente. Este sensor se comunica con el microcontrolador mediante el protocolo I2C."
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
                "ruta": "../../../../assets/img/led1.jpeg",
            },
            {
                "ruta": "../../../../assets/img/led2.jpeg",
            }
        ],
        "texto": [
            {
                "parrafo": "1El sensor de luminocidad es un dispositivo que permite medir la cantidad de luz que hay en un ambiente. Este sensor es muy utilizado en la domótica, ya que permite controlar la iluminación de un ambiente de manera automática. El sensor de luminocidad que utilizamos en nuestro proyecto es el BH1750, el cual es un sensor digital que permite medir la cantidad de luz en un ambiente. Este sensor se comunica con el microcontrolador mediante el protocolo I2C."
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
            },
            "ruta2": {
                "titulo": "Siguiente",
                "link": "/aplicacion"
            }
        }
    },
}