import { BaseLayoutEl } from "./baseLayoutEl.js";


export class CenterThem extends BaseLayoutEl{
    constructor(){
        super("column");
        this.ma="center";
        this.ca="center";
    }
}