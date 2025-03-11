class SomeApi {
    constructor(methodType, url,) {
        this.methodType = methodType;
        this.url = url;
    }

    set methodType(methodType){
        if(typeof (methodType) === "string"){
            if(methodType === "GET"){
                this._methodType = methodType
            } else {
                console.error("GET만 가능~")
            }
        } else{
            console.error("문자열이 아닌데용?")
        }
    }

    set url(url){
        if(typeof (url) === "string"){
            if (url.includes("https://")
            )
            this._url = url
        } else {
            console.error("http:// 없음~")
        }
    }

    get methodType(){
        return this._methodType;
    }

    get url(){
        return this._url;
    }
}
const apiData = new SomeApi("POST", "https://www.naver.com");
const test = new SomeApi("GET", "https://pokeapi.co/api/v2/pokemon/ditto");

console.log(test.methodType)
