class DivMake {
    constructor(css) {
        this.css = css;

    }

    set css(style){
        for(let key in style){
            this[key] = style[key]
        }
    }
}


const styleObj={
    width: "100px",
    height: "100px",
    backgroundColor: "red"
}
const test = new DivMake(styleObj)

console.log(test)