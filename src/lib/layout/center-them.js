import { LitElement, html, css } from "lit-element";


export class CenterThem extends LitElement{

    constructor(){
        super();
        this.ma="center";
        this.ca="center";
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
}
        `;
    }

    render(){
        return html`
<div class="container">
    <div class="flex" id="flex">
        <slot></slot>
    </div>
</div>
`;
    }

}
