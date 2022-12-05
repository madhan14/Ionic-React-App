const data = [];

fetch("https://api.airtable.com/v0/appoWhRvLK7iOlxJY/videos",{
    method: 'GET',
    headers: {
        "Authorization": "Bearer pat5xxuQ6KRHHR0hr.67219bb3c5e8969093f950e639c5a6a1f5150bbe36c4007d7381ce48be6b275a"
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