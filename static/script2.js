console.log('hello')

async function getData(url){
    let res = await fetch(url);
    let body = await res.json();
    console.log(body);
    // displayHTML(body);
}

document.querySelectorAll('.link-tag').forEach((aTag) => {
    aTag.addEventListener('click', (e) => {
        console.log(e);
        sec = (e.target.innerText.toLowerCase())
        let url = `https://api.nytimes.com/svc/topstories/v2/${sec}.json?api-key=itBagv4BooQtWpHceGUguaSH86K5Be2O`
        getData(url);
    })
})