import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// forループ
let colors = ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++) {
  console.log("for文", colors[i]);
}
// forEach
colors.forEach(function (color) {
  console.log("forEach", color);
});
// 数字の配列
const numbers = [1, 2, 3, 4, 5];
// 合計を保持する変数
var sum = 0;
// 配列の一つ一つの数字を合計にたす
numbers.forEach(function (number) {
  sum += number;
});
// 合計を表示する
console.log(sum);
const numbers2 = [1, 2, 3];
const doubledNumbers = [];
for (let i = 0; i < numbers2.length; i++) {
  doubledNumbers.push(numbers2[i] * 2);
}
console.log(doubledNumbers);
const doubled = numbers2.map(function (number) {
  return number * 2;
});
console.log("doubled", doubled);

const cars = [
  { type: "軽自動車", price: "安い" },
  { type: "乗用車", price: "高い" }
];
// 情報選んでとってくる
const prices = cars.map(function (car) {
  return car.price;
});
console.log("prices", prices);

var property = "color";
var element = {
  color: "赤"
};
function pluck(array, property) {
  return array.map(function (element) {
    return element[property]; // propertyで指定されたプロパティの値を取得する！
  });
}
console.log("pluck関数", element[property]);

const colorObjects = [{ color: "赤" }, { color: "青" }, { color: "黄色" }];
const test = pluck(colorObjects, "color");
console.log(test);

const products = [
  { name: "きゅうり", type: "野菜", quantity: 0, price: 100 },
  { name: "バナナ", type: "フルーツ", quantity: 10, price: 150 },
  { name: "セロリ", type: "野菜", quantity: 3, price: 50 },
  { name: "オレンジ", type: "フルーツ", quantity: 3, price: 120 }
];
// ミューテイトさせない
const filterProducts = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].type === "フルーツ") {
//     fileterProducts.push(products[i]);
//   }
// }
// console.log("fileteProducts", fileterProducts);

// products.filter(function (product) {
//   return product.type === "フルーツ";
// });
// 種類が野菜で量が0より多くて値段が120より小さい
const test2 = products.filter(function (product) {
  return product.type === "野菜" && product.quantity > 0 && product.price < 120;
});

console.log(test2);
const post = { id: 4, title: "初めての投稿" };
const comments = [
  { postId: 4, content: "いい記事ですね" },
  { postId: 3, content: "勉強になりました" },
  { postId: 4, content: "なるほど" }
];
function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}
console.log("filter", commentsForPost(post, comments));
