<script>
    import Button from "./Button.svelte";
    import { createEventDispatcher } from "svelte";

    export let todos = [];

    //let input;
    let inputText = '';

    const dispatch = createEventDispatcher();

    function handleAddTodo(){
        const isNotCancalled = dispatch('addtodo', {
            title:inputText
        }, {cancelable: true});
        if(isNotCancalled){
            inputText = '';
        }
        //console.log(input.value)
        //if(!inputText) return;
        //todos.push({
        //    id:uuid(),
        //    title:inputText,
        //    completed:false
        //})
        ////State update on an array
        //todos = todos;

        //In one step :)
        //todos = [...todos,{
        //    id:uuid(),
        //    title:inputText,
        //    completed:false
        //}]
        //inputText = '';
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
    <Button type="submit" disabled={!inputText}>Add</Button>
</form>
    <ul>
        {#each todos as {id, title}, index (id)}
        {@const number = index + 1}
            <li>{number} - {title}</li>
        {/each}
    </ul>
</div>
