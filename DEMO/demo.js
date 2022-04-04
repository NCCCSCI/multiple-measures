import {storageConfig} from "./config/global.js";
import {domSetup} from "./ui/demo.js";
import {go} from "./controllers/go.js";

localStorage.removeItem(storageConfig.name.mathPlacement);

domSetup();