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
   




































