import {hello, bye} from "./components/example"

(()=>{
	hello();
	bye();
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('page2')) {
		// functions here
	}else if (document.body.classList.contains('page3')) {
		// functions here
	}
})();
