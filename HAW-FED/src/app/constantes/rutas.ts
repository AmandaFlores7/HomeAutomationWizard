export const rutas ={
    "/aplicacion": {
        "titulo": "Menu Principal",
        "linkPage": "aplicacion",
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
        ],
        "botones": {
            "cantidad": 0
        }
    },
    "/aplicacion/sensores": {
        "titulo": "Sensores",
        "linkPage": "aplicacion/sensores",
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
            "cantidad": 1,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion"
            }
        }
    },
    "/aplicacion/actuadores": {
        "titulo": "Actuadores",
        "linkPage": "aplicacion/actuadores",
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
            "cantidad": 1,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion"
            }
        }
    },
    "/aplicacion/wikiiot": {
        "titulo": "Wiki IoT",
        "linkPage": "aplicacion/wikiiot",
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
            "cantidad": 1,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion"
            }
        }
    },
    "/aplicacion/sensores/temperatura": {
        "titulo": "Sensor de Temperatura",
        "linkPage": "aplicacion/sensores/temperatura",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion/sensores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/sensores/temperatura/ver"
            }
        }
        
    },
    "/aplicacion/sensores/humedad": {
        "titulo": "Sensor de Humedad",
        "linkPage": "aplicacion/sensores/humedad",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion/sensores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/sensores/humedad/ver"
            }
        }
    },
    "/aplicacion/sensores/luz": {
        "titulo": "Sensor de Luminocidad",
        "linkPage": "aplicacion/sensores/luz",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion/sensores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/sensores/luz/ver"
            }
        }
    },
    "/aplicacion/sensores/aire": {
        "titulo": "Sensor de Aire",
        "linkPage": "aplicacion/sensores/aire",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion/sensores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/sensores/aire/ver"
            }
        }
        
    },
    "/aplicacion/actuadores/camara_r": {
        "titulo": "Camara Raspberry",
        "linkPage": "aplicacion/actuadores/camara_r",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion/actuadores"
            },
            "ruta2": {
                "titulo": "Ver",
                "link": "/aplicacion/actuadores/camara_r/ver"
            }
        }
       
    },
    "/aplicacion/actuadores/luces": {
        "titulo": "Luces del Hogar",
        "linkPage": "aplicacion/actuadores/luces",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion/actuadores"
            },
            "ruta2": {
                "titulo": "Probar",
                "link": "/aplicacion/actuadores/luces/prabar"
            }
        }
        
    },
    "/aplicacion/actuadores/puerta": {
        "titulo": "Control de Puerta",
        "linkPage": "aplicacion/actuadores/puerta",
        "botones": {
            "cantidad": 2,
            "ruta1": {
                "titulo": "Volver",
                "link": "/aplicacion/actuadores"
            },
            "ruta2": {
                "titulo": "Probar",
                "link": "/aplicacion/actuadores/puerta/probar"
            }
        }
    }
}