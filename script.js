// JSONファイルを読み込む
fetch('data.json')
  .then(response => response.json())  // ① レスポンスをJSON形式として読み込む
  .then(data => {                     // ② JSONデータを受け取る
    // 日付で新しい順に並べ替え
    data.sort((a, b) => new Date(b.date) - new Date(a.date)); // ③ ソート

    // 上位5件を取り出す
    const topNews = data.slice(0, 5); // ④ 最初の5件だけを取得

    // HTMLの<ul id="news-list">に追加
    const list = document.getElementById('news'); // ⑤ HTMLの指定した場所を取得

    // 一つ一つのニュースをリスト表示する
    topNews.forEach(item => {  // ⑥ 各ニュースについて繰り返す
      const li = document.createElement('li'); // 新しい<li>要素を作る
      li.innerHTML = `<a href="${item.url}" target="_blank">${item.title} (${item.date})</a>`; // ⑦ HTMLリンク形式にする
      list.appendChild(li);  // ⑧ 作った<li>をHTMLに追加する
    });
  })
  .catch(error => {
    // エラーが起きたときの処理
    console.error("ニュースの読み込みに失敗しました", error); // ⑨ エラー内容をコンソールに表示
  });