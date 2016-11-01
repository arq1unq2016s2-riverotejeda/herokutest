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
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var subject_service_1 = require('./services/subject.service');
var survey_service_1 = require("./services/survey.service");
var subject_1 = require("./subject");
var survey_1 = require("./survey");
var HomeComponent = (function () {
    function HomeComponent(subjectService, surveyService) {
        this.subjectService = subjectService;
        this.surveyService = surveyService;
        this.model = new survey_1.Survey("", "", []);
        this.active = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getSubjects();
    };
    HomeComponent.prototype.getSubjects = function () {
        var _this = this;
        this.subjectService.getSubjects()
            .subscribe(function (res) {
            res.map(function (survey) {
                for (var _i = 0, _a = survey.options; _i < _a.length; _i++) {
                    var option = _a[_i];
                    var option_translated = subject_1.SubjectStatusTranslator.subjectStatusMessage[option];
                    survey.general_options.push(option_translated);
                }
            });
            _this.mySubjects = res;
        }, function (error) { return console.log("Error HTTP GET Service"); } // in case of failure show this message
        );
    };
    HomeComponent.prototype.addSubject = function (subjectName, event) {
        var option = event.srcElement.value;
        var selectedSubject = new survey_1.SelectedSubject(subjectName, option);
        //TODO: check if already exist
        this.model.selected_subjects.push(selectedSubject);
    };
    HomeComponent.prototype.onSubmit = function () {
        this.model.selected_subjects.map(function (selected) {
            var status = subject_1.SubjectStatusTranslator.getSubjectStatusCodeByMessage(selected.status);
            if (status) {
                selected.status = status;
            }
        });
        this.surveyService.saveSurvey(this.model).subscribe(function (response) { return console.log(response); }, function () { return console.log('Survey successfully saved'); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: './app/templates/home_template.html',
            providers: [subject_service_1.SubjectService, survey_service_1.SurveyService]
        }), 
        __metadata('design:paramtypes', [subject_service_1.SubjectService, survey_service_1.SurveyService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map