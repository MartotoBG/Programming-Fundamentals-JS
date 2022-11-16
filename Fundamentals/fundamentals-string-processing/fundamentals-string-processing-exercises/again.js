function again (array){
    const object = {};
    let movies = [];
    array.forEach(element => {
        if(element.includes('addMovie')){
            element = element.split(' ');
            const action = element.shift();
            element = element.join(' ');
            const name = element
            movies.push(element);
            object[name] = [];
        }
        else if (element.includes('directedBy')){
          const  [name,director] = element.split(' directedBy ');
            if(!object[name]){
                object[name] = director
            }
        }
        
    });
    // "addMovie {movie name}" – add the movie

    // · "{movie name} directedBy {director}" – check if the movie exists and then add the director
    
    // · "{movie name} onDate {date}" – check if the movie exists and then add the date

}

again([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ])