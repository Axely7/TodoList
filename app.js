import colors from "colors";
import { inquirerMenu, pausa } from "./helpers/inquirer.js";
import { Tarea } from "./models/tarea.js";
import { Tareas } from "./models/tareas.js";

const main = async () => {
  console.log("Hola Mundo");

  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await pausa();
  } while (opt !== "0");
};

main();
