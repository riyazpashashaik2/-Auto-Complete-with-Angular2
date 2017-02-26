"use strict";
import { Component } from "@angular/core";

import "rxjs/Rx";

import { CompleterService, CompleterData } from "../src";

let template = require("./material-cmp.html");
// let style = require("./native-cmp.css");

@Component({
    selector: "material-cmp",
    template: template,
    // styles: [style]
})
export class MaterialCmp {
    public countries = require("./res/data/countries.json");

    private dataService: CompleterData;

    constructor(completerService: CompleterService) {
        this.dataService = completerService.local(this.countries, "name", "name").imageField("flag");
    }

}
