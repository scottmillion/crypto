export function trimUrl(url) {
  let urlCopy = url

  if (url[url.length - 1] === '/') {
    urlCopy = url.slice(0, -1)
  }

  const urlArr = urlCopy.split('//')

  if (urlArr.length === 2) {
    return urlArr[1]
  }

  return urlCopy
}
