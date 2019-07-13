import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {FeaturedService} from "./featured.service";

@Component({
    selector: "Featured",
    providers:[FeaturedService],
    moduleId: module.id,
    templateUrl: "./featured.component.html",
    styleUrls: ["./featured.css"],
})
export class FeaturedComponent implements OnInit {

    public dataListShow = [];

    constructor(private feature:FeaturedService) {
        this.feature.getList().subscribe(
            data=> this.datalist(data),
            error=>alert(error),
          );
        // Use the component constructor to inject providers.
    }
    datalist(data){
        for (let i = 0; i < data['data'].length; i++) {
            this.dataListShow.push(data['data'][i]);
        }
    }
    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
