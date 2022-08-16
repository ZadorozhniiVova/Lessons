$(function(){

    

    const filmDB='http://omdbapi.com';
    const i = '?i=tt3896198';
    const apiKey='apikey=7c130cb8';
    $('#searchButton').on('click', function(){
        let pageNum = 1;
        let movieName = $('#search').val();
        let movieType = $('#type').val(); 
        const filmTop = $('#filmRight')

        filmTop.html('')
        filmTop.css('border', 'none')
        

        async function getSearch(){
            

            if(movieName !== '' && movieType !== 'undefined'){
                filmTop.html('')
                filmTop.css('border', 'none')
                
                const responce = await fetch(`${filmDB}/?s=${movieName}&type=${movieType}&${i}&${apiKey}&page=${pageNum}`)
                const respJson = await responce.json()

                if(parseInt(respJson.totalResults)>0){
                    const respJsonSearch = respJson.Search;
                    console.log(respJsonSearch)

                    for(let f = 0; f <=respJsonSearch.length; f++){
                        const filmItem = $(`<div class="film__item" id="${respJsonSearch[f].imdbID}"></div>`)
                        filmItem.css('border', '2px solid brown')
                        filmItem.append($(`<h1 class="film__title">Film Name: ${respJsonSearch[f].Title}</h1>`));
                        
                        filmItem.append($(`<div class="film__add"><span class="film__add-el">Year:</span><span class="film__info"> ${respJsonSearch[f].Year}</span></div>`));
                        filmItem.append($(`<div class="film__add"><span class="film__add-el">Type:</span><span class="film__info"> ${respJsonSearch[f].Type}</span></div>`));                    
                        if(respJsonSearch[f].Poster !== 'N/A'){
                            filmItem.append($(`<img class='film__poster' src="${respJsonSearch[f].Poster}">`));
                        }else{
                            filmItem.append($(`<img class='film__poster' src="https://cdn2.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg">`));
                        }
                        filmTop.append(filmItem);
                        
                        
                    }
                }else{
                    alert(respJson.Error)
                }
                
                
            } else{
                alert('Write Name and choose Type')
            } 
            
                 
        }
        
        
        
        
        getSearch();
        
        async function pageSearch(){
            $("#pagination").html('')
            const totalFilms = await fetch(`${filmDB}/?s=${movieName}&type=${movieType}&${apiKey}`);
            const totalFilmsJson = await totalFilms.json();
            const totalPages = parseInt(totalFilmsJson.totalResults / 10)
    
            for(let page=1;page<=totalPages;page++){
                $("#pagination").append($(`<li class="filmPage">${page}</li>`)); 
            }

            let items = $('.filmPage');
        
            items.on('click', function(event){
                pageNum = parseInt(event.target.innerText)                    
                getSearch();

            })
             
        }
        pageSearch();

        function showInfo(){
                
            $('#filmRight').on('click', async function(event){
                
                const InfoURL = "http://www.omdbapi.com/"
                let targetId = event.target.parentNode.getAttribute("id")
                if(targetId !== 'null' && targetId !== 'filmRight' && targetId.Response !== 'False'){
                    $('.modal').css("opacity", "0");
                    $('.modal').css("z-index", "-1");
                    $('.modal').html('');
                    console.log(targetId)
                    const filmInfo = await fetch(`${InfoURL}?i=${targetId}&${apiKey}`)
                    const filmInfoJson = await filmInfo.json();
                    console.log(filmInfoJson)

                    $('.modal').append($(`<div class="modal__title"><h2 class="modal__title-text">Film Info</h2></h2></div>`));
                    $('.modal').append($(`<svg class="modal__button" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 378.303 378.303" style="enable-background:new 0 0 378.303 378.303;"xml:space="preserve"><polygon style="fill:#FF3501;" points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018 28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "/></svg>
                    `));
                    $('.modal').append($(`<div class="modal__info"></div>`));

                    if(filmInfoJson.Poster !== 'N/A'){
                        $('.modal__info').append($(`<div class="modal__left"><img class="modal__poster" src="${filmInfoJson.Poster}"></div>`));
                    }else{
                        $('.modal__info').append($(`<div class="modal__left"><img class="modal__poster" src="https://cdn2.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"></div>`));
                    }
                    $('.modal__info').append($(`<div class="modal__right"></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Actors:</span><span class="modal__el-info">${filmInfoJson.Actors}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Awards:</span><span class="modal__el-info">${filmInfoJson.Awards}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">BoxOffice:</span><span class="modal__el-info">${filmInfoJson.BoxOffice}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Country:</span><span class="modal__el-info">${filmInfoJson.Country}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">DVD:</span><span class="modal__el-info">${filmInfoJson.DVD}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Director:</span><span class="modal__el-info">${filmInfoJson.Director}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Genre:</span><span class="modal__el-info">${filmInfoJson.Genre}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Language:</span><span class="modal__el-info">${filmInfoJson.Language}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Metascore:</span><span class="modal__el-info">${filmInfoJson.Metascore}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Plot:</span><span class="modal__el-info">${filmInfoJson.Plot}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Ratings:</span><span class="modal__el-info">${filmInfoJson.imdbRating}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Released:</span><span class="modal__el-info">${filmInfoJson.Released}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Runtime:</span><span class="modal__el-info">${filmInfoJson.Runtime}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Writer:</span><span class="modal__el-info">${filmInfoJson.Writer}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Year:</span><span class="modal__el-info">${filmInfoJson.Year}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Actors:</span><span class="modal__el-info">${filmInfoJson.Actors}</span></div>`));
                    $('.modal__right').append($(`<div class="modal__el"><span class="modal__el-name">Actors:</span><span class="modal__el-info">${filmInfoJson.Actors}</span></div>`));
                    $('.modal').css("opacity", "1");
                    $('.modal').css("z-index", "3");
                    
                }

                function closeInfo(){
                    $('.modal__button').on('click', () => {
                        console.log('click')
                        
                        $('.modal').css("opacity", "0");
                        $('.modal').css("z-index", "-1");
                    })
                }
                closeInfo();
                
            })
        }
        showInfo() 

        

        
    })

   

    
    
})












