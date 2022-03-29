var generateEvb = require("generate-evb");
const pkgJSON = require("./package.json");

// ex: generateEvb(projectName, inputExe, outputExe, path2Pack, options);

generateEvb(pkgJSON.enigmavb.projectName, pkgJSON.enigmavb.inputExe, pkgJSON.enigmavb.outputExe, pkgJSON.enigmavb.path2Pack);
