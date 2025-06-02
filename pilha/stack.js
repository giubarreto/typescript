"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.StackData = [];
    }
    Stack.prototype.isEmpty = function () {
        var result = this.StackData.length <= 0;
        return result;
    };
    Stack.prototype.push = function (dataItem) {
        this.StackData.push(dataItem);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        else {
            var element = this.StackData.pop();
            return element;
        }
    };
    Stack.prototype.count = function () {
        var len = this.StackData.length;
        return len;
    };
    Stack.prototype.printStack = function () {
        for (var i = this.StackData.length - 1; i >= 0; i--) {
            console.log(this.StackData[i]);
        }
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        else {
            var element = this.StackData[this.StackData.length - 1];
            return element;
        }
    };
    Stack.prototype.contains = function (dataItem) {
        if (this.StackData.includes(dataItem)) {
            return true;
        }
        else {
            return false;
        }
    };
    Stack.prototype.clear = function () {
        this.StackData.length = 0;
    };
    return Stack;
}());
exports.Stack = Stack;
