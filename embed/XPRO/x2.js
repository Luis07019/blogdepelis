let eMovie = {
    html: ".html",
    Rivestream: "https://rivestream.live/watch?type=movie&id=",
    Multiembed: "https://multiembed.mov/directstream.php?video_id=",
    Multiembed0: "&amp;tmdb=1",
    Playhublite: "https://e.playhublite.com/e/",
    Vidsrc: "https://vidsrc.pro/embed/movie/",
    Superflixapi: "https://superflixapi.top/filme/",
    Frembed: "https://frembed.pro/api/film.php?id=",
    Moviesapi: "https://moviesapi.club/movie/",
};
    let Rivestream = eMovie["Rivestream"];
    let html = eMovie["html"];
    let Playhublite = eMovie["Playhublite"];
    let Multiembed = eMovie["Multiembed"];
    let Multiembed0 = eMovie["Multiembed0"];
    let Vidsrc = eMovie["Vidsrc"];
    let Superflixapi = eMovie["Superflixapi"];
    let Frembed = eMovie["Frembed"];
    let Moviesapi = eMovie["Moviesapi"];
    // let new1 = eMovie["new"];
    // let new2 = eMovie["new"];

let gdXpro = {
    embed:"https://gdrivexpro.blogspot.com/",
    fecha: "2024/10/",
    html:".html",
};
    let embedXpro = gdXpro["embed"];
    let fechaXpro = gdXpro["fecha"];
    let htmlXpro = gdXpro["html"];
    
let lXpro = {
    salto:"<br>",
    parrafoE:"<script>",
    parrafoS:"</script>",
    tmdbI:"840705",
};

let salto = lXpro["salto"];
let parrafoE = lXpro["parrafoE"];
let parrafoS = lXpro["parrafoS"];
let tmdbI = lXpro["tmdbI"];

let eLive = `${parrafoE}
{"cyberlocker": "GDrive XPRO","link":"${embedXpro}${fechaXpro}${tmdbI}${htmlXpro}","language": "Español-Latino", "quality": "HD"},${salto}
{"cyberlocker": "Playhublite","link":"${Playhublite}${tmdbI}","language": "Español-Latino", "quality": "HD"},${salto}
{"cyberlocker": "Multiembed","link":"${Multiembed}${tmdbI}${Multiembed0}","language": "Ingles", "quality": "HD"},${salto}
{"cyberlocker": "Vidsrc","link":"${Vidsrc}${tmdbI}","language": "Español-Latino", "quality": "HD"},${salto}
{"cyberlocker": "Vidsrc","link":"${Vidsrc}${tmdbI}","language": "Ingles", "quality": "HD"},${salto}
{"cyberlocker": "Superflixapi","link":"${Superflixapi}${tmdbI}","language": "Ingles", "quality": "HD"},${salto}
{"cyberlocker": "Frembed","link":"${Frembed}${tmdbI}","language": "Frances", "quality": "HD"},${salto}
{"cyberlocker": "Moviesapi","link":"${Moviesapi}${tmdbI}","language": "Ingles", "quality": "HD"},${salto}
{"cyberlocker": "Rivestream","link":"${Rivestream}${tmdbI}","language": "Ingles", "quality": "HD"},
${parrafoS}`;
document.write(eLive);
