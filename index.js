var fs = require("fs");
var child_process = require("child_process");
const pkgJSON = require("./package.json");

child_process.exec("node mkManifest.js", function (err, stdout, stderr) {
  if (err || stderr) return console.error({ err, stderr });
  packEXE();
});

function packEXE() {
  child_process.execFile(pkgJSON.enigmavb.evbCliPath, [pkgJSON.enigmavb.projectName], function (err, stdout, stderr) {
    var success = false;
    if (!err) {
      // Sanity check (change this to what works for you):
      // Check if the output file exists and if it's bigger than the input file
      if (fs.existsSync(pkgJSON.enigmavb.outputExe)) {
        success = fs.statSync(pkgJSON.enigmavb.outputExe).size > fs.statSync(pkgJSON.enigmavb.inputExe).size;
      }

      if (!success) {
        err = new Error("Failed to pack EVB project!\nEVB stdout:\n" + stdout + "\nEVB stderr:\n" + stderr);
      }
    }
    if (err) {
      throw err;
    }
  });
}
