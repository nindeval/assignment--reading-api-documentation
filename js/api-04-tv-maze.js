/*
##### TV Maze
https://www.tvmaze.com/ap

1. What is the average rating for the show Better Call Saul?*/

const answerElement_tvmaze_1 = document.getElementById('tvmaze-1')

request.get('http://api.tvmaze.com/search/shows?q=better-call-saul')
  .then((serverRes)=>{
    var JsonResTvRating = serverRes.body

    answerElement_tvmaze_1.innerHTML = `<p>Average : ${JsonResTvRating[0].show.rating.average}</p>`
  })

/*2. When was the premiere date for the 9th season of Friends?*/

const answerElement_tvmaze_2 = document.getElementById('tvmaze-2')

request.get('http://api.tvmaze.com/shows/431/seasons')
  .then((serverRes)=>{
    var JsonResTvPremiere = serverRes.body
    //console.log(JsonResTvPremiere[8].premiereDate);
    answerElement_tvmaze_2.innerHTML = `<p>Premiere of 9th Season of Friends: <b>${JsonResTvPremiere[8].premiereDate}</b></p>`
  })


/*3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
*/
const answerElement_tvmaze_3 = document.getElementById('tvmaze-3')

request.get('http://api.tvmaze.com/shows/73/cast')
  .then((serverRes)=> {
    var JsonResTWD = serverRes.body
  //  console.log(JsonResTWD.person.name);
    for( var i = 0; i < JsonResTWD.length; i++ ){
      //console.log(JsonResTWD[i].person.name);
      if(JsonResTWD[i].person.name !== 'Andrew Grimes' ){
        answerElement_tvmaze_3.innerHTML = `<p>He doesn't exists</p>`
      }
      //answerElement_tvmaze_3.innerHTML = `<p>${resultTWDActor}</p>`
    }

  })
