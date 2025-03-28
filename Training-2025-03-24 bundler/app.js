// ? 모듈 가져오기
// * 중괄호를 사용하는 방식은 모듈에서 여러 개의 값을 가져오는 경우에 사용
import { a, aPlus } from "./src/modules/a.js";
import { b } from "./src/modules/b.js";



// * 기본 내보내기는 중괄호를 사용하지 않음
import c from "./src/modules/c.js";

import express from "express"
import path from "path";
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();
app.use("/dist", express.static(path.join(__dirname, "dist")));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

console.log(a());
console.log(aPlus());
console.log(b());
console.log(c());

app.listen(3020, ()=>{
    console.log("server start", "http://localhost:3020");
})