<script>
    import TodoList from "./lib/TodoList.svelte";
    import {v4 as uuid} from "uuid";
    let todos = [
        {
            id:uuid(),
            title:"Todo 1",
            completed:true
        },
        {
            id:uuid(),
            title:"Todo 2",
            completed:true
        },
        {
            id:uuid(),
            title:"Todo 3",
            completed:false
        }
    ]

    function handleAddTodo(event){
        //event.preventDefault();
        console.log(event.detail.title)
    }
    /*
    import Counter from "./lib/Counter.svelte";
    import Button from "./lib/Button.svelte";
    import FaAws from 'svelte-icons/fa/FaAws.svelte'
    import FaAmazonPay from 'svelte-icons/fa/FaAmazonPay.svelte'

    const props = {
        maxCount:10,
        initialCount:5
    }
    */

</script>

<!--<Counter {...props} y="y"/>-->
<!--<Button
    on:click|once={(event) => {alert(true);}}
    let:isLeftHovered
    size="small"
    shadow bgColor="black"
    textColor="white"
    disabled
>
    <div style:width="50px" slot="leftContent">
    {#if isLeftHovered}
        <FaAmazonPay/>
    {:else}
        <FaAws/>
    {/if}
    </div>
    Button text
</Button>--> 
<h2> {todos.length} Todos</h2>
<TodoList {todos} on:addtodo={handleAddTodo}/>
<style>
</style>