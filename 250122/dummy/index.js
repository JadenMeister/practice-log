const trainingDummyData = [
  { name: "김민지", food: "김치찌개" },
  { name: "김요훈", food: "불고기" },
  { name: "김윤지", food: "비빔밥" },
  { name: "김재승", food: "된장찌개" },
  { name: "손정민", food: "갈비탕" },
  { name: "안은별", food: "떡볶이" },
  { name: "윤종환", food: "삼계탕" },
  { name: "최정민", food: "육개장" },
  { name: "최현준", food: "102" },
  { name: "전선일", food: "100" }
];

const spicyFoods = ["김치찌개", "떡볶이", "육개장"];

function countSpicyFoodLovers() {
  let count = 0;
  for (let i = 0; i < trainingDummyData.length; i++) {
    if (spicyFoods.includes(trainingDummyData[i].food) === true) {    
      
      
      count++;
    }
  }
  console.log("매운 음식을 좋아하는 학생 수:", count);
}

countSpicyFoodLovers();
