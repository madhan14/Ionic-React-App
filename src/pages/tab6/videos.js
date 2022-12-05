const data = [];

fetch("https://api.airtable.com/v0/appoWhRvLK7iOlxJY/videos",{
    method: 'GET',
    headers: {
        "Authorization": "Bearer token"
    }
})
.then(response => response.text())
.then(result => {
    var test_vid = JSON.parse(result).records;
    test_vid.forEach((element) => {
        var url = element.fields;
        data.push(url);
    });
})
.catch(error => console.log('error', error));

export const datas = data;