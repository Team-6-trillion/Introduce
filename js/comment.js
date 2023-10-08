import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  doc,
  query,
  deleteDoc,
  getDocs,
  orderBy,
  getCountFromServer,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

$("#commentbtn").click(async function () {
  let capital = $("#capital").val();
  let comment = $("#comment").val();
  if (capital != "서울") {
    window.location.reload();
  }
  console.log("안티스팸 통과");
  let doc = { comment, time: Date.now() };
  await addDoc(collection(db, "comments"), doc);
  paintComment(comment);
  $("#capital").val("");
  $("#comment").val("");
});

$(document).on("click", "#deleteBtn", async function (event) {
  const commentId = event.target.parentNode.id;
  await deleteDoc(doc(db, "comments", commentId));
  window.location.reload();
});

const paintComment = (comment) => {
  let comment_html = `
  <div class="mb-3 row">
  <label for="staticEmail" class="col-sm-2 col-form-label"
    >3기 화이팅 👉🏻</label
  >
  <div class="col-sm-10">
    <input
      type="text"
      readonly
      class="form-control-plaintext"
      id="staticEmail"
      value="${comment}!"
    />
  </div>
</div>
               `;
  $(".commentList").prepend(comment_html);
};

const getCommentsCnt = async () => {
  const commentsCntRef = collection(db, "comments");
  const commentsCntSnapshot = await getCountFromServer(commentsCntRef);
  console.log("count: ", commentsCntSnapshot.data().count);
  return commentsCntSnapshot.data().count;
};

const init = async () => {
  const commentsRef = collection(db, "comments");
  const q = query(commentsRef, orderBy("time"));

  const queyrSnapshot = await getDocs(q);
  queyrSnapshot.forEach((doc) => {
    let row = doc.data();
    let comment = row["comment"];
    // html 추가하기
    paintComment(comment);
  });
};

init();
