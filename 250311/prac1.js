class Student {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    set job(job){
        if (typeof (job) === "string"){
            this._job = job
        }
    }

    set name(name){
        if(typeof (name) === "string"){
            this._name = name
        }
    }
    set age(age){
        if(typeof (age) === "number"){
            this._age = age
        }
    }

    get name(){
        return this._name;
    }


    suddenly(){
        return `
                <ul> 
                <li>이름:${this._name}</li>
                <li>이름:${this._age}</li>
                <li>이름:${this._job}</li>
                </ul>
            `
    }

}

// constructor function setter -> 객체의 속성값을 내가 원하는 값으로 받거나 피려하면 가공할수도 있다. 조금근은 안전하게 객체를 만들 수 있다.
// getter -> 객체의 속성값을 내가 원하는 값으로 받거나 가공할 수 있다. getter가 없으면 언더바를 써야한다.
// 객체를 담을 때 정수기 처럼 쓰는 것 -> setter,
// 객체를 뺄 때 정수기 처럼 쓰는 것 -> getter
//set (구성하다) + er -> setter
//get (얻다) + er -> getter
// 안정성을 가져간다. -> 에러가 나지 않으면 모두 해결 완료
// 생성자 함수가 사랑받는 이유, 원하는 것만 동작 시킬 수 있음.

const obj ={
    name: "김재승",
    age: 25,
    job:"thief"
}




const test = new Student("김재승", 25, "thief");

console.log(test);

console.log(test._name);

console.log(test.suddenly());

