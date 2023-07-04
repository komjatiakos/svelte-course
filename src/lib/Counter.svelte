<script>
    let count = 0
    $: string =`You have clicked ${count} times`;

    $: if(count >5){
        console.log(`You have clicked ${count} times`)
    }
    function increment () {
        count += 1
    }
</script>
<p>{string}</p>
<button on:click={increment}>
    Clicks {count}
</button>

<style>
    button{
        margin: 25%;
        padding: 15px;
    }
</style>
