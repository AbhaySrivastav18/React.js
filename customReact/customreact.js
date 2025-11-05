function customrender(reactElement, container){
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        element.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(element);
}
const reactElement = {
    type : 'a',
    props:{
        href : 'https://www.google.com',
        target : '_blank'
    },
    children : 'Click to visit Google'
}
const mainContainer = document.querySelector('#root')

customrender(reactElement, mainContainer)