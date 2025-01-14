#!/usr/bin/env node
import * as runInstall from "./install/installProcess";

if (process.argv.length != 3) {
  console.log("Usage: \n./run install\n./run <url_file>\n./run test");
  process.exit(1);
}

if (process.argv[2] == "install") {
  const installResult: boolean = runInstall.install();
  installResult ? process.exit(0) : process.exit(1);
} else if (process.argv[2] == "test") {
  console.log("Test not yet implemented");
  process.exit(1);
} else {
  const filePath: string = process.argv[2];
  //Check if argv[2] is a valid relative path
  process.exit(1);
}

process.exit(-1);
