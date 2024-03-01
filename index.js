const thisScript = document.querySelector('script#template-load');
const templatesToRender = Array.from(thisScript.dataset.templates.split(' '));

templatesToRender.forEach(function(template) {
  
})

const templates = Array.from(document.querySelectorAll('template'));

if(templates.length > 0) {
  templates.forEach(function(template) {
    
    const templateSrc = template.getAttribute('src');

    // fetch(templateSrc)
    // .then(response => response.text())
    // .then(response => {
    //   template.outerHTML = response;
    // })

  });
}