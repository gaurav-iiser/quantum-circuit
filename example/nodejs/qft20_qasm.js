const QuantumCircuit = require("../../lib/quantum-circuit.js");

var input = "";

input += "OPENQASM 2.0;";
input += "include \"qelib1.inc\";";
input += "qreg q[20];";
input += "h q[0];";
input += "cu1 (pi/2) q[1], q[0];";
input += "cu1 (pi/4) q[2], q[0];";
input += "cu1 (pi/8) q[3], q[0];";
input += "cu1 (pi/16) q[4], q[0];";
input += "cu1 (pi/32) q[5], q[0];";
input += "cu1 (pi/64) q[6], q[0];";
input += "cu1 (pi/128) q[7], q[0];";
input += "cu1 (pi/256) q[8], q[0];";
input += "cu1 (pi/512) q[9], q[0];";
input += "cu1 (pi/1024) q[10], q[0];";
input += "cu1 (pi/2048) q[11], q[0];";
input += "cu1 (pi/4096) q[12], q[0];";
input += "cu1 (pi/8192) q[13], q[0];";
input += "cu1 (pi/16384) q[14], q[0];";
input += "cu1 (pi/32768) q[15], q[0];";
input += "cu1 (pi/65536) q[16], q[0];";
input += "cu1 (pi/131072) q[17], q[0];";
input += "cu1 (pi/262144) q[18], q[0];";
input += "cu1 (pi/524288) q[19], q[0];";
input += "h q[1];";
input += "cu1 (pi/2) q[2], q[1];";
input += "cu1 (pi/4) q[3], q[1];";
input += "cu1 (pi/8) q[4], q[1];";
input += "cu1 (pi/16) q[5], q[1];";
input += "cu1 (pi/32) q[6], q[1];";
input += "cu1 (pi/64) q[7], q[1];";
input += "cu1 (pi/128) q[8], q[1];";
input += "cu1 (pi/256) q[9], q[1];";
input += "cu1 (pi/512) q[10], q[1];";
input += "cu1 (pi/1024) q[11], q[1];";
input += "cu1 (pi/2048) q[12], q[1];";
input += "cu1 (pi/4096) q[13], q[1];";
input += "cu1 (pi/8192) q[14], q[1];";
input += "cu1 (pi/16384) q[15], q[1];";
input += "cu1 (pi/32768) q[16], q[1];";
input += "cu1 (pi/65536) q[17], q[1];";
input += "cu1 (pi/131072) q[18], q[1];";
input += "cu1 (pi/262144) q[19], q[1];";
input += "h q[2];";
input += "cu1 (pi/2) q[3], q[2];";
input += "cu1 (pi/4) q[4], q[2];";
input += "cu1 (pi/8) q[5], q[2];";
input += "cu1 (pi/16) q[6], q[2];";
input += "cu1 (pi/32) q[7], q[2];";
input += "cu1 (pi/64) q[8], q[2];";
input += "cu1 (pi/128) q[9], q[2];";
input += "cu1 (pi/256) q[10], q[2];";
input += "cu1 (pi/512) q[11], q[2];";
input += "cu1 (pi/1024) q[12], q[2];";
input += "cu1 (pi/2048) q[13], q[2];";
input += "cu1 (pi/4096) q[14], q[2];";
input += "cu1 (pi/8192) q[15], q[2];";
input += "cu1 (pi/16384) q[16], q[2];";
input += "cu1 (pi/32768) q[17], q[2];";
input += "cu1 (pi/65536) q[18], q[2];";
input += "cu1 (pi/131072) q[19], q[2];";
input += "h q[3];";
input += "cu1 (pi/2) q[4], q[3];";
input += "cu1 (pi/4) q[5], q[3];";
input += "cu1 (pi/8) q[6], q[3];";
input += "cu1 (pi/16) q[7], q[3];";
input += "cu1 (pi/32) q[8], q[3];";
input += "cu1 (pi/64) q[9], q[3];";
input += "cu1 (pi/128) q[10], q[3];";
input += "cu1 (pi/256) q[11], q[3];";
input += "cu1 (pi/512) q[12], q[3];";
input += "cu1 (pi/1024) q[13], q[3];";
input += "cu1 (pi/2048) q[14], q[3];";
input += "cu1 (pi/4096) q[15], q[3];";
input += "cu1 (pi/8192) q[16], q[3];";
input += "cu1 (pi/16384) q[17], q[3];";
input += "cu1 (pi/32768) q[18], q[3];";
input += "cu1 (pi/65536) q[19], q[3];";
input += "h q[4];";
input += "cu1 (pi/2) q[5], q[4];";
input += "cu1 (pi/4) q[6], q[4];";
input += "cu1 (pi/8) q[7], q[4];";
input += "cu1 (pi/16) q[8], q[4];";
input += "cu1 (pi/32) q[9], q[4];";
input += "cu1 (pi/64) q[10], q[4];";
input += "cu1 (pi/128) q[11], q[4];";
input += "cu1 (pi/256) q[12], q[4];";
input += "cu1 (pi/512) q[13], q[4];";
input += "cu1 (pi/1024) q[14], q[4];";
input += "cu1 (pi/2048) q[15], q[4];";
input += "cu1 (pi/4096) q[16], q[4];";
input += "cu1 (pi/8192) q[17], q[4];";
input += "cu1 (pi/16384) q[18], q[4];";
input += "cu1 (pi/32768) q[19], q[4];";
input += "h q[5];";
input += "cu1 (pi/2) q[6], q[5];";
input += "cu1 (pi/4) q[7], q[5];";
input += "cu1 (pi/8) q[8], q[5];";
input += "cu1 (pi/16) q[9], q[5];";
input += "cu1 (pi/32) q[10], q[5];";
input += "cu1 (pi/64) q[11], q[5];";
input += "cu1 (pi/128) q[12], q[5];";
input += "cu1 (pi/256) q[13], q[5];";
input += "cu1 (pi/512) q[14], q[5];";
input += "cu1 (pi/1024) q[15], q[5];";
input += "cu1 (pi/2048) q[16], q[5];";
input += "cu1 (pi/4096) q[17], q[5];";
input += "cu1 (pi/8192) q[18], q[5];";
input += "cu1 (pi/16384) q[19], q[5];";
input += "h q[6];";
input += "cu1 (pi/2) q[7], q[6];";
input += "cu1 (pi/4) q[8], q[6];";
input += "cu1 (pi/8) q[9], q[6];";
input += "cu1 (pi/16) q[10], q[6];";
input += "cu1 (pi/32) q[11], q[6];";
input += "cu1 (pi/64) q[12], q[6];";
input += "cu1 (pi/128) q[13], q[6];";
input += "cu1 (pi/256) q[14], q[6];";
input += "cu1 (pi/512) q[15], q[6];";
input += "cu1 (pi/1024) q[16], q[6];";
input += "cu1 (pi/2048) q[17], q[6];";
input += "cu1 (pi/4096) q[18], q[6];";
input += "cu1 (pi/8192) q[19], q[6];";
input += "h q[7];";
input += "cu1 (pi/2) q[8], q[7];";
input += "cu1 (pi/4) q[9], q[7];";
input += "cu1 (pi/8) q[10], q[7];";
input += "cu1 (pi/16) q[11], q[7];";
input += "cu1 (pi/32) q[12], q[7];";
input += "cu1 (pi/64) q[13], q[7];";
input += "cu1 (pi/128) q[14], q[7];";
input += "cu1 (pi/256) q[15], q[7];";
input += "cu1 (pi/512) q[16], q[7];";
input += "cu1 (pi/1024) q[17], q[7];";
input += "cu1 (pi/2048) q[18], q[7];";
input += "cu1 (pi/4096) q[19], q[7];";
input += "h q[8];";
input += "cu1 (pi/2) q[9], q[8];";
input += "cu1 (pi/4) q[10], q[8];";
input += "cu1 (pi/8) q[11], q[8];";
input += "cu1 (pi/16) q[12], q[8];";
input += "cu1 (pi/32) q[13], q[8];";
input += "cu1 (pi/64) q[14], q[8];";
input += "cu1 (pi/128) q[15], q[8];";
input += "cu1 (pi/256) q[16], q[8];";
input += "cu1 (pi/512) q[17], q[8];";
input += "cu1 (pi/1024) q[18], q[8];";
input += "cu1 (pi/2048) q[19], q[8];";
input += "h q[9];";
input += "cu1 (pi/2) q[10], q[9];";
input += "cu1 (pi/4) q[11], q[9];";
input += "cu1 (pi/8) q[12], q[9];";
input += "cu1 (pi/16) q[13], q[9];";
input += "cu1 (pi/32) q[14], q[9];";
input += "cu1 (pi/64) q[15], q[9];";
input += "cu1 (pi/128) q[16], q[9];";
input += "cu1 (pi/256) q[17], q[9];";
input += "cu1 (pi/512) q[18], q[9];";
input += "cu1 (pi/1024) q[19], q[9];";
input += "h q[10];";
input += "cu1 (pi/2) q[11], q[10];";
input += "cu1 (pi/4) q[12], q[10];";
input += "cu1 (pi/8) q[13], q[10];";
input += "cu1 (pi/16) q[14], q[10];";
input += "cu1 (pi/32) q[15], q[10];";
input += "cu1 (pi/64) q[16], q[10];";
input += "cu1 (pi/128) q[17], q[10];";
input += "cu1 (pi/256) q[18], q[10];";
input += "cu1 (pi/512) q[19], q[10];";
input += "h q[11];";
input += "cu1 (pi/2) q[12], q[11];";
input += "cu1 (pi/4) q[13], q[11];";
input += "cu1 (pi/8) q[14], q[11];";
input += "cu1 (pi/16) q[15], q[11];";
input += "cu1 (pi/32) q[16], q[11];";
input += "cu1 (pi/64) q[17], q[11];";
input += "cu1 (pi/128) q[18], q[11];";
input += "cu1 (pi/256) q[19], q[11];";
input += "h q[12];";
input += "cu1 (pi/2) q[13], q[12];";
input += "cu1 (pi/4) q[14], q[12];";
input += "cu1 (pi/8) q[15], q[12];";
input += "cu1 (pi/16) q[16], q[12];";
input += "cu1 (pi/32) q[17], q[12];";
input += "cu1 (pi/64) q[18], q[12];";
input += "cu1 (pi/128) q[19], q[12];";
input += "h q[13];";
input += "cu1 (pi/2) q[14], q[13];";
input += "cu1 (pi/4) q[15], q[13];";
input += "cu1 (pi/8) q[16], q[13];";
input += "cu1 (pi/16) q[17], q[13];";
input += "cu1 (pi/32) q[18], q[13];";
input += "cu1 (pi/64) q[19], q[13];";
input += "h q[14];";
input += "cu1 (pi/2) q[15], q[14];";
input += "cu1 (pi/4) q[16], q[14];";
input += "cu1 (pi/8) q[17], q[14];";
input += "cu1 (pi/16) q[18], q[14];";
input += "cu1 (pi/32) q[19], q[14];";
input += "h q[15];";
input += "cu1 (pi/2) q[16], q[15];";
input += "cu1 (pi/4) q[17], q[15];";
input += "cu1 (pi/8) q[18], q[15];";
input += "cu1 (pi/16) q[19], q[15];";
input += "h q[16];";
input += "cu1 (pi/2) q[17], q[16];";
input += "cu1 (pi/4) q[18], q[16];";
input += "cu1 (pi/8) q[19], q[16];";
input += "h q[17];";
input += "cu1 (pi/2) q[18], q[17];";
input += "cu1 (pi/4) q[19], q[17];";
input += "h q[18];";
input += "cu1 (pi/2) q[19], q[18];";
input += "h q[19];";
input += "swap q[0], q[19];";
input += "swap q[1], q[18];";
input += "swap q[2], q[17];";
input += "swap q[3], q[16];";
input += "swap q[4], q[15];";
input += "swap q[5], q[14];";
input += "swap q[6], q[13];";
input += "swap q[7], q[12];";
input += "swap q[8], q[11];";
input += "swap q[9], q[10];";

var qft = new QuantumCircuit();

console.log("");
console.log("Importing QASM...");

qft.importQASM(input);

console.log("");
console.log("Calculating...");

qft.run();

console.log("");
console.log("Time: " + qft.stats.duration + " ms");

//console.log("");
//console.log("Final amplitudes:");
//qft.print(true);

//console.log("");
//console.log("Angles:");
//console.log(qft.angles());

console.log("");
console.log("Probabilities:");
console.log(qft.probabilities());

console.log("");
console.log("Measured:");
console.log(qft.measureAll());
