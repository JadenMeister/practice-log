class Student{
    constructor (name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job
    }

    set name(name){
        if(typeof name === "string"){
            this._name = name;
        } else{
            console.log("이름은 문자열이어야 합니다.")
        }

    }

    set age(age){
        let num = Number(age); // 문자열을 숫자열로 변환
        if(!isNaN(num)){
            if(num > 20){
                this._age = num;
                this._isAdult = true;
            } else{
                this._age = num;
                this._isAdult = false;
            }
        }

    }
    set job(job){
        if(typeof job === "string"){
            this._job = job;
        } else{
            console.log("직업은 문자열이어야 합니다.")
        }

    }

    get name(){
        return this._name;
    }


    get age(){
        return this._age;
    }

    get job(){
        return this._job;
    }

    isAdult(){
        return this._isAdult;
    }


    ulLiAssemble(){
        return `
        <ul>
            <li>이름: ${this._name}</li>
            <li>나이: ${this._age}</li>
            <li>직업: ${this._job}</li>
            <il>성인여부: ${this._isAdult ? "성인" : "미성년자"}</il>
        </ul>
        `
    }

}


const adult = new Student("Jaden", 24, "developer");
console.log(adult.job)  // 왜 job이 undefined로 나오는지 모르겠음  // getter를 안 해서 그런거였음 !
console.log(`이름:${adult.name}, 나이:${adult.age}, 직업:${adult.job}, 성인여부:${adult.isAdult()}`);
console.log(adult.ulLiAssemble())
