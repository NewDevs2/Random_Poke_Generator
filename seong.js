function InputCard(){
  window.location.reload(true);
  //아예 창이 새로고침이라 저장된 정보도 날라감.
}

let cardDex= []

function AddCard(){
  const PickImg=document.createElement('img');
  PickImg.setAttribute('src',frontPhoto);
  root.children[2].appendChild(PickImg);

  const Pickname=document.createElement('p');
  p.innerText=pokeName;
  root.children[2].appendChild(Pickname);
}

