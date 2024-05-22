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
exports.deleteAllProducts = exports.deleteProductById = exports.updateProductById = exports.getProductById = exports.insertProductToDb = exports.getAllProducts = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const insertProductToDb = (product) => __awaiter(void 0, void 0, void 0, function* () {
    // Using static method
    // const result = await Student.create(student)
    // Using instance method
    console.log(product, 'product from server');
    const result = new product_model_1.default(product);
    yield result.save();
    return result;
});
exports.insertProductToDb = insertProductToDb;
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find({});
    return result;
});
exports.getAllProducts = getAllProducts;
const getProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(productId).select({ __v: 0 });
    return result;
});
exports.getProductById = getProductById;
const updateProductById = (productId, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(productId, product, {
        new: true,
    }).select({ __v: 0 });
    return result;
});
exports.updateProductById = updateProductById;
const deleteProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(productId).select({
        __v: 0,
    });
    return result;
});
exports.deleteProductById = deleteProductById;
const deleteAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.deleteMany({});
    return result;
});
exports.deleteAllProducts = deleteAllProducts;