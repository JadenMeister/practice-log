class HTMLmake{
    constructor(head, body,){
        this.head = head;
        this.body = body;
    }

    set head(head){
        if(typeof (head) === "string"){
            this._head = `<head>${head}</head>`
        }

    }
    set body(body){
        if (typeof (body) === "string"){
            this._body = `<body>${body}</body>`
        }

    }

    get head(){
        return this._head;
    }

    get body(){
        return this._body;
    }

    assemble(){
        return `
            <!DOCTYPE html>
            <html>
                <head>
                    ${this._head}
                </head>
                <body>
                    ${this._body}
                </body>
            </html>
`
    }
}

const test = new HTMLmake("머리", "몸");

console.log(test.assemble())