const st = document.querySelector(".first");
const st1 = document.querySelector(".first-1");
const nd = document.querySelector(".second");
const nd1 = document.querySelector(".second-1");
const rd = document.querySelector(".third");
const rd1 = document.querySelector(".third-1");
const todo = document.querySelector(".todo");



todo.addEventListener('mouseover', function () {
    st.classList.add("st--moved");
    st1.classList.add("st--moved");
    nd.classList.add("nd--moved");
    nd1.classList.add("nd--moved");
    rd.classList.add("rd--moved");
    rd1.classList.add("rd--moved");
});

todo.addEventListener('mouseleave', function () {
    st.classList.remove("st--moved");
    st1.classList.remove("st--moved");
    nd.classList.remove("nd--moved");
    nd1.classList.remove("nd--moved");
    rd.classList.remove("rd--moved");
    rd1.classList.remove("rd--moved");
});