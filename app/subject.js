"use strict";
var Subject = (function () {
    function Subject() {
    }
    return Subject;
}());
exports.Subject = Subject;
var SubjectStatusTranslator = (function () {
    function SubjectStatusTranslator() {
    }
    SubjectStatusTranslator.getSubjectStatusCodeByMessage = function (message) {
        if (message == SubjectStatusTranslator.APPROVED) {
            return "approved";
        }
        if (message == SubjectStatusTranslator.BAD_SCHEDULE) {
            return "bad_schedule";
        }
        if (message == SubjectStatusTranslator.NOT_YET) {
            return "not_yet";
        }
    };
    SubjectStatusTranslator.NOT_YET = "Aún no la voy a cursar";
    SubjectStatusTranslator.APPROVED = "Ya la aprobé";
    SubjectStatusTranslator.BAD_SCHEDULE = "No puedo cursar en ese horario";
    SubjectStatusTranslator.subjectStatusMessage = {
        not_yet: SubjectStatusTranslator.NOT_YET,
        approved: SubjectStatusTranslator.APPROVED,
        bad_schedule: SubjectStatusTranslator.BAD_SCHEDULE,
    };
    return SubjectStatusTranslator;
}());
exports.SubjectStatusTranslator = SubjectStatusTranslator;
//# sourceMappingURL=subject.js.map