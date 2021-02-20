import { Component, OnInit } from '@angular/core';

import { TOOLS } from '../shared/tools';
import { Category } from '../shared/tools.interface';

@Component({
    selector: 'app-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {


    public trainings = TOOLS.filter(x => x.category === Category.Training);
    public GenMappers = TOOLS.filter(x => x.category === Category.GenMapper);
    public featured = TOOLS.filter(x => x.isFeatured);

    constructor() { }

    ngOnInit(): void {
    }
}
