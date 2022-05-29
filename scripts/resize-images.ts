import * as shell from "shelljs";

import { imageSizes } from "../src/app/shared/configs/app.config";

const sizes = JSON.stringify(imageSizes);
console.log(sizes);

resizeDirectory("src/assets/images/big-photos");
resizeDirectory("src/assets/images/banklogos");

function resizeDirectory(dirPath: string) {
  const resizeDir = dirPath + "/resized";
  shell.rm("-rf", resizeDir);
  shell.mkdir(resizeDir);
  shell.pushd(resizeDir);
  // shell.rm('-rf', '*.*');

  shell.exec(`npx batch-image-resizer -i ../ -o ./ -s "${sizes}"`);
  shell.popd();
}
