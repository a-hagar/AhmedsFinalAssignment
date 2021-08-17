const headerTitle = (elem, txt, txt2, txt3)=>{
    elem.innerHTML= `<h1>${txt}</h1><span id="subhead">${txt2}</span><span id="author"> By ${txt3}</span>`;
}

export { headerTitle }; 
