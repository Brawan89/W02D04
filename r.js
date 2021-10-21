const n1 = document.querySelector('body');
n1.className = 'text-center'
n1.className = 'row col-xs-6 col-md-4 .col-md-6 .col-md-offset-3 col-xs-8 col-sm-6"'
const h = document.createElement('h1');
h.innerHTML='Todo List';
n1.append(h);


const m = document.createElement('ul');
//m.class='uld';
n1.append(m);

// m.className = 'form '
// m.className = 'form-control'




const removeItem = function(index){
    arr.splice(index,1);
     renderList();
  }

  const updateItem = function(element){
    const usEl = prompt('please enter item');
    arr[element] = usEl;
    arr.map(element, 1, usEl);
        renderList();
        
  }

  

  

let arr = ['wake up' , 'eat breakfast', 'code'];

const renderList = function () {
    m.innerHTML="";
    for (let i = 0; i < arr.length; i++) {
        const a = document.createElement('li');
       a.innerHTML= (arr[i]);
       m.append(a);
       a.className = 'bg-info'
    //    a.className='form-control'

       //button remove element...
       const ide = document.createElement('button')
       ide.innerText = 'remove';
       ide.class = 'rm';
       a.append(ide);
       ide.addEventListener("click",()=>{removeItem(i)});
       
       //ide.className = 'btn';
       //ide.className = 'btn-danger';
       ide.className = 'btn btn-danger btn-sm btn-lg btn-block'
       


        //button update element
        const upd = document.createElement('button');
        upd.innerText = 'update';
        //upd.class = 'btn btn-default'
        a.append(upd);
        upd.addEventListener("click",()=>{updateItem()});

       // upd.className = 'btn';
        //upd.className = 'btn-danger';
        upd.className = 'btn btn-warning btn-sm btn-lg btn-block';


    }

    }

    renderList();


    
    const ip = document.createElement('input');
    ip.class = 'pt';
    n1.append(ip);

    const bt = document.createElement('button');
    bt.innerText = 'add'
    bt.class =  ' btn btn-primary' ;
    n1.append(bt);

    bt.className = "btn" 
    bt.className = 'btn-primary'
    bt.className = ''


const addItem = function(){
    element=ip.value
    arr.push(element);
     renderList();
    }

 bt.addEventListener("click",addItem);


  