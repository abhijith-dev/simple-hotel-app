module.exports = {
    loadData : () =>{
        let itemsArray = JSON.parse(localStorage.getItem('items'))
    if ( itemsArray === null || itemsArray === undefined || itemsArray === "") {
        return []
    }
    else {
        return itemsArray
    }
    },

    insertData : (data)=>{
        let itemsArray = JSON.parse(localStorage.getItem('items'))
        if (  itemsArray === null || itemsArray === undefined || itemsArray === "") {
            let tempArray = []
            data.sno = tempArray.length+1
            tempArray.push(data)
            localStorage.setItem('items',JSON.stringify(tempArray))
        }
        else{
            data.sno = itemsArray.length+1
            itemsArray.push(data)
            localStorage.setItem('items',JSON.stringify(itemsArray))
        }
    },

    editData : (sno,data)=>{
        let itemsArray = JSON.parse(localStorage.getItem('items'))
        let editableArray = itemsArray.filter(item =>item.sno === sno)
        for(let fields of Object.keys(data)){
            editableArray[fields] = data[fields]
        }
    },

    deleteData : (sno)=>{
        let itemsArray = JSON.parse(localStorage.getItem('items'))
        let editableArray = itemsArray.filter(item =>item.sno !== sno)
        localStorage.setItem('items',JSON.stringify(editableArray))
    }

}
