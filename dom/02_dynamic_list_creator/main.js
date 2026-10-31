const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click" , ()=>{
   if(input.value === "") {
    alert("Mat kr lala!")
    return;
   }

   const li = document.createElement("li");
   const span = document.createElement("span");
   const delBtn = document.createElement("button");
   delBtn.textContent = "Delete";
   delBtn.classList.add("delete");

   span.textContent = input.value;

   delBtn.addEventListener("click" , ()=>{
        li.remove();
   })
   span.addEventListener("dblclick",()=>{
    const edtiInput = document.createElement("input");
     edtiInput.type ="text";
     edtiInput.value =span.textContent;
     edtiInput.classList.add("edit-input");
     li.replaceChild(edtiInput,span)
     edtiInput.focus();
     edtiInput.select();
     let  done =false;
     const save = ()=>{
        if(done) return;
        done =false;
        const newText = edtiInput.value.trim();
      if (newText !== "") span.textContent = newText;
      li.replaceChild(span, edtiInput);
    };

    edtiInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") save();
      if (e.key === "Escape") {
        edtiInput.value = span.textContent; // cancel
        save();
      }
    });

    edtiInput.addEventListener("blur", save);
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
});