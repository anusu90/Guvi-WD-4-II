// 'itBagv4BooQtWpHceGUguaSH86K5Be2O'
// let url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=itBagv4BooQtWpHceGUguaSH86K5Be2O'


async function getData(url){
    let res = await fetch(url);
    let body = await res.json();
    console.log(body);
    displayHTML(body);
}

displayHTML =  (Jbody) => {
    displayCol = document.getElementById('all-card');
    displayCol.innerHTML = "";
    section = Jbody.section;
    // console.log(section)
    news = Jbody.results;
    news.forEach((newsItem) => {
        console.log(newsItem.title);

        temp = document.createElement('div');
        temp.classList.add('row', 'card-row')
        temp.innerHTML = `<div class="col-lg-12 news-feed">`+
`                <div class="card mb-3 shadow p-3 mb-5 bg-white rounded">`+
`                  <div class="row no-gutters">`+
`                    <div class="col-md-8">`+
`                      <div class="card-body">`+
`                        <h5 class="card-title">${section.toUpperCase()}</h5>`+
`                        <p class="card-text news-title">${newsItem.title}</p>`+
`                        <p class="card-text">${newsItem.abstract}</p>`+
`                        <p class="card-text"><small class="text-muted"><a href="${newsItem.short_url}" target="_blank">Click to read more</a></small></p>`+
`                      </div>`+
`                    </div>`+
`                    <div class="order-first order-md-0 col-md-4">`+
`                      <img src="${newsItem.multimedia[3].url}" class="card-img" alt="...">`+
`                    </div>`+
`                 </div>`+
`                </div>`+
`              </div>`+
`            </div>`

        console.log(temp)
        displayCol.append(temp)
    })
}



// arts, automobiles, books, business, fashion, food, health, home, insider, 
// magazine, movies, nyregion, obituaries, opinion, politics, realestate, 
// science, sports, sundayreview, technology, theater, t-magazine, travel, 
// upshot, us, world

document.querySelectorAll('.link-tag').forEach((aTag) => {
    aTag.addEventListener('click', (e) => {
        console.log(e);
        sec = (e.explicitOriginalTarget.innerText.toLowerCase())
        let url = `https://api.nytimes.com/svc/topstories/v2/${sec}.json?api-key=itBagv4BooQtWpHceGUguaSH86K5Be2O`
        getData(url);
    })
})

getData(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=itBagv4BooQtWpHceGUguaSH86K5Be2O`)



