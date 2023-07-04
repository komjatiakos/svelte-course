<script>
    import { children } from "svelte/internal";
</script>

<button><slot>Fallback</slot></button>

<style>
    button{
        border:none;
        background-color: orange;
        color:#fff;
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }
</style>