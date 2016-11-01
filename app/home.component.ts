import {Component, OnInit} from '@angular/core';

import {FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Observable }     from 'rxjs/Observable';
import { Configuration } from './home.constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SubjectService} from './services/subject.service'
import {RequestOptions, Headers, Response, Http} from "@angular/http";
import {SurveyService} from "./services/survey.service";
import {Subject, SubjectStatusTranslator} from "./subject";
import {Survey, SelectedSubject} from "./survey";



@Component({
  selector: 'my-home',
  templateUrl : './app/templates/home_template.html',
  providers: [SubjectService, SurveyService]
})

export class HomeComponent implements OnInit{
    public mySubjects: Subject[];

    ngOnInit(): void {
        this.getSubjects();
    }

    public model = new Survey("", "", []);

    active = true;

    constructor(private subjectService: SubjectService, private surveyService: SurveyService){}

    getSubjects() {
        this.subjectService.getSubjects()
            .subscribe(
                res => {
                    res.map(survey => {
                        for (let option of survey.options){
                            var option_translated = SubjectStatusTranslator.subjectStatusMessage[option];
                            survey.general_options.push(option_translated);
                        }
                    });
                    this.mySubjects = res;
                },
                error => console.log("Error HTTP GET Service") // in case of failure show this message
            );
    }

    addSubject(subjectName:string, event){
        var option = (<HTMLSelectElement>event.srcElement).value;
        var selectedSubject = new SelectedSubject(subjectName, option);
        //TODO: check if already exist
        this.model.selected_subjects.push(selectedSubject);
    }

    onSubmit() {
        this.model.selected_subjects.map(selected => {
            var status = SubjectStatusTranslator.getSubjectStatusCodeByMessage(selected.status);
            if(status){
                selected.status = status;
            }
        });

        this.surveyService.saveSurvey(this.model).subscribe(
            response => console.log(response),
            () => console.log('Survey successfully saved')
        );
    }
}

