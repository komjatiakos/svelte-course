<script>
    export let initialCount;
    export let maxCount;

    let count = initialCount;
    function increment () {
        if(count < maxCount){
            count += 1
        }
    }
    /*
    let count2 = 0;

    //this is fine
    $: string =`Count total is ${count+count2} times`;

    //this is a gotcha --> no rigth hand side...
    $: string2 =`Count total is ${getTotal()} times`;

    //this will work again :) --> svelte will know about count and count2
    $: string3 =`Count total is ${getTotalRigth(count,count2)} times`;

    $: if(count >5){
        console.log(`You have clicked ${count} times`)
    }

    function increment2 () {
        count2 += 1
    }

    function getTotal(){
        return count + count2;
    }

    function getTotalRigth(x,y){
        return x + y;
    }
*/
</script>
<!--
<p>{string}</p>
<p>{string2}</p>
<p>{string3}</p>
<button on:click={increment2}>Clicks {count2}</button>
-->
<button on:click={increment}>Clicks {count}</button>

<style>
    button{
        margin: 2.5%;
        padding: 15px;
    }
</style>
