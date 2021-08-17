const book=document.getElementById('book') 
const author=document.getElementById('author') 
const year=document.getElementById('year') 
const price=document.getElementById('price') 


const button=document.getElementById('btn')

button.addEventListener('click',function(){
    const td1=document.createElement('td')

    let bookName=book.value
    td1.innerText=bookName

    const td2=document.createElement('td')

    let authorName=author.value
    td2.innerText=authorName

    const td3=document.createElement('td')

    let yearName=year.value
    td3.innerText=yearName

    const td4=document.createElement('td')
    let pricing=price.value
    td4.innerText=pricing
    const row=document.createElement('tr')
    row.append(td1,td2,td3,td4)
    

   const bookList= document.getElementById('book-list')
   bookList.appendChild(row)
   
 

   

 
})