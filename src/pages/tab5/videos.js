export const videos = 
        fetch("https://api.airtable.com/v0/appoWhRvLK7iOlxJY/videos",{
            method: 'GET',
            headers: {
                "Authorization": "Bearer pat5xxuQ6KRHHR0hr.67219bb3c5e8969093f950e639c5a6a1f5150bbe36c4007d7381ce48be6b275a"
            }
        })
        .then(response => response.text())
        .then(result => {
            // console.log(JSON.parse(result).records)
            // console.log(video)
            var test_vid = JSON.parse(result).records;
            console.log(test_vid);
            return test_vid;
            // return test_vid.forEach((element: any) => {
            //     var url = element.fields;
            //     <IonCol>
            //         <iframe src={url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                                                    
            //     </IonCol>
            // });
            // console.log(test_vid);
            
        })
        .catch(error => console.log('error', error));