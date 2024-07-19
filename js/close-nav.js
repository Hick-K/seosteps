'use strict';

// 親ナビゲーションに連動させて子ナビゲーションをまとめて閉じる

function DisChecked(){
  for (var i=0; i<document.form.children.length; i++){
    document.form.children[i].checked = false;
  }
}