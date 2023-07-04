<script>
    import { children } from "svelte/internal";
</script>

<button><slot>Fallback</slot></button>

<style lang="scss">
    @use '../styles/variables.scss';
    button {
        border: none;
        background-color: orange;
        color: #fff;
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: variables.$color_main;
            color: #000;
        }
    }
</style>