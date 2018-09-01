import _ from 'lodash'; 
import './style.css';
import Icon from './icon.png';
import data from './data.json';
import xmlData from './data.xml';

function component() {
	let element = document.createElement("div");

	element.innerHTML = _.join(data.text, " ");
	element.classList.add('hello');

	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	console.log(xmlData);

	return element;
}

document.body.appendChild(component());