# OpenAi-Tarea
Tarea de implementacion de un endpoint que utiliza la api de OpenAi para solicitar un prompt basado en el request del endpoint.

El endpoint recibe un array en fomato json y retorna los datos en tabulados en html.

El archivo .env debe contener la variable port y api_key los cuales son el puerto en el que escuchara el servidor express y la llave de OpenAi Api.

El ejemplo de un body para este endpoint es el siguiente y el resultado es el archipo Report.html en el repositorio:
 {
     "content":[
      {
        "activity": "string",
        "worker": "prueba2",
        "project": "programa tracking",
        "team": "byte ",
        "duration": "00:51:00",
        "time": "2023:11:23 08:04:04a. m. --- 2023:11:23 08:55:04a. m."
      },
      {
        "activity": "string",
        "worker": "prueba2",
        "project": "programa tracking",
        "team": "byte ",
        "duration": "00:51:00",
        "time": "2023:11:23 08:04:04a. m. --- 2023:11:23 08:55:04a. m."
      },
      {
        "activity": "Hechar chocolatexx",
        "worker": "prueba2",
        "project": "Project 2",
        "team": "team 2",
        "duration": "169:00:00",
        "time": "2023:11:05 09:02:38p. m. --- 2023:11:12 10:02:38p. m."
      },
      {
        "activity": "Hechar chocolate",
        "worker": "prueba2",
        "project": "Project 2",
        "team": "team 2",
        "duration": "01:00:00",
        "time": "2023:11:04 09:02:38p. m. --- 2023:11:04 10:02:38p. m."
      },
      {
        "activity": "Hechar chocolate",
        "worker": "prueba2",
        "project": "Project 2",
        "team": "team 2",
        "duration": "01:00:00",
        "time": "2023:11:04 09:02:38p. m. --- 2023:11:04 10:02:38p. m."
      },
      {
        "activity": "Hechar",
        "worker": "prueba2",
        "project": "Project 2",
        "team": "team 2",
        "duration": "01:00:00",
        "time": "2023:11:06 09:02:38p. m. --- 2023:11:06 10:02:38p. m."
      }
    ]
 }
