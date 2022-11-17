function match (string){
    const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    const names = string.match(pattern);
    console.log(names.join(' '))
    
}

match('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov')