<script>
    let name = "Akos";
    let src = "http://picsum.com/200/200";
    let string = 'Some string with html <strong>HELLO</strong>'
</script>

<img src={src} alt="Some text ${name}"/>
<h1>Hi, {name.toUpperCase()}!</h1>
<p>{@html string}</p>
<p>{string}</p>

<style>
    h1{
        color:aqua
    }
</style>