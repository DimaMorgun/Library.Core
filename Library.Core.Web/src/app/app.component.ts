import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
