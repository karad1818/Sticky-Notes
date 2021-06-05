var create_note = document.querySelector("#create_box");
var button_box = document.querySelector("#button_box");
var all_notes = document.querySelector("#all_notes");

button_box.addEventListener("click",function(){
	if(create_note.value!=""){
		var one_note = document.createElement("div");
		one_note.classList.add("my_planning_list");

		//created header
		var header = document.createElement("header");
		one_note.appendChild(header);
		header.textContent=create_note.value;

		//create main div
		var main_div = document.createElement("div");
		one_note.appendChild(main_div);
		main_div.classList.add("add_list");

		//create input and button in main div
		var main_input = document.createElement("input");
		main_input.classList.add("text");

		var main_button = document.createElement("button");
		main_button.classList.add("submit");
		main_button.classList.add("btn");
		main_button.textContent="Add";

		main_div.appendChild(main_input);
		main_div.appendChild(main_button);

		var last_div = document.createElement("div");
		one_note.appendChild(last_div);
		last_div.classList.add("list_store");

		//put one notes in all notes
		all_notes.appendChild(one_note);

		//Clearing text in niput field
		create_note.value = "";


		/* copied JS */
		// var text_input=document.getElementById("text");
		main_button.addEventListener("click",printList);
		function printList(){
			if(main_input.value!=""){
				var list_value=main_input.value;  //list value
				var list_item=document.createElement("p");  //Creating a p element
				var list_check_btn=document.createElement("i"); //Creating check button
				var list_delete_btn=document.createElement("i"); //Creating delete button

				one_note.appendChild(list_item);  //put p inside div element
				list_item.textContent=list_value;//change the content of p element
				list_item.appendChild(list_check_btn);
				var span_space=document.createElement("span");
				span_space.textContent=" ";
				list_item.appendChild(span_space);
				list_item.appendChild(list_delete_btn);
				list_check_btn.classList.add("fa-check");
				list_check_btn.classList.add("fas");
				list_check_btn.classList.add("fa-xs");
				list_check_btn.classList.add("icon2");
				list_delete_btn.classList.add("fa-trash-alt");
				list_delete_btn.classList.add("far");
				list_delete_btn.classList.add("fa-xs");
				list_delete_btn.classList.add("icon1");
				list_item.classList.add("text_items");
				main_input.value="";  //Just Clearing the input field

				//deleting and checking
				list_delete_btn.addEventListener("click",deleteTask);
				list_check_btn.addEventListener("click",checkTask);

				function deleteTask(x){
					x.target.parentElement.remove();
				}
				function checkTask(x){
					x.target.parentElement.classList.toggle("linedraw");
				}
			}
		}


	}else{
		return ;
	}
});


