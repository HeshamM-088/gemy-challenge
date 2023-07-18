let $put = document.querySelector("input");
let $btn = document.querySelector(".btn-danger");
let $ol = document.querySelector("ol");
// console.log($btn);

$put.addEventListener("keyup", () => {
  if ($put.value.length > 5) {
    $btn.disabled = false;
  } else {
    $btn.disabled = true;
  }
});

$btn.addEventListener("click", () => {
  let $li = document.createElement("li");
  let x = $put.value;
  let $text = document.createTextNode(x);
  $li.appendChild($text);
  $ol.append($li);
  $li.setAttribute("class", "bg-success fs-5 mt-3 rounded p-2");
  $put.value = "";

  if ($put.value.length > 5) {
    $btn.disabled = false;
  } else {
    $btn.disabled = true;
  }

  let $removebtn = document.createElement("button");
  let rebtntext = document.createTextNode("x");
  $removebtn.appendChild(rebtntext);
  $removebtn.setAttribute("class", "btn btn-danger ms-2");
  $li.append($removebtn);

  $removebtn.addEventListener("click", () => {
    $ol.removeChild($li);
  });
});
