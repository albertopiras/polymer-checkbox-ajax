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
var CheckboxAjax = (function (_super) {
    __extends(CheckboxAjax, _super);
    function CheckboxAjax() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLoading = false;
        _this.isError = false;
        _this.isSuccess = false;
        _this.checked = false;
        return _this;
    }
    CheckboxAjax.prototype.funct = function (ev) {
        this.checked = this.$.checkboxAjax.checked;
    };
    CheckboxAjax.prototype.ready = function () {
        console.log(this['is'], "ready!");
        var component = this;
    };
    CheckboxAjax.prototype.created = function () {
    };
    CheckboxAjax.prototype.attached = function () {
    };
    CheckboxAjax.prototype.detached = function () {
    };
    CheckboxAjax.prototype.startAjax = function () {
        console.log("start ajax for " + this.url);
        if (this.APIMethod) {
            this.$.checkboxAjaxRequest.body = this.APIBody;
        }
        var ajaxRequest = this.$.checkboxAjaxRequest;
        ajaxRequest.generateRequest();
    };
    CheckboxAjax.prototype.startRequest = function (event) {
        this.isSuccess = false;
        this.isError = false;
        this.isLoading = true;
        console.log(this['is'] + "start request");
    };
    CheckboxAjax.prototype.parseResponse = function (event) {
        this.isSuccess = true;
        this.isLoading = false;
        console.log(this['is'] + "SUCCESS resonse.");
    };
    CheckboxAjax.prototype.parseError = function (event) {
        this.isLoading = false;
        this.isError = true;
        console.log(this['is'] + "Error running task");
    };
    CheckboxAjax.prototype.cleanAjax = function () {
        this.isSuccess = false;
        this.isError = false;
        this.isLoading = false;
    };
    return CheckboxAjax;
}(polymer.Base));
__decorate([
    property({ type: String, notify: true })
], CheckboxAjax.prototype, "url", void 0);
__decorate([
    property({ type: String, notify: true })
], CheckboxAjax.prototype, "label", void 0);
__decorate([
    property({ type: String, notify: true })
], CheckboxAjax.prototype, "checkclass", void 0);
__decorate([
    property({ type: String, notify: true })
], CheckboxAjax.prototype, "APIBody", void 0);
__decorate([
    property({ type: String, notify: true })
], CheckboxAjax.prototype, "APIMethod", void 0);
__decorate([
    property({ type: String, notify: true })
], CheckboxAjax.prototype, "value", void 0);
__decorate([
    property({ type: Boolean, notify: true })
], CheckboxAjax.prototype, "isLoading", void 0);
__decorate([
    property({ type: Boolean, notify: true })
], CheckboxAjax.prototype, "isError", void 0);
__decorate([
    property({ type: Boolean, notify: true })
], CheckboxAjax.prototype, "isSuccess", void 0);
__decorate([
    property({
        type: Boolean,
        notify: true,
        reflectToAttribute: true
    })
], CheckboxAjax.prototype, "checked", void 0);
__decorate([
    listen("checkboxAjax.change")
], CheckboxAjax.prototype, "funct", null);
CheckboxAjax = __decorate([
    component('checkbox-ajax')
], CheckboxAjax);
CheckboxAjax.register();
