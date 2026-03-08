const postBtn = document.getElementById("post-btn");
postBtn.addEventListener("click", function () {
  const commentBox = document.getElementById("comment-box");
  const commentText = commentBox.value;

  const commentConatainer = document.getElementById("comment-container");

  const p = document.createElement("p");
  p.innerText = commentText;
  commentConatainer.appendChild(p);
  commentBox.value = "";
});
