var DBData = [
  {
    id: 1,
    title: "post 1",
    content: "This is my Blog",
    publish: "Kalam Khan",
    data: "202020",
  },
  {
    id: 2,
    title: "post 2",
    content: "This is my Blog",
    publish: "Kalam Khan",
    data: "202020",
  },
];

function addBlog(e) {
  //   e.preventDefault();

  let publish = document.getElementById("publisherName").value;
  let title = document.getElementById("titleBlog").value;
  let content = document.getElementById("contentBlog").value;

  let today = new Date().toISOString().slice(0, 10);

  const data = {
    title: title,
    content: content,
    publish: publish,
    data: today,
  };

  console.log("FORM SUBMIT", data);

  DBData.push(data);

  console.log("All Blog Post ", DBData);
  getAllBlogs();
  return false;
}

// for (let s of data) {
//   let node = document.createElement("h2");
//   let textnode = document.createTextNode(s.title);
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);
// }

function getAllBlogs() {
  console.log("run the code !!");
  let box = document.getElementById("myList");
  box.innerHTML = "";

  for (let blog of DBData) {
    box.innerHTML += `<div class="card" style="width: 50rem;">
  <img src="https://source.unsplash.com/2000x1500/?newsletter" class="card-img-top" alt="loading">
  <div class="card-body">
  <h5 class="card-title">${blog.title}</h5>
  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sequi commodi quod in nulla quasi id ipsam fugit excepturi. Aspernatur, debitis? Tempore unde omnis eum vero iste deserunt accusamus non Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sequi commodi quod in nulla quasi id ipsam fugit excepturi. Aspernatur, debitis? Tempore unde omnis eum vero iste deserunt accusamus non.
  </p>
  <a href="/contact.html" class="btn btn-primary">read more</a>
  </div>
  </div>`;
  }
}

window.addEventListener("load", getAllBlogs());

// axios
//   .get("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     console.log(res.data);
//     DBData.push(res.data);
//   })
//   .catch((error) => console.log(error));
