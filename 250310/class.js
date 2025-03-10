
class jasewin {
    constructor() {
        this.name = 'Jasewin';
        this.age = 20;

    }
}
console.log(jasewin);


class Student {
    constructor(studentName, age, home) {
        this.studentName = studentName;
        this.age = age;
        this.home = home;
    }

    set studentName(value) {
        if(typeof(value) === 'string') {
            this._studentName = value;
        } else{
            console.log('이름을 문자열로 입력해주세요');
        }
    }


    get truth() {
        console.log(this._studentName + "은" + this.home + "에 산다");
    }
}

const test = new Student(37, "김재승", "대전");
console.log(test);

test.truth()

