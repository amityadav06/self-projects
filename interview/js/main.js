// let a=5;
// let b =10;
// if(a=3){
// console.log("condition true");
// }else{
// console.log("condition false");
// }

let a = 1;
let b = 1;
let c = 1;
if(a === b === c) {
    console.log('true');
}else{
    console.log('false');
}


// =======================================================================================
// how can we create custom html tags
// =======================================================================================

/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Element Example</title>
</head>
<body>
    <!-- Custom element in use -->
    <my-greeting></my-greeting>

    <script>
        // Define a class for the custom element
        class MyGreeting extends HTMLElement {
            constructor() {
                super();
                // Create a shadow root
                this.attachShadow({ mode: 'open' });
                // Add some content to the shadow DOM
                this.shadowRoot.innerHTML = `<p>Hello, world!</p>`;
            }
        }

        // Register the custom element
        customElements.define('my-greeting', MyGreeting);
    </script>
</body>
</html>
watch video for details - https://youtu.be/j0qG-afD244?si=gZhxbGajLZXQ2shu
*/
// =======================================================================================
// csr vs ssr
// =======================================================================================


// =======================================================================================
// if img tag is inline element then how can we give height, padding, margin to it?
// =======================================================================================
/* 
11

an img is an inline replaced element unlike span for example which is an inline non-replaced element and we can define width/height on replaced element. Here is the relevant part of the specification that define how height/width should behave

https://www.w3.org/TR/CSS2/visudet.html#inline-replaced-width

https://www.w3.org/TR/CSS2/visudet.html#inline-replaced-height

When it comes to non-replaced elements you will find this:

The 'width' property does not apply. ref

The 'height' property does not apply. ref

Same logic apply to tranformation where we can apply transformation to img and not span.
*/
// =======================================================================================
// why we use useEffect
// =======================================================================================

// =======================================================================================
// if const is constant then how can we use it with setState to change variale value?
// =======================================================================================


// =======================================================================================
// event loop, different types of queues
// =======================================================================================



/* 
There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array `cardPoints`.
	In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
	Your score is the sum of the points of the cards you have taken.
	Given the integer array `cardPoints` and the integer k, return the maximum score you can obtain.
Examples:
1. Input: cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3  
   Output: 12  
 
 */

   const arr =  [2, 2, 3, 4, 5, 6, 1] 
    const k = 3;
    // 

   const maxSum = (arr, k) => {
    let i = 0;
    let j = 0
    let sum = 0;
    let max = 0;
    
    while(j < arr.length){
        sum = sum + arr[j]
        if(j < k){
            j++
        }
        if(j - i + 1 === k){
            max = Math.max(max, sum);
            sum = sum - arr[i];
            j++;i++;
        }
        

    }
    return max;
}    

   console.log(maxSum(arr, k));
   
// Mindsix first round


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

//==========================================================================
//                          Cashify Interview
//===========================================================================
// difference between interface and type
// type persoinOjb  = {
//     name: String;
//     age : number;
// }
// inerface personObj {
    
// }

// function (person: personObj) : string {
    
    
// }

//  1. a = 10;            
//  2. timeout of 10 sec
//  3. promise  
//  4. timeout of 0 sec
//  5. async await
//  6. console(a)    
//  7. interval(5)
 
//  1
//  6
//  3
//  5
//  5
//  7
//  2
 
 
 
//  const user = {
//     firstName: 'hello!',
//     getName() {
//       const firstName = 'hi!';
//        return this.firstName;
//     }
// };

// console.log(user.getName());

// how to change this function so that it will print hii
// const user = {
//     firstName: 'hello!',
//     getName() {
//         return (() => {
//             const firstName = 'hii'; // Local variable
//             return firstName; // Return the local variable
//         })();
//     }
// };

// console.log(user.getName());




// const user = {
//     name: 'hiii',
//     logMessage() {
//       console.log(this.name); 
//     }
// };
// setTimeout(user.logMessage, 1000);

/* 
In your code, setTimeout(user.logMessage, 1000); will not output "hiii" 
as you might expect. This is because this inside the logMessage function will
not refer to the user object when called by setTimeout. Instead, this will
refer to the global object (or undefined in strict mode).

To fix this, you can use an arrow function, which preserves the lexical this,
or use bind to bind the this context. Here are both approaches:
*/

const obj1 = {
	a: null,
	b: false,
	c: true,
	d: 0,
	e: 1,
	f: '',
	g: 'a',
	h: [null, false, '', true, 1, 'a'],
	i: { j: 0, k: false, l: 'a' }
};
// { c: true, e: 1, g: 'a', h: [ true, 1, 'a' ], i: { l: 'a' } }


function deleteFalseValues(obj, seen = new WeakSet()) {
    // Handle circular references
    if (seen.has(obj)) return {};
    seen.add(obj);

    // Initialize the output object
    let output = {};

    for (let key in obj) {
        let value = obj[key];

        // Check if value is an object and not null
        if (value && typeof value === 'object') {
            // If it's an array, filter it
            if (Array.isArray(value)) {
                const filteredArray = value.filter(item => item !== '' && item !== false && item !== null && item !== 0);
                if (filteredArray.length > 0) {
                    output[key] = filteredArray;
                }
            } else {
                // It's a regular object, so we call deleteFalseValues recursively
                const nestedOutput = deleteFalseValues(value, seen);
                if (Object.keys(nestedOutput).length > 0) {
                    output[key] = nestedOutput;
                }
            }
        } else {
            // Check for falsy values
            if (value !== '' && value !== false && value !== null && value !== 0) {
                output[key] = value;
            }
        }
    }

    return output;
}

console.log(deleteFalseValues(obj1))

// what is spa
// Can we design multipage website using react js
// throttle and debouncing
// write it in react js
// How can we pass data from child to parent
// http vs https
// prototype in js







// 30 questinos on objects coding
// output questions on 
// coersion
// variable assignment
// async behaviour setTimout, setinterval, callback, promise
// scoping






















