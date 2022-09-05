const categoriesArray = ["Best Consumer Solution", "Best Enterprise Solution", "Best African Solution", "Most Innovative Solution", 
                        "Best Gaming Solution", "Best Health Solution", "Best Agricultural Solution", "Best Educational solution", 
                        "Best Financial Solution", "Best Hackathon Solution", "Best South African Solution",
                        "Best Campus Cup Solution"];

var randomResult = categoriesArray[Math.floor(Math.random() * categoriesArray.length)];

console.log(randomResult);