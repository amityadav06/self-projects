// Yashvant Revandkar
// 10:14 AM
// hoistedFunction(); 

// const hoistedFunction = function (){ 
//   console.log(" Hello world! ");
// }
// Yashvant Revandkar
// 10:16 AM
console.log("1");

setTimeout(() => {
  console.log("2");
}, 10);

setTimeout(() => {
  console.log("3");
}, 0);

setTimeout(() => {
  console.log("4");
});

Promise.resolve().then(() => {
  console.log("5");
}).then(() => {
  console.log("6");
});

console.log("7");

//1 7 5 6 4 3 2 

const a = {
    name: `Amit`
    }
    
    const b = {
    name: `Amit`
    }
    
    console.log(a==b) // false
    console.log(a===b) // 


    const calculate = () =>  {
        console.log(this);
    }











    const obj = {
        // name: ‘Amit’,
        sing() {
        console.log('a',this);
        var anotherfunc = function() {
            console.log('b', this)   
        }
        anotherfunc()
        }
    }
    
    obj.sing()

    function payment(){
        // logic for payment
    }
    // function checkout(payment: ):number {
    //     payment()
    // }
    function getOrder(checkout){
        let order = 1;
        checkout()
    }


    Promise((ressolve, reject) => {
        getOrder()
        ressolve(2)
    }).then((data) => {
        checkout()
        resolve(data)
    }).then(() => {

    }).catch((err) => {
        reject()
    })

    const init = () => {
        console.log('a');
        fetchData()
        console.log('b')
    }
    init();
    let url = 'url'
    const fetchData = async() => {
        console.log('c')
        try {
            const data = await fetch(url)
            console.log('data')
        } catch (error) {
            
        }
        console.log('d')
    }

    // a b c data d

const [counter, setCounter] = useState(0)

useEffect(() => {
    console.log(counter);
    // setCounter(counter + 3)
    counter = 3
    console.log(counter)
}, [])


const useUseCallbackHook = useCallBack(() => {
    console.log('hello world');
}, [])


// useUseCallbackHook()
// useUseCallbackHook()

// expor default memo(child);

// // Presnt 
// const Parent () => {
//     <button onClich= {handleclick}> <butoon></butoon>
//     return (

//     )

// // Main - counter 
// // ////// hcc prop-counter