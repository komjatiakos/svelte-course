<script>
    import { children } from "svelte/internal";
    export let size = 'small';
    export let shadow = false;
    export let bgColor = "inherit";
    export let textColor = "inherit";
    //export let disabled = false;

    let isLeftHovered = false;
</script>

<button
    on:click
    {...$$restProps}
    style:--buttonBgColor={bgColor}
    style:--buttonTextColor={textColor}
    class:size-lg={size === "large"} 
    class:size-sm={size === "small"} 
    class:has-left={$$slots.leftContent}
    class:shadow>
        {#if $$slots.leftContent}
            <div class="left-content" 
            on:mouseenter={() => (isLeftHovered = true)}
            on:mouseleave={() => (isLeftHovered = false)}>
                <slot name="leftContent" y="x"/>
            </div>
        {/if}
        <slot {isLeftHovered}>Fallback</slot>
</button>

<style lang="scss">
    @use '../styles/variables.scss';
    button {
        display:flex;
        align-items: center;
        border: none;
        background-color: var(--buttonBgColor);
        color: var(--buttonTextColor);
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        .left-content{
            margin-right: 10px;
        }
        &:hover{
            background-image: linear-gradient(rgba(0,0,0,0.4)0 0);
        }
        &:active{
            background-image: linear-gradient(rgba(255,255,255,0.1)0 0);
        }
        &:disabled{
            opacity: 0.5;
            cursor:not-allowed;
        }
        &.size-sm{
            padding: 15px 20px
        }

        &.size-lg{
            padding: 20px 15px
        }
        &.shadow{
            box-shadow: 0 0 50px rgba(1,1,1,0);
        }
    }
</style>