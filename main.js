let form=document.getElementById('addForm')
let itemList =document.getElementById('items')
var Filter = document.getElementById('filter')


//form submit
form.addEventListener('submit',addItem)

//delete items

itemList.addEventListener('click',removeItem)

//search items

Filter.addEventListener('keyup',FilterItems)

//function for add item

function addItem(e) {
    e.preventDefault();//stop the inital behaviour for the submittt event listener

     //get input value
    let newItem=document.getElementById('item').value;
  
    //create new li elment

    let li =document.createElement('li')
    
    //add class to the li element

    li.className='list-group-item'

    //add text node with the input value

    li.appendChild(document.createTextNode(newItem))//the newitem 

    //create del button element

    let deletebutton =document.createElement('button')

    //add class to delete button

    deletebutton.className='btn btn-danger btn-sm float-right delete';
    
    //append text node

    deletebutton.appendChild(document.createTextNode('DELETE'))

    //pass delete button to the li

    li.appendChild(deletebutton)


    itemList.appendChild(li)
   
}

//function for delete items

function removeItem(e){

    console.log(1)//if click on every element of the items but we need to make them only click on the remove buttons


    //using if else to check wheather the taeget class has button or not 
    if(e.target.classList.contains('delete')){

        //deleting the items
        if (confirm("Are You Sure?")) {
            let li=e.target.parentElement;
            console.log(li)
            itemList.removeChild(li); 
        }

    }
     

}

function FilterItems (e){
    //convert to lower first 

    let text=e.target.value.toLowerCase();
    //get list items

    let items=itemList.getElementsByTagName('li')

    //convert html collection to array
    
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text)!=-1) {
            item.style.display='block'
            
        }
        else{
            item.style.display='none'
        }
    })
}

