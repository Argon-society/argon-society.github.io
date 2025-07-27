document.addEventListener('DOMContentLoaded', () => {
  fetch('/data.json')
    .then(response => response.json())
    .then(data => {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));

      const topNews = data.slice(0, 5);

      const list = document.getElementById('news');
      const newstop = document.getElementById('newstop');

      if (list) {
        topNews.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `<a href="${item.url}" target="_self">${item.title} (${item.date})</a>`;
          list.appendChild(li);
        });
      }

      if (newstop) {
        data.forEach(item => {
          const lili = document.createElement('li');
          lili.innerHTML = `<a href="${item.url}" target="_self">${item.title} (${item.date})</a>`;
          newstop.appendChild(lili);
        });
      }
    })
    .catch(error => {
      console.error("ニュースの読み込みに失敗しました", error);
    });
});
