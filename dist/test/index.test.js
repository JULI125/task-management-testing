"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../index.js"));
const supertest_1 = __importDefault(require("supertest"));
describe('GET registro', () => {
    test('should return all registered', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_js_1.default).get('/api/registro');
        expect(response.status).toBe(200);
    }));
});
describe('POST registro', () => {
    test("Sube un nuevo registro", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_js_1.default).post('/api/registro');
        expect(response.statusCode).toBe(200);
    }));
});
describe('PUT registro', () => {
    test("Actualiza un registro", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_js_1.default).put('/api/registro/:id');
        expect(response.statusCode).toBe(200);
    }));
});
describe('DELETE registro', () => {
    test("Elimina un registro", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_js_1.default).delete('/api/registro/:id');
        expect(response.statusCode).toBe(200);
    }));
});
describe('GET tarea', () => {
    test('Ver la tarea', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_js_1.default).get('/api/task');
        expect(response.status).toBe(200);
    }));
});
describe('POST tarea', () => {
    test("Sube una nueva tarea", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_js_1.default).post('/api/task');
        expect(response.statusCode).toBe(200);
    }));
});
describe('PUT tarea', () => {
    test("Actualiza una tarea", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_js_1.default).put('/api/task/:id');
        expect(response.statusCode).toBe(200);
    }));
});
describe('DELETE tarea', () => {
    test("Elimina una tarea", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_js_1.default).delete('/api/task/:id');
        expect(response.statusCode).toBe(200);
    }));
});
//# sourceMappingURL=index.test.js.map