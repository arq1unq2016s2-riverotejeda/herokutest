/**
 * Created by mar on 22/10/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var home_constants_1 = require('../home.constants');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var SubjectService = (function () {
    function SubjectService(_http) {
        this._http = _http;
    }
    SubjectService.prototype.getSubjects = function () {
        return this._http.get(home_constants_1.Configuration.API_ENDPOINT + "/subjects").
            map(this.extractData).catch(this.handleError);
    };
    SubjectService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    SubjectService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    SubjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SubjectService);
    return SubjectService;
}());
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map