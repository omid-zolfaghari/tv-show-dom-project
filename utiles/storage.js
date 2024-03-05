function setData (id){
    localStorage.setItem("id", JSON.stringify(id))
}

function getData(term){
  const data = localStorage.getItem(term);
  return JSON.parse(data)
}

export{setData, getData}