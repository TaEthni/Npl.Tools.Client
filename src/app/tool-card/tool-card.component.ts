import { Component, Input, OnInit } from '@angular/core';

import { Tool } from '../shared/tools.interface';

@Component({
    selector: 'app-tool-card',
    templateUrl: './tool-card.component.html',
    styleUrls: ['./tool-card.component.scss']
})
export class ToolCardComponent implements OnInit {

    @Input()
    public tool!: Tool;

    constructor() { }

    ngOnInit(): void {
    }
}
