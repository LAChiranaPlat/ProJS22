class Publicacion{

	constructor(name,lname,comment){
		this.name=name;
		this.lname=lname;
		this.comment=comment;
	}

	validate(objMain){
		if(this.name=="" || this.lname=="" || this.comment=="")
		{
			alert("No debe tener campos vacios su aplicacion");
			objMain.value="";
			objMain.focus();	

			return false;
		}

		return true
	}	

	publicar(content,plantilla, controls){

		let fragment=document.createDocumentFragment();
		let template=plantilla.content;

		let clon=template.cloneNode(true);

		clon.querySelector(".autor").textContent=this.lname+", " + this.name;
		clon.querySelector(".comment").textContent=this.comment;

		fragment.append(clon);
		content.append(fragment);

		controls.forEach((e)=>{
			e.value=""
		})

		controls[0].focus();

	}

	mandoPost(element){

		element.addEventListener("click",(e)=>{

			e.preventDefault();
			e.stopPropagation();

			let spot=document.querySelector(".spot")


			if(e.target.getAttribute("class")=="close"){
				let parent=e.target.parentNode;
				let usuario=parent.querySelector(".autor").textContent;
				
				spot.classList.add("spotShow");
				spot.querySelector("#autor").textContent=usuario;

				spot.querySelector("#yes").addEventListener("click",()=>{
					parent.remove();
					spot.classList.remove("spotShow");	
				})

			}

		})

	}

	static obj(...element){
		
		let controles=[];
		let valores=[];

		element.forEach((item)=>{
			
			controles.push(document.getElementById(item));
			valores.push(document.getElementById(item).value);

		})
		
		return [controles,valores];
	}



}