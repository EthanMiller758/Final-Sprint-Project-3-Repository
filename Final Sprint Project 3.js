fetch('./Final Sprint.json')
.then(response => response.json())
.then(Sprint => {

    Sprint.forEach(theBooks => {
        console.log(theBooks.Book);
        console.log(theBooks.Author);
        console.log(theBooks.Genre);
        console.log(theBooks.datePublished);
        console.log(theBooks.numberOfAwards);
        console.log(theBooks.theIllustrator);
        console.log(theDate(theBooks));
        console.log(garneredAwards(theBooks));
        console.log(theIllustrators(theBooks));
        
    });
})
.catch(error => {

    console.error(error);
});

function theDate(theBooks) {
    return `The date ${theBooks.Book} was published is ${theBooks.datePublished}`;
}

function garneredAwards(theBooks) {
    return `${theBooks.Book} has garnered ${theBooks.numberOfAwards} awards.`
}

function theIllustrators(theBooks) {
    return `The illustrator for ${theBooks.Book} is ${theBooks.theIllustrator}`
}



const allAboutBooks = {
    
    theBook:"Bone", theAuthor:"Jeff Smith", aGenre: "Fiction",aDate: "2001",theAwards: "38",anIllustrator: "Charles Vess",
    anotherBook:"A Brief History Of Time", anAuthor:"Stephen Hawking",theGenre: "non-fiction",anotherDate: "1938",moreAwards: "1",timeIllustrator: "Ron Miller",
    theAction:"Hyperion", anotherAuthor:"Dan Simmons", moreGenre: "action",thisDate: "1989", theIllustrator: "Gary Ruddell",
    theTerror:"Something Wicked This Way Comes", goodAuthor:"Ray Bradbury", scaryGenre: "horror",moreDate: "1962",thrillerIllustrator: "Ron Wimberly",
    theMystery:"2 Sisters Detective Agency", cluesAuthor:"James Patterson", investigationGenre: "Mystery", mysteryDate: "2021",illustratorStuff: "Sandra Butt",
    theFunnyStuff:"Nailing it!", wittyAuthor:"Rich Hall", hilariousGenre: "Comedy", comedyDate: "2022",thisIllustrator: "Rich Hall"

}


const informationAboutBooks = `${allAboutBooks.theBook} is a book series made by ${allAboutBooks.theAuthor} and was published in ${allAboutBooks.aDate}, 
 it's genre is ${allAboutBooks.aGenre}. The illustrator for bone is ${allAboutBooks.anIllustrator}. 
It's one of my favorite sagas of all time. Another thing I really like is ${allAboutBooks.anotherBook} published in ${allAboutBooks.anotherDate} by ${allAboutBooks.anAuthor}, 
the genre being ${allAboutBooks.theGenre} and the illustrator is ${allAboutBooks.timeIllustrator}. I have always been a fan of action, 
so ${allAboutBooks.theAction} by ${allAboutBooks.anotherAuthor} published in ${allAboutBooks.thisDate} I am a big fan of.  
 The genre for this book is ${allAboutBooks.moreGenre} and the illustrator for it is ${allAboutBooks.theIllustrator}.
Horror was always something I enjoyed as well ${allAboutBooks.theTerror} published in ${allAboutBooks.moreDate} and by   
${allAboutBooks.goodAuthor} is a ${allAboutBooks.scaryGenre} genre book  and it's interesting and awesome, the person who illustrated this is ${allAboutBooks.moreIllustratorInfo}. 
When it comes to mystery and comedy, ${allAboutBooks.theMystery} and ${allAboutBooks.theFunnyStuff}, published in ${allAboutBooks.mysteryDate} and ${allAboutBooks.comedyDate}, are both really good books 
by ${allAboutBooks.cluesAuthor} and ${allAboutBooks.wittyAuthor}. The illustrators for these books are ${allAboutBooks.illustratorStuff} and ${allAboutBooks.thisIllustrator} and are excellent choices for ${allAboutBooks.investigationGenre} and ${allAboutBooks.hilariousGenre}
respectively. ${allAboutBooks.theBook} has won ${allAboutBooks.theAwards} awards, ${allAboutBooks.anotherBook} won ${allAboutBooks.moreAwards} award. 
${allAboutBooks.theTerror}, ${allAboutBooks.theMystery}, and ${allAboutBooks.theFunnyStuff}, all won no awards.`

document.body.innerHTML = informationAboutBooks;

