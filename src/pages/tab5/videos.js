export const videos = 
        fetch("https://api.airtable.com/v0/appoWhRvLK7iOlxJY/videos",{
            method: 'GET',
            headers: {
                "Authorization": "Bearer token"
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