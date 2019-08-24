export default (data, query, type="text") => {
    if (query === ""){
        return data
    }
    else {
        return data.filter( restaurant =>{
            const upperCasedQuery =
                query.charAt(0).toUpperCase() + query.slice(1);
            return restaurant[type].includes(upperCasedQuery)
        });
    }
}