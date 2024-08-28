let imprimir = `
<script src="./templates.js"></script>
<script src="./template.embed.js"></script>
<script src="./template.download.js"></script>
<script src="../../assets/js/bundle.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>$(document).ready(function(){
    $("input#proId").on("keyup", function(){
        var valor = $(this).val();
        var soloNumeros = '';
        // Expresión regular para encontrar números después de "/movie/" o "/tv/"
        var match = valor.match(/\/(movie|tv)\/(\d+)/);
        if (match) {
        soloNumeros = match[2];
        }
        $("div#tmdbX textarea").html(soloNumeros);
    });
});
    </script>
`;

document.write(imprimir);
