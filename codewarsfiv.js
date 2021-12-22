// Extract domain name from url

function domainName(url){
    return url.replace(/.+\/\/|www.|\..+/g, '');
  }

