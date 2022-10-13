import colors from "colors";
import { inquirerMenu, pausa, leerInput } from "./helpers/inquirer.js";
import { Tarea } from "./models/tarea.js";
import { Tareas } from "./models/tareas.js";

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    // Imprimir el menu
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción");
        tareas.crearTarea(desc);
        break;

      case "2":
        console.log(tareas.listadoArr);
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
