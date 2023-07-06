<script>
    import Counter from "./lib/Counter.svelte";
    import Button from "./lib/Button.svelte";
    import FaAws from 'svelte-icons/fa/FaAws.svelte'
    import FaAmazonPay from 'svelte-icons/fa/FaAmazonPay.svelte'

    const props = {
        maxCount:10,
        initialCount:5
    }
</script>

<!--<Counter {...props} y="y"/>-->
<Button on:click|once={(event) => {alert(true);}} let:isLeftHovered size="small" shadow bgColor="black" textColor="white">
    <div style:width="50px" slot="leftContent">
    {#if isLeftHovered}
        <FaAmazonPay/>
    {:else}
        <FaAws/>
    {/if}
    </div>
    Button text
</Button> 

<style>
</style>