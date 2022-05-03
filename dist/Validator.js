"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let IP = '192.191.148.1';
console.log(validator_1.default.isEmail('juanaugusto1@live.com'));
console.log(validator_1.default.isIP(IP));
