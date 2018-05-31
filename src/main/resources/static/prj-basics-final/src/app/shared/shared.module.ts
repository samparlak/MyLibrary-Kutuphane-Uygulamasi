import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownDirectiveDirective } from "./dropdown-directive.directive";


@NgModule({
    declarations:[
        DropdownDirectiveDirective
    ],
    exports:[
        CommonModule,
        DropdownDirectiveDirective
    ]
})

export class SharedModule{}