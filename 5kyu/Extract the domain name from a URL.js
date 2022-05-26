/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

function domainName(url) {
  console.log(url);

  if(url.includes("://")){
      url = url.split("://")[1]
  }
  
  if(url.includes("www")){
      url = url.split("www")[1]
  }

  url = url.split(".").splice("")

  if(url[0] === ""){
    return url[1]
  }else{
      return url[0]
  }
}

console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("www.zombie-bites.com"))
console.log(domainName("zombie-bites.com"))



// console.log("http://www.zombie-bites.com".split("://"))


// let x = "http://www.zombie-bites.com"

// let y = x.split("://")[1]
// // if (x.includes("www")) {console.log("yes")}
// console.log(y)
// if (y.includes("www")){
//     y = y.split("www")[1]
//     console.log(y)
// }
// y = y.split(".")
// console.log(y)
// if

