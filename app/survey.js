"use strict";
var Survey = (function () {
    function Survey(student_name, legajo, selected_subjects) {
        this.student_name = student_name;
        this.legajo = legajo;
        this.selected_subjects = selected_subjects;
    }
    return Survey;
}());
exports.Survey = Survey;
var SelectedSubject = (function () {
    function SelectedSubject(subject, status) {
        this.subject = subject;
        this.status = status;
    }
    return SelectedSubject;
}());
exports.SelectedSubject = SelectedSubject;
//# sourceMappingURL=survey.js.map