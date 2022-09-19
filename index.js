const article = [
  {
    id: 1,
    title: "Sports Title 1",
    image: "./images/item-1.jpeg",
    read: "32 min read",
    category: "sports",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus illo laborum ab libero! Aspernatur minima, reprehenderit eaque tempora, placeat iusto nihil obcaecati, porro libero error hic en",
  },
  {
    id: 2,
    title: "Space Title 2",
    image: "./images/item-2.jpeg",
    read: "13 min read",
    category: "space",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis sapiente impedit dolorem alias ad repellendus aut quam, velit porro eum. Eligendi illum voluptas deleniti architecto voluptates",
  },
  {
    id: 3,
    title: "Mathematics Title 3",
    image: "./images/item-3.jpeg",
    read: "22 min read",
    category: "mathematics",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam ipsum maxime quis eligendi eveniet perferendis qui repudiandae corrupti sint, error, libero earum eaque. Dicta voluptas est quas do",
  },
  {
    id: 4,
    title: "History Title 4",
    image: "./images/item-4.jpeg",
    read: "26 min read",
    category: "history",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consectetur sunt atque corrupti velit, aliquid consequatur laborum numquam, adipisci inventore facere. Error necessitatibus pariatur ",
  },
  {
    id: 5,
    title: "Space Title 5",
    image: "./images/item-5.jpeg",
    read: "8 min read",
    category: "space",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio odit, quisquam facere perferendis illum veritatis quia expedita doloribus rerum beatae, exercitationem, fuga nisi omn",
  },
  {
    id: 6,
    title: "Sports Title 6",
    image: "./images/item-6.jpeg",
    read: "19 min read",
    category: "sports",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio odit, quisquam facere perferendis illum veritatis quia expedita doloribus rerum beatae, exercitationem, fuga nisi omn",
  },
];

// load article-container contents

const articleContainer = document.querySelector(".article-container");

const generateItem = (articleItem) => {
  articleContainer.innerHTML = "";

  articleItem.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("single-article");

    const img = document.createElement("img");
    img.classList.add("article-img");
    img.src = item.image;

    const divInfo = document.createElement("div");
    divInfo.classList.add("article-info");

    const divHead = document.createElement("div");
    divHead.classList.add("article-heading");

    const divContent = document.createElement("div");
    divContent.classList.add("article-content");

    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");

    const title = document.createTextNode(item.title);
    const read = document.createTextNode(item.read);
    const desc = document.createTextNode(item.desc);

    h4.appendChild(title);
    h5.appendChild(read);
    p.appendChild(desc);
    divHead.appendChild(h4);
    divHead.appendChild(h5);

    divContent.appendChild(p);

    divInfo.appendChild(divHead);
    divInfo.appendChild(divContent);

    article.appendChild(img);
    article.append(divInfo);

    articleContainer.appendChild(article);
  });
};

window.addEventListener("load", () => {
  generateItem(article);
  generateButton();
});

// load buttons from category

const categoryList = article.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["all"]
);

const categoryBtn = document.querySelector(".category-btns");

const generateButton = () => {
  categoryBtn.innerHTML = "";

  categoryList.forEach((cat) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.setAttribute("data-tag", cat);

    const catTag = document.createTextNode(cat);
    button.appendChild(catTag);

    categoryBtn.append(button);
  });

  const tagBtn = document.querySelectorAll(".btn");
  // click button event

  tagBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tagName = e.currentTarget.dataset.tag;

      const filteredArray = article.filter((item) => {
        if (item.category === tagName) {
          return item;
        }
      });
      if (tagName === "all") {
        generateItem(article);
      } else {
        generateItem(filteredArray);
      }
    });
  });
};
