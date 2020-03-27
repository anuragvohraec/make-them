import { LitElement , css, html} from "lit-element";

const _allowedFlexValue = new Set(['flex-start','flex-end', 'center', 'space-around', 'space-between','stretch','base-line']);

export class BaseLayoutEl extends LitElement{
    #flexDirection

    constructor(flexDirection){
        super();
        this.ma="flex-start";
        this.ca="stretch";
        this.#flexDirection = flexDirection;
    }
    static get properties(){
        return {
            ma: {type: String},
            ca: {type: String}
        }
    }

    check_supplied_values(){
        if(!_allowedFlexValue.has(this.ca) || !_allowedFlexValue.has(this.ma)){
            console.log("main-axis: " , this.ma, ", cross-axis: ",this.ca);
            console.log (`Main-axis/Cross-axis can have only following values: ${[..._allowedFlexValue]}`);
            return false;
        }
        return true;
    }

    static get styles(){
        return css`
.container{
    width: 100%;
    height: 100%;
	overflow: auto;
}
.flex{
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
}
        `;
    }

    render(){

        if(!this.check_supplied_values()){
            return html`<div>Error</div>`;
        }

        return html`
<style>
.flex{
    flex-direction: ${this.#flexDirection};
    justify-content: ${this.ma};
    align-items: ${this.ca};
}
</style>
<div class="container">
    <div class="flex" id="flex">
        <slot></slot>
    </div>
</div>
`;
    }


}