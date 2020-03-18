let ul = document.querySelector("ul");

let data = [
    {
        image:
            "http://data.mavo.io/portfolio/images/pasted-image-1494464667397.png",
        name: "Carwash",
        category: "Painting"
    },
    {
        image:
            "http://data.mavo.io/portfolio/images/pasted-image-1494528264937.png",
        name: "Muck Mouth",
        category: "Painting"
    },
    {
        image:
            "http://data.mavo.io/portfolio/images/pasted-image-1494528646446.png",
        name: "Fishwall",
        category: "Painting"
    },
    {
        image: "http://data.mavo.io/portfolio/images/web-coffe-marilyn.jpg",
        name: "Web Coffe Marilyn",
        category: "Painting"
    },
    {
        image:
            "http://data.mavo.io/portfolio/images/pasted-image-1494903924970.png",
        name: "Web 3 Jules",
        category: "Painting"
    },
    {
        image: "http://data.mavo.io/portfolio/images/web-electric3.jpg",
        name: "Web electric3",
        category: "Painting"
    }
];

function createInfo(data) {

  data.forEach((e, index) => {
      let li = document.createElement('li');

      li.setAttribute("data-id", index);

      li.classList.add("imageList");

      let img = document.createElement('img');

      img.setAttribute("src", e.image);

      img.classList.add("image");

      let btn = document.createElement('button');

      btn.classList.add("btn");

      btn.textContent = "Details"

      li.appendChild(img);

      li.appendChild(btn);

      ul.appendChild(li);

      btn.addEventListener('click', displayInfo);
  });

}

function displayInfo(event) {
  let id = event.target.parentNode.dataset.id;

  data.forEach((e, index) => {

    if (index == id) {

        document.querySelector(".category").innerHTML = e.category;
        document.querySelector(".name").innerHTML = e.name;
        document.querySelector(".result").setAttribute("src", e.image);
        console.log("index", index, "id", id);
    }
  });
}

createInfo(data);