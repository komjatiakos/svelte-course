<script>
    import Button from "./Button.svelte";

    export let todos = [];

    //let input;
    let inputText = '';

    function handleAddTodo(){
        //console.log(input.value)
        console.log(inputText)
    }

    function handleChange(e){
        //let curr_val = e.currentTarget.value;
        //console.log(curr_val);
        //inputText = curr_val;
    }
</script>

<div class="todo-list-wrapper">
<form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <!--<input bind:this={input}/>-->
    <!--<input on:input={handleChange}/>-->
    <input bind:value={inputText}>
    <Button type="submit">Add</Button>
</form>
    <ul>
        {#each todos as {id, title}, index (id)}
        {@const number = index + 1}
            <li>{number} - {title}</li>
        {/each}
    </ul>
    {inputText}
</div>
