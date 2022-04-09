const imgList = ["./b1.jpg", "./b2.jpg", "./b3.jpg", "./b4.jpg"];
let thumbList = document.querySelectorAll(".thumb");
let wrapper = document.querySelector(".wrapper");

thumbList.forEach((item, index) => {
  if (item.classList.contains("selected")) {
    wrapper.style.backgroundImage = item.style.backgroundImage;
  }
});

thumbList.forEach((item, index) => {
  item.addEventListener("click", () => {
    thumbList.forEach((i) => {
      i.classList.remove("selected");
    });
    item.classList.toggle("selected");
    const imgUrl = item.style.backgroundImage;
    wrapper.style.backgroundImage = imgUrl;
  });
});
