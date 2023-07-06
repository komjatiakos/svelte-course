<script>
    import Counter from "./lib/Counter.svelte";
    import Button from "./lib/Button.svelte";

    const props = {
        maxCount:10,
        initialCount:5
    }
</script>

<!--<Counter {...props} y="y"/>-->
<Button size="small" shadow bgColor="orange" textColor="white">Button text</Button> 

<style>
</style>