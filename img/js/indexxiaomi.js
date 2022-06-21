let filter = document.getElementsByClassName("remen")
	for(let i=0;i<filter.length;i++){
		filter[i].addEventListener('click',function(){
			filter[i].classList.add('active')
			for(let j=0;j<filter.length;j++){
				if(i!=j){
					filter[j].classList.remove('active')
				}
			}
		})
    }