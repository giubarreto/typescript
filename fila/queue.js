"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.QueueData = [];
    }
    Queue.prototype.isEmpty = function () {
        var result = this.QueueData.length <= 0;
        return result;
    };
    Queue.prototype.enqueue = function (dataItem) {
        this.QueueData.push(dataItem);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        else {
            var element = this.QueueData.shift();
            return element;
        }
    };
    Queue.prototype.count = function () {
        var len = this.QueueData.length;
        return len;
    };
    Queue.prototype.printQueue = function () {
        for (var i = 0; i < this.QueueData.length; i++) {
            console.log(this.QueueData[i]);
        }
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        else {
            var element = this.QueueData[0];
            return element;
        }
    };
    Queue.prototype.contains = function (dataItem) {
        if (this.QueueData.includes(dataItem)) {
            return true;
        }
        else {
            return false;
        }
    };
    Queue.prototype.clear = function () {
        this.QueueData.length = 0;
    };
    return Queue;
}());
exports.Queue = Queue;
