//elementleri cagirdim
const input = document.querySelector("input");
const add = document.querySelector("button");
const ul = document.querySelector("ul");
//click functionu yaratdim ki,eventlere elave edim
const click = (event) => {
  //browserin verdiyi deyerler silinir
  event.preventDefault();
  if (input.value !== "") {
    //click olunanda li elementi ve icinde ki close buttonu yaranir
    const list = document.createElement("li");
    const close = document.createElement("span");
    //inputda yazilan li ye elave olunur
    list.textContent = input.value;
    //li in icinde close iconu
    close.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    list.append(close);
    ul.append(list);
    //placeholderi birinci hali
    input.placeholder = "Enter your text";
    input.classList.remove("show");
    //texti click edenden sonra input texti silinir
    input.value = "";
    //close a basanda elave edilen task silinir
    close.onclick = () => {
      list.remove();
    };
    //localStorage de qalsin diye arr yaratdim ,ve inputa yazilanlari elave etdim
    const arr = JSON.parse(localStorage.getItem("tasks")) || [];
    arr.push(list.textContent);
    localStorage.setItem("tasks", JSON.stringify(arr));
  } else {
    //input bosh olanda ,placeholderin texti deyisir,show classi ile se rengi
    input.classList.add("show");
    input.placeholder = "Please enter text!";
  }
};
// click ve entere basanda click functionu isliyir
add.addEventListener("click", click);
input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    click(e);
  }
});
