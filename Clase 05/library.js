function obj(x){
	return document.getElementById(x) || document.querySelectorAll(x)
}

function listener(element,event,callback){

	obj(element).addEventListener(event,(e)=>{
		
		e.preventDefault();
		e.stopPropagation();

		callback()

	})
	
	return obj(element);
}

function controlGalery(element,imageSpot){

	obj(element).forEach((item)=>{

		item.addEventListener("click",(e)=>{
			
			e.preventDefault();
			e.stopPropagation();

			obj(imageSpot).src=item.src
			obj("spot").classList.add("spotShow")

			obj("spot").addEventListener("click",(e)=>{
				console.log(e.target.getAttribute("class"))
			})
		})

	})
	
}
