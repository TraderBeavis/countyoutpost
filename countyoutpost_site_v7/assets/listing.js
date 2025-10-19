
async function loadJSON(url){ const r = await fetch(url, {cache:'no-store'}); return r.json(); }
function renderItems(items, type){
  const list = document.getElementById('list');
  list.innerHTML='';
  const ok = i => (i.status||'approved')==='approved';
  items.filter(ok).forEach(i=>{
    const li = document.createElement('li');
    li.className='card';
    if(type==='classified'){
      li.innerHTML = `<h3>${i.title}${i.price?` — $${i.price}`:''}</h3>
        <p class="small">${i.category||''}${i.zip?` • ${i.zip}`:''}</p>
        ${i.photos&&i.photos[0]?`<img src="${i.photos[0]}" style="width:100%;border-radius:10px;margin:8px 0">`:''}
        <p>${i.description||''}</p>
        <p class="small">${i.phone?`☎ ${i.phone} `:''}${i.email?` • ✉ ${i.email}`:''}</p>`;
    } else if(type==='event'){
      li.innerHTML = `<h3>${i.title}</h3><p>${i.when||''}</p><p class="small">${i.venue||''} ${i.address||''}</p>${i.url?`<p><a href="${i.url}">More info</a></p>`:''}`;
    } else {
      li.innerHTML = `<h3>${i.name}</h3><p class="small">${i.category||''}</p><p>${i.about||''}</p><p class="small">${i.address||''}</p><p class="small">${i.phone||''} ${i.url?` • <a href="${i.url}">${i.url}</a>`:''}</p>`;
    }
    list.appendChild(li);
  });
}
