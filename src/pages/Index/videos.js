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
        var elements = element.fields;
        if(elements.active == "Active"){
            data.push(elements);
        }
    });
})
.catch(error => console.log('error', error));

export const datas = data;