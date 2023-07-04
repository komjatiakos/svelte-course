<script>
    let count = 0
    function increment () {
        count += 1
    }
</script>

<button on:click={increment}>
    Clicks {count}
</button>

<style>
    button{
        margin: 25%;
        padding: 15px;
    }
</style>
