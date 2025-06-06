console.log("System Info Script:");
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("CPU Cores:", require("os").cpus().length);
console.log("Free Memory:", require("os").freemem());
console.log("Total Memory:", require("os").totalmem());
