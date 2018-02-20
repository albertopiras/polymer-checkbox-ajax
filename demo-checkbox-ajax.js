var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DemoCheckboxAjax = (function (_super) {
    __extends(DemoCheckboxAjax, _super);
    function DemoCheckboxAjax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoCheckboxAjax.prototype.ready = function () {
        this.runTasks = this.runTasks.bind(this);
        console.log(this['is'], "ready!");
        var component = this;
    };
    DemoCheckboxAjax.prototype.created = function () {
    };
    DemoCheckboxAjax.prototype.attached = function () {
    };
    DemoCheckboxAjax.prototype.detached = function () {
    };
    DemoCheckboxAjax.prototype.runTasks = function () {
        this.selectedTasksArray = this.querySelectorAll("checkbox-ajax[checked]");
        if (this.selectedTasksArray.length) {
            console.log(this['is'] + " running tasks");
            this.selectedTasksArray.forEach(function (element) {
                console.log("task: " + element.value + " checked: " + element.checked);
                element.startAjax();
            });
        }
        else {
            console.log(this['is'] + " no tasks relected!");
        }
    };
    return DemoCheckboxAjax;
}(polymer.Base));
__decorate([
    listen("runTasksButton.tap")
], DemoCheckboxAjax.prototype, "runTasks", null);
DemoCheckboxAjax = __decorate([
    component('demo-checkbox-ajax')
], DemoCheckboxAjax);
DemoCheckboxAjax.register();
