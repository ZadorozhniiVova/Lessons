"use strict"

// $(document).ready(() => {
//     console.log(`$(document).ready`)
// })

// $(function() {
//     console.log('ready')
//     const p = $('p')
//     const text = $('<div> pew pew pew pew pew</div>').appendTo('body')
//     const div = $(`<div>Hello World</div>`)
//     div.appendTo('body').addClass('greeting').css({color: 'red'})
//     div.appendTo('body')


//     div.on('click', () => {
//         console.log('clicked')
//         p.slideToggle(200)
//         text.fadeToggle(1000)
//     })
//     const divs = $('div')
//     console.log(divs)
//     divs.loop((i, d) =>{
//         console.log(d)
//         $(d).css({fontSize: 44})
//     })
// })

// $(function(){
//     console.log('it`s work')
//     const  accData= [
//         {
//             title: 'Accordion Item #1',
//             text: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//             id: 1,
//             toggled: false
//         },
//         {
//             title: 'Accordion Item #2',
//             text: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//             id: 2,
//             toggled: false
//         },
//         {
//             title: 'Accordion Item #3',
//             text: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//             id: 3,
//             toggled: false
//         },
//         {
//             title: 'Accordion Item #4',
//             text: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
//             id: 4,
//             toggled: false
//         },
//     ]

//     const container = $('<div id= "container"></div>').appendTo('body')

//     container.text('test text')
//     container.width('800px')
//     container.appendTo('body')

//     const closeAll = function(el) {
//         accData.forEach((el) => {
            
//         })
//     }
//     accData.forEach(item => {
//         console.log('item', item)
//         const accItem = $(`<div class='acc-item'></div>`)
//         accItem.css({border: '1px solid grey',width:"100%", borderradius: '10px 0'})

//         const accHeader =$('<div class="acc-header"></div>')
//         accHeader.css({backgroundColor: 'lightgrey', padding: '10px 20px', width: '100%'})
        
//         const accText = $('<div></div>').addClass('acc-text')
//         accText.css({padding:'10px 20px', width: '100%'})


//         accHeader.on('click', () => {
//             item.toggled = !item.toggled
//             if(!item.toggled){
//                 accText.slideUp()
                
//             }else {
//                 accText.slideDown()
//             }
//         })

//         if(!item.toggled){
//             accText.slideUp()
            
//         }else {
//             accText.slideDown()
//         }
//         accText.slideUp()

//         accHeader.text(item.title)
//         accText.text(item.text)


//         accHeader.appendTo(accItem)
//         accText.appendTo(accItem)


//         accItem.appendTo(container)

//         // for(let key of item){
//         //     console.log(key)
//         // }
//     })
    
// })

$(function() {
    const container = $('<div></div>')
        container.addClass('container')
        container.appendTo('body')  


    const containerContent = $('<div></div>')
        containerContent.addClass('container__content')
        containerContent.appendTo(container);

        const bgImage = $('<div></div>');
        bgImage.addClass('container__content-bg')
        bgImage.appendTo(containerContent);        

        const bgCover = $('<div></div>')
            bgCover.addClass('container__content-bgCover');
            bgCover.appendTo(containerContent);
        

        const gameInfo = $('<div></div>')
            gameInfo.addClass('gameInfo')
            gameInfo.appendTo(containerContent)



            const tabs = $('<div></div>');
                tabs.addClass('tabs');
                tabs.appendTo(gameInfo)
            
                let tabsItemInfo = $('<div></div>')
                    tabsItemInfo.addClass('tabsItem');
                    tabsItemInfo.appendTo(tabs)
                    tabsItemInfo.attr('id', 'info')
                    

                    const tabsItemInfoLogo = $('<div></div>')
                        tabsItemInfoLogo.addClass('tabsItem__logo') 
                        tabsItemInfoLogo.appendTo(tabsItemInfo)

                        const infoLogoImg = $('<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="logoImg__el" d="M6.33333 6.26304H19.6667H6.33333ZM6.33333 10.2103H19.6667H6.33333ZM6.33333 14.1576H11.6667H6.33333ZM16.7707 19.4206H22.3333C23.0406 19.4206 23.7189 19.1434 24.219 18.6499C24.719 18.1564 25 17.487 25 16.7891V3.63152C25 2.9336 24.719 2.26426 24.219 1.77075C23.7189 1.27725 23.0406 1 22.3333 1H3.66667C2.95942 1 2.28115 1.27725 1.78105 1.77075C1.28095 2.26426 1 2.9336 1 3.63152V16.7891C1 17.487 1.28095 18.1564 1.78105 18.6499C2.28115 19.1434 2.95942 19.4206 3.66667 19.4206H7.91733C9.25067 19.4206 10.3333 20.4877 10.3333 21.8048C10.3333 22.8679 11.6347 23.3995 12.396 22.6482L14.8853 20.1917C15.3853 19.6981 16.0635 19.4208 16.7707 19.4206V19.4206Z" stroke="#8D91A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')
                        infoLogoImg.addClass('logoImg')
                        infoLogoImg.appendTo(tabsItemInfoLogo)
                    
                    const tabsItemInfoText = $('<p></p>').addClass('tabsItem__text')
                        tabsItemInfoText.text('Information')
                        tabsItemInfoText.appendTo(tabsItemInfo)

                let tabsItemRating = $('<div></div>')
                    tabsItemRating.addClass('tabsItem');
                    tabsItemRating.appendTo(tabs)
                    tabsItemInfo.attr('id', 'rating')
 

                    const tabsItemRatingLogo = $('<div></div>')
                        tabsItemRatingLogo.addClass('tabsItem__logo') 
                        tabsItemRatingLogo.appendTo(tabsItemRating)

                        const ratingLogoImg = $('<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="logoImg__el" d="M11 14.4459C14.3333 19.2865 21 19.2542 21 13.9081C21 9.6054 16.5556 6.37837 11 1C5.44444 6.37837 1 9.6054 1 13.9081C1 19.2542 7.66667 19.2865 11 14.4459Z" stroke="#8D91A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="logoImg__el"  d="M10.4112 15.3736L7.07821 21.9663C7.02411 22.0735 6.99724 22.1936 7.00022 22.315C7.0032 22.4364 7.03593 22.5549 7.09522 22.659C7.15451 22.7631 7.23834 22.8492 7.33855 22.909C7.43876 22.9687 7.55193 23.0001 7.66704 23H14.333C14.4481 23.0001 14.5612 22.9687 14.6615 22.909C14.7617 22.8492 14.8455 22.7631 14.9048 22.659C14.9641 22.5549 14.9968 22.4364 14.9998 22.315C15.0028 22.1936 14.9759 22.0735 14.9218 21.9663L11.5888 15.3736C11.5321 15.2608 11.4473 15.1664 11.3436 15.1006C11.2398 15.0348 11.1211 15 11 15C10.8789 15 10.7602 15.0348 10.6564 15.1006C10.5527 15.1664 10.4679 15.2608 10.4112 15.3736V15.3736Z" stroke="#8D91A3" stroke-width="2" stroke-linecap="round"/></svg>')
                        ratingLogoImg.addClass('logoImg')
                        ratingLogoImg.appendTo(tabsItemRatingLogo)
                    
                    const tabsItemRatingText = $('<p></p>').addClass('tabsItem__text')
                        tabsItemRatingText.text('Ratings Info')
                        tabsItemRatingText.appendTo(tabsItemRating)

                let tabsItemBuy = $('<div></div>')
                    tabsItemBuy.addClass('tabsItem');
                    tabsItemBuy.appendTo(tabs)
                    tabsItemInfo.attr('id', 'buy')
                    
                    const tabsItemBuyLogo = $('<div></div>')
                        tabsItemBuyLogo.addClass('tabsItem__logo') 
                        tabsItemBuyLogo.appendTo(tabsItemBuy)

                        const buyLogoImg = $('<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="logoImg__el--fill" d="M23.9899 20.0403L22.4453 5.94854C22.3998 5.51745 22.199 5.11889 21.8817 4.83008C21.5644 4.54127 21.1532 4.38275 20.7278 4.38524H17.1092C16.9013 3.1578 16.2746 2.04469 15.3398 1.24234C14.405 0.439998 13.2221 0 12 0C10.7779 0 9.59503 0.439998 8.66022 1.24234C7.72542 2.04469 7.09873 3.1578 6.89078 4.38524H3.2722C2.8468 4.38275 2.43563 4.54127 2.11833 4.83008C1.80104 5.11889 1.6002 5.51745 1.55472 5.94854L0.0100746 20.0403C-0.0160867 20.2878 0.00884007 20.538 0.0832522 20.775C0.157664 21.012 0.279915 21.2305 0.442144 21.4165C0.603832 21.6007 0.801973 21.748 1.02353 21.8486C1.24508 21.9491 1.48502 22.0007 1.72755 22H22.2724C22.515 22.0007 22.7549 21.9491 22.9765 21.8486C23.198 21.748 23.3962 21.6007 23.5579 21.4165C23.7201 21.2305 23.8423 21.012 23.9167 20.775C23.9912 20.538 24.0161 20.2878 23.9899 20.0403ZM12 1.74302C12.7661 1.74451 13.5102 2.00457 14.116 2.48259C14.7218 2.96061 15.1552 3.62965 15.3485 4.38524H8.65146C8.84478 3.62965 9.27819 2.96061 9.88399 2.48259C10.4898 2.00457 11.2339 1.74451 12 1.74302ZM1.72755 20.2385L3.2722 6.14671H6.81517V8.78892C6.81517 9.02251 6.90621 9.24653 7.06827 9.4117C7.23033 9.57687 7.45012 9.66966 7.67931 9.66966C7.90849 9.66966 8.12829 9.57687 8.29034 9.4117C8.4524 9.24653 8.54345 9.02251 8.54345 8.78892V6.14671H15.4566V8.78892C15.4566 9.02251 15.5476 9.24653 15.7097 9.4117C15.8717 9.57687 16.0915 9.66966 16.3207 9.66966C16.5499 9.66966 16.7697 9.57687 16.9317 9.4117C17.0938 9.24653 17.1848 9.02251 17.1848 8.78892V6.14671H20.7278L22.2724 20.2385H1.72755Z" fill="#8D91A3" /></svg>')
                        buyLogoImg.addClass('logoImg')
                        buyLogoImg.appendTo(tabsItemBuyLogo)
                    
                    const tabsItemBuyText = $('<p></p>').addClass('tabsItem__text')
                        tabsItemBuyText.text('where to buy')
                        tabsItemBuyText.appendTo(tabsItemBuy)

            //вкладка Инфо
            const cardInfo = $('<div></div>')
                cardInfo.addClass('card')
                cardInfo.appendTo(gameInfo)
                cardInfo.addClass('active')
                

                    //Левая сторона карточки
                    const cardInfoLeft = $('<div></div>')
                        cardInfoLeft.addClass('pic__info')
                        cardInfoLeft.appendTo(cardInfo) 

                        //Обложка
                        const cardInfoLeftImg = $('<img src =./assets/img/image.png>')
                            cardInfoLeftImg.addClass('pic__info-img')
                            cardInfoLeftImg.appendTo(cardInfoLeft)
                            
                        // Контейнер Рейтинга
                        const cardInfoRating = $('<div></div>')
                            cardInfoRating.addClass('pic__info-rating')
                            cardInfoRating.appendTo(cardInfoLeft)

                            //Звезды
                            const cardInfoRatingStar1 = $('<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path class=" rating__star--fill" d="M19.4607 9.57081C19.685 9.39576 19.8513 9.15157 19.9364 8.87247C20.0216 8.59337 20.0212 8.29335 19.9353 8.01449C19.8495 7.73563 19.6825 7.49191 19.4578 7.31749C19.2332 7.14308 18.962 7.04673 18.6824 7.04195L13.2521 6.82699C13.2254 6.82506 13.1998 6.81508 13.1784 6.79826C13.157 6.78143 13.1407 6.75848 13.1315 6.73216L11.255 1.42155C11.1607 1.15137 10.9895 0.918065 10.7645 0.753232C10.5395 0.5884 10.2715 0.5 9.99698 0.5C9.72243 0.5 9.45451 0.5884 9.2295 0.753232C9.00449 0.918065 8.83325 1.15137 8.73897 1.42155L6.86854 6.75113C6.8593 6.77744 6.84299 6.8004 6.82157 6.81722C6.80016 6.83405 6.77457 6.84403 6.74787 6.84596L1.31759 7.06091C1.038 7.0657 0.766843 7.16205 0.542147 7.33646C0.317451 7.51087 0.150483 7.7546 0.0646547 8.03346C-0.0211739 8.31232 -0.0215589 8.61233 0.0635534 8.89144C0.148666 9.17054 0.315008 9.41473 0.539255 9.58977L4.799 13.0986C4.82032 13.1161 4.83626 13.1399 4.84484 13.1669C4.85341 13.1938 4.85426 13.2228 4.84727 13.2503L3.3811 18.6937C3.30512 18.9709 3.31248 19.2659 3.40218 19.5385C3.49188 19.8112 3.65955 20.0482 3.8824 20.2175C4.10525 20.3867 4.37245 20.48 4.64765 20.4845C4.92285 20.489 5.19269 20.4045 5.42047 20.2426L9.92156 17.0815C9.94373 17.0655 9.97004 17.0569 9.99698 17.0569C10.0239 17.0569 10.0502 17.0655 10.0724 17.0815L14.5735 20.2426C14.7982 20.41 15.0671 20.5 15.3428 20.5C15.6185 20.5 15.8874 20.41 16.1121 20.2426C16.335 20.0749 16.5028 19.839 16.5925 19.5673C16.6822 19.2956 16.6893 19.0014 16.6129 18.7253L15.1346 13.2629C15.1268 13.2355 15.1272 13.2062 15.1359 13.1791C15.1445 13.1519 15.1609 13.1282 15.1829 13.1112L19.4607 9.57081Z" fill="#8D91A3"/></svg>') 
                                cardInfoRatingStar1.appendTo(cardInfoRating)
                                cardInfoRatingStar1.addClass('rating__star')
                                cardInfoRatingStar1.attr('id','star1')

                            const cardInfoRatingStar2 = $('<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path class=" rating__star--fill" d="M19.4607 9.57081C19.685 9.39576 19.8513 9.15157 19.9364 8.87247C20.0216 8.59337 20.0212 8.29335 19.9353 8.01449C19.8495 7.73563 19.6825 7.49191 19.4578 7.31749C19.2332 7.14308 18.962 7.04673 18.6824 7.04195L13.2521 6.82699C13.2254 6.82506 13.1998 6.81508 13.1784 6.79826C13.157 6.78143 13.1407 6.75848 13.1315 6.73216L11.255 1.42155C11.1607 1.15137 10.9895 0.918065 10.7645 0.753232C10.5395 0.5884 10.2715 0.5 9.99698 0.5C9.72243 0.5 9.45451 0.5884 9.2295 0.753232C9.00449 0.918065 8.83325 1.15137 8.73897 1.42155L6.86854 6.75113C6.8593 6.77744 6.84299 6.8004 6.82157 6.81722C6.80016 6.83405 6.77457 6.84403 6.74787 6.84596L1.31759 7.06091C1.038 7.0657 0.766843 7.16205 0.542147 7.33646C0.317451 7.51087 0.150483 7.7546 0.0646547 8.03346C-0.0211739 8.31232 -0.0215589 8.61233 0.0635534 8.89144C0.148666 9.17054 0.315008 9.41473 0.539255 9.58977L4.799 13.0986C4.82032 13.1161 4.83626 13.1399 4.84484 13.1669C4.85341 13.1938 4.85426 13.2228 4.84727 13.2503L3.3811 18.6937C3.30512 18.9709 3.31248 19.2659 3.40218 19.5385C3.49188 19.8112 3.65955 20.0482 3.8824 20.2175C4.10525 20.3867 4.37245 20.48 4.64765 20.4845C4.92285 20.489 5.19269 20.4045 5.42047 20.2426L9.92156 17.0815C9.94373 17.0655 9.97004 17.0569 9.99698 17.0569C10.0239 17.0569 10.0502 17.0655 10.0724 17.0815L14.5735 20.2426C14.7982 20.41 15.0671 20.5 15.3428 20.5C15.6185 20.5 15.8874 20.41 16.1121 20.2426C16.335 20.0749 16.5028 19.839 16.5925 19.5673C16.6822 19.2956 16.6893 19.0014 16.6129 18.7253L15.1346 13.2629C15.1268 13.2355 15.1272 13.2062 15.1359 13.1791C15.1445 13.1519 15.1609 13.1282 15.1829 13.1112L19.4607 9.57081Z" fill="#8D91A3"/></svg>') 
                                cardInfoRatingStar2.appendTo(cardInfoRating)
                                cardInfoRatingStar2.addClass('rating__star')
                                cardInfoRatingStar2.attr('id','star2')

                            const cardInfoRatingStar3 = $('<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path class=" rating__star--fill" class="rating__star--fill" d="M19.4607 9.57081C19.685 9.39576 19.8513 9.15157 19.9364 8.87247C20.0216 8.59337 20.0212 8.29335 19.9353 8.01449C19.8495 7.73563 19.6825 7.49191 19.4578 7.31749C19.2332 7.14308 18.962 7.04673 18.6824 7.04195L13.2521 6.82699C13.2254 6.82506 13.1998 6.81508 13.1784 6.79826C13.157 6.78143 13.1407 6.75848 13.1315 6.73216L11.255 1.42155C11.1607 1.15137 10.9895 0.918065 10.7645 0.753232C10.5395 0.5884 10.2715 0.5 9.99698 0.5C9.72243 0.5 9.45451 0.5884 9.2295 0.753232C9.00449 0.918065 8.83325 1.15137 8.73897 1.42155L6.86854 6.75113C6.8593 6.77744 6.84299 6.8004 6.82157 6.81722C6.80016 6.83405 6.77457 6.84403 6.74787 6.84596L1.31759 7.06091C1.038 7.0657 0.766843 7.16205 0.542147 7.33646C0.317451 7.51087 0.150483 7.7546 0.0646547 8.03346C-0.0211739 8.31232 -0.0215589 8.61233 0.0635534 8.89144C0.148666 9.17054 0.315008 9.41473 0.539255 9.58977L4.799 13.0986C4.82032 13.1161 4.83626 13.1399 4.84484 13.1669C4.85341 13.1938 4.85426 13.2228 4.84727 13.2503L3.3811 18.6937C3.30512 18.9709 3.31248 19.2659 3.40218 19.5385C3.49188 19.8112 3.65955 20.0482 3.8824 20.2175C4.10525 20.3867 4.37245 20.48 4.64765 20.4845C4.92285 20.489 5.19269 20.4045 5.42047 20.2426L9.92156 17.0815C9.94373 17.0655 9.97004 17.0569 9.99698 17.0569C10.0239 17.0569 10.0502 17.0655 10.0724 17.0815L14.5735 20.2426C14.7982 20.41 15.0671 20.5 15.3428 20.5C15.6185 20.5 15.8874 20.41 16.1121 20.2426C16.335 20.0749 16.5028 19.839 16.5925 19.5673C16.6822 19.2956 16.6893 19.0014 16.6129 18.7253L15.1346 13.2629C15.1268 13.2355 15.1272 13.2062 15.1359 13.1791C15.1445 13.1519 15.1609 13.1282 15.1829 13.1112L19.4607 9.57081Z" fill="#8D91A3"/></svg>') 
                                cardInfoRatingStar3.appendTo(cardInfoRating)
                                cardInfoRatingStar3.addClass('rating__star')
                                cardInfoRatingStar3.attr('id','star3')

                            const cardInfoRatingStar4 = $('<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="rating__star--fill" d="M19.4607 9.57081C19.685 9.39576 19.8513 9.15157 19.9364 8.87247C20.0216 8.59337 20.0212 8.29335 19.9353 8.01449C19.8495 7.73563 19.6825 7.49191 19.4578 7.31749C19.2332 7.14308 18.962 7.04673 18.6824 7.04195L13.2521 6.82699C13.2254 6.82506 13.1998 6.81508 13.1784 6.79826C13.157 6.78143 13.1407 6.75848 13.1315 6.73216L11.255 1.42155C11.1607 1.15137 10.9895 0.918065 10.7645 0.753232C10.5395 0.5884 10.2715 0.5 9.99698 0.5C9.72243 0.5 9.45451 0.5884 9.2295 0.753232C9.00449 0.918065 8.83325 1.15137 8.73897 1.42155L6.86854 6.75113C6.8593 6.77744 6.84299 6.8004 6.82157 6.81722C6.80016 6.83405 6.77457 6.84403 6.74787 6.84596L1.31759 7.06091C1.038 7.0657 0.766843 7.16205 0.542147 7.33646C0.317451 7.51087 0.150483 7.7546 0.0646547 8.03346C-0.0211739 8.31232 -0.0215589 8.61233 0.0635534 8.89144C0.148666 9.17054 0.315008 9.41473 0.539255 9.58977L4.799 13.0986C4.82032 13.1161 4.83626 13.1399 4.84484 13.1669C4.85341 13.1938 4.85426 13.2228 4.84727 13.2503L3.3811 18.6937C3.30512 18.9709 3.31248 19.2659 3.40218 19.5385C3.49188 19.8112 3.65955 20.0482 3.8824 20.2175C4.10525 20.3867 4.37245 20.48 4.64765 20.4845C4.92285 20.489 5.19269 20.4045 5.42047 20.2426L9.92156 17.0815C9.94373 17.0655 9.97004 17.0569 9.99698 17.0569C10.0239 17.0569 10.0502 17.0655 10.0724 17.0815L14.5735 20.2426C14.7982 20.41 15.0671 20.5 15.3428 20.5C15.6185 20.5 15.8874 20.41 16.1121 20.2426C16.335 20.0749 16.5028 19.839 16.5925 19.5673C16.6822 19.2956 16.6893 19.0014 16.6129 18.7253L15.1346 13.2629C15.1268 13.2355 15.1272 13.2062 15.1359 13.1791C15.1445 13.1519 15.1609 13.1282 15.1829 13.1112L19.4607 9.57081Z" fill="#8D91A3"/></svg>') 
                                cardInfoRatingStar4.appendTo(cardInfoRating)
                                cardInfoRatingStar4.addClass('rating__star')
                                cardInfoRatingStar4.attr('id','star4')

                            const cardInfoRatingStar5 = $('<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="rating__star--fill" d="M19.4607 9.57081C19.685 9.39576 19.8513 9.15157 19.9364 8.87247C20.0216 8.59337 20.0212 8.29335 19.9353 8.01449C19.8495 7.73563 19.6825 7.49191 19.4578 7.31749C19.2332 7.14308 18.962 7.04673 18.6824 7.04195L13.2521 6.82699C13.2254 6.82506 13.1998 6.81508 13.1784 6.79826C13.157 6.78143 13.1407 6.75848 13.1315 6.73216L11.255 1.42155C11.1607 1.15137 10.9895 0.918065 10.7645 0.753232C10.5395 0.5884 10.2715 0.5 9.99698 0.5C9.72243 0.5 9.45451 0.5884 9.2295 0.753232C9.00449 0.918065 8.83325 1.15137 8.73897 1.42155L6.86854 6.75113C6.8593 6.77744 6.84299 6.8004 6.82157 6.81722C6.80016 6.83405 6.77457 6.84403 6.74787 6.84596L1.31759 7.06091C1.038 7.0657 0.766843 7.16205 0.542147 7.33646C0.317451 7.51087 0.150483 7.7546 0.0646547 8.03346C-0.0211739 8.31232 -0.0215589 8.61233 0.0635534 8.89144C0.148666 9.17054 0.315008 9.41473 0.539255 9.58977L4.799 13.0986C4.82032 13.1161 4.83626 13.1399 4.84484 13.1669C4.85341 13.1938 4.85426 13.2228 4.84727 13.2503L3.3811 18.6937C3.30512 18.9709 3.31248 19.2659 3.40218 19.5385C3.49188 19.8112 3.65955 20.0482 3.8824 20.2175C4.10525 20.3867 4.37245 20.48 4.64765 20.4845C4.92285 20.489 5.19269 20.4045 5.42047 20.2426L9.92156 17.0815C9.94373 17.0655 9.97004 17.0569 9.99698 17.0569C10.0239 17.0569 10.0502 17.0655 10.0724 17.0815L14.5735 20.2426C14.7982 20.41 15.0671 20.5 15.3428 20.5C15.6185 20.5 15.8874 20.41 16.1121 20.2426C16.335 20.0749 16.5028 19.839 16.5925 19.5673C16.6822 19.2956 16.6893 19.0014 16.6129 18.7253L15.1346 13.2629C15.1268 13.2355 15.1272 13.2062 15.1359 13.1791C15.1445 13.1519 15.1609 13.1282 15.1829 13.1112L19.4607 9.57081Z" fill="#8D91A3"/></svg>') 
                                cardInfoRatingStar5.appendTo(cardInfoRating)
                                cardInfoRatingStar5.addClass('rating__star')
                                cardInfoRatingStar5.attr('id','star5')
                            
                                
                    
                    const cardInfoRight = $('<div></div>')
                        cardInfoRight.addClass('text__info')
                        cardInfoRight.appendTo(cardInfo)

                        const infoRightDescription = $(`<div></div>`)
                            infoRightDescription.addClass('text__info-description')
                            infoRightDescription.appendTo(cardInfoRight) 
                            
                            //круговой рейтинг
                            const score = $('<div></div>')
                                score.addClass('score')
                                score.appendTo(infoRightDescription)

                                const scoreBgDown = $('<svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M73 36.5C73 56.6584 56.6584 73 36.5 73C16.3416 73 0 56.6584 0 36.5C0 16.3416 16.3416 0 36.5 0C56.6584 0 73 16.3416 73 36.5ZM1.825 36.5C1.825 55.6505 17.3495 71.175 36.5 71.175C55.6505 71.175 71.175 55.6505 71.175 36.5C71.175 17.3495 55.6505 1.825 36.5 1.825C17.3495 1.825 1.825 17.3495 1.825 36.5Z" fill="#B7BACD"/></svg>')
                                    scoreBgDown.appendTo(score)
                                    scoreBgDown.addClass('score__ratingDown')  
                                    

                                const scoreBgUp = $('<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5248 11.4503C4.53315 17.6548 0.863513 25.7351 0.13427 34.3295C-0.594973 42.9239 1.66076 51.5069 6.52133 58.6322C11.3819 65.7576 18.5501 70.9895 26.8181 73.4464C35.086 75.9034 43.9482 75.435 51.9111 72.1204C59.8741 68.8057 66.4509 62.8474 70.5334 55.2494C74.6159 47.6515 75.9545 38.8785 74.3234 30.4088C72.6924 21.9392 68.1916 14.2907 61.5794 8.75225C54.9672 3.21382 46.6479 0.124056 38.0235 0.00365383L37.9711 3.75329C45.7331 3.86165 53.2205 6.64243 59.1714 11.627C65.1224 16.6116 69.1732 23.4953 70.6411 31.118C72.109 38.7407 70.9043 46.6364 67.2301 53.4745C63.5558 60.3126 57.6367 65.6751 50.47 68.6583C43.3034 71.6415 35.3274 72.063 27.8863 69.8518C20.4451 67.6406 13.9937 62.9318 9.61919 56.519C5.24468 50.1062 3.21452 42.3815 3.87084 34.6465C4.52716 26.9116 7.82983 19.6393 13.2223 14.0553L10.5248 11.4503Z" fill="url(#paint0_linear_1_71)"/><defs><linearGradient id="paint0_linear_1_71" x1="26.5" y1="-7.5" x2="5.5" y2="64" gradientUnits="userSpaceOnUse"><stop stop-color="#00D4BE"/><stop offset="0.1875" stop-color="#1AE780"/><stop offset="0.833333" stop-color="#1AE780"/><stop offset="1" stop-color="#00D4BE"/></linearGradient></defs></svg>')
                                    scoreBgUp.appendTo(score)
                                    scoreBgUp.addClass('score__ratingUp notDisplay')
                                 
                                const scoreRate = $('<span></span>')
                                    scoreRate.text('8.7')
                                    scoreRate.addClass('score__rate notDisplay')
                                    scoreRate.appendTo(score)



                            const descriptionTitle = $('<h2></h2>')
                                descriptionTitle.text('FarCry 6')
                                descriptionTitle.addClass('description__title')
                                descriptionTitle.appendTo(infoRightDescription)
                            
                            const descriptionSubTitle = $('<span></span>')
                                descriptionSubTitle.text('First Released Oct 6, 2021')
                                descriptionSubTitle.addClass('description__subtitle')
                                descriptionSubTitle.appendTo(infoRightDescription)
                            
                            const descriptionText = $('<span></span>')
                                descriptionText.text('Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto. It is the sixth main installment in the Far Cry series and the successor Far Cry 5.')
                                descriptionText.addClass('description__text')
                                descriptionText.appendTo(infoRightDescription)
                                
                        
                        const toBuy = $('<div></div>')
                            toBuy.addClass('text__info-toBuy')
                            toBuy.appendTo(cardInfoRight)

                            const toBuyPrice = $('<div></div>')
                                toBuyPrice.addClass('toBuy__price')
                                toBuyPrice.appendTo(toBuy)

                                const toBuyPriceDiscount = $('<p></p>').text('20% OFF!').addClass('toBuy__price-discount').appendTo(toBuyPrice)
                                
                                const toBuyPriceValue = $('<p></p>').text('$59.96').addClass('toBuy__price-value').appendTo(toBuyPrice)    

                            const toBuyButton = $('<button type="submit"></button>').text('Buy it now').addClass('toBuy__button').appendTo(toBuy)

            const cardRating =$('<div></div>')
                cardRating.addClass('card')
                cardRating.appendTo(gameInfo)

                const ratingFrame = $('<iframe src="https://www.ign.com/games/far-cry-6" width="100%" height="319px" frameborder="0" allowfullscreen></iframe>').appendTo(cardRating);

            const cardBuy =$('<div></div>')
                cardBuy.addClass('card')
                cardBuy.appendTo(gameInfo)    
                
                const buyFrame = $('<iframe src="https://vgtimes.ru/games/far-cry-6/buy/windows-pc/" width="100%" height="319px" frameborder="0" allowfullscreen></iframe>').appendTo(cardBuy);
                        

                
   // КЛИК НА ЗАКЛАДКУ
    $('.tabs').on('click', '.tabsItem:not(.active)', function(event) {
        console.log('Нажал Закладку')
        $(this).addClass('active').siblings().removeClass('active')
        .closest('div.gameInfo').find('div.card').removeClass('active').eq($(this).index()).addClass('active');
    }),

    // Рейтинг
    $('.pic__info-rating').on('click', function(event){
        let node = event.target.parentNode.parentNode;
        node = [...node.children] 
        let nodeNum = node.indexOf(event.target.parentNode)
        
        for(let i = 0; i <= nodeNum && i >= 0; i++){
            $(node[i]).children().css('fill','#FFDD3F')
            
        }
        
        $('.score__ratingUp').removeClass('notDisplay').addClass('display')
        $('.score__rate').removeClass('notDisplay').addClass('display')
        return
    })
    
    

    
});
