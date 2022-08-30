const h1s = document.getElementsByTagName('h1');
console.log(h1s);
for(const h1 of h1s){
    console.log(h1.innerText);
}
document.getElementById('main-header-btn').addEventListener('click',function(){
    const penguinText = document.getElementById('be-penguin-text');
    penguinText.innerText = 'I AM PENGUIN';
})