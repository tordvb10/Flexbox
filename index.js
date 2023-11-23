const flexcontainer = document.getElementById("flexboxen");
flexcontainer.classList.add("flexsbox");
//importScripts("lorem.min.js");

for (let i = 1; i < 10; i++) {
  let test = document.createElement("div");
  let bilde = document.createElement("img");
  let tekst = document.createElement("p");
  test.classList.add("test");
  bilde.classList.add("bilde");
  tekst.classList.add("tekst");
  bilde.src = `img/${i}.webp`;
  tekst.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae possimus porro delectus nisi, accusantium cumque sit eveniet libero eos quisquam?";

  test.append(bilde);
  test.append(tekst);
  flexcontainer.append(test);
}
