const headerTitle = (elem, txt, txt2, txt3)=>{
    elem.innerHTML= `<h1>${txt}</h1><p id="subhead">${txt2}</p><p id="author">By ${txt3}</p>`;
}

export { headerTitle }; 
