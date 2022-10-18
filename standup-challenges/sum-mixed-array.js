//Domain name

/*Instructions
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

//string, will have special characters, could have numbers
//return just the domain name

//replace "http://" with ""
//split remaining string with '.' as separator
//get rid of second element in array
//join string back together

function domainName(url){
  let name = url.replace("http://www.", "").replace("http://", "").replace("https://www.", "").replace("https://", "").replace("www.", "").split('.')
  return name[0]
}

//better
function domainName(url){
  let name = url.replace("http://", "").replace("https://", "").replace("www.", "").split('.')
  return name[0]
}
