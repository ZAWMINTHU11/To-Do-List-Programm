
let inputDataObj = JSON.parse(localStorage.getItem('inputObj'));

if(inputDataObj === null){
  inputDataObj = {
    inputTextList : [] ,
    inputDataList : []
  }
}

function addToDoList(){
  let inputText = document.querySelector('.input-text').value;
  let inputDate = document.querySelector('.input-date').value;
  inputDataObj.inputDataList.push(inputDate);
  inputDataObj.inputTextList.push(inputText);
  localStorage.setItem('inputObj',JSON.stringify(inputDataObj));
  let todolistHTML = '';
  
  for(let i = 0; i < inputDataObj.inputDataList.length; i ++){
    
    let html = `
    <div class="listShown${i}">
      <p class="text">${inputDataObj.inputTextList  [i]}</p> 
      <p class="text">
        (${inputDataObj.inputDataList[i]})
      </p> 
      <button 
      onclick="
      inputDataObj.inputTextList.splice(${i},1);
      inputDataObj.inputDataList.splice(${i},1);
      delectList(${i});console.log(JSON.stringify(inputDataObj))" class="add-button delectButton">
        Delect
      </button>
    </div>`;

    todolistHTML += html;
    document.querySelector('.todolist-container').innerHTML = todolistHTML;
  }
 
}

function delectList(para){
  document.querySelector(`.listShown${para}`).remove()
}

function clearAllList(){
  localStorage.removeItem('inputObj');
  
}