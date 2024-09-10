<script>
//<![CDATA[
(()=>{const e=sessionStorage.getItem("mdlc-is-accepted")||!1,s=document.querySelector(".mdlc"),c=document.querySelectorAll(".mdlc__action button");e||s.classList.add("is-visible"),[...c].forEach(e=>{e.addEventListener("click",()=>{const c=e.id;c.includes("accept")?(sessionStorage.setItem("mdlc-is-accepted",!0),s.classList.remove("is-visible")):c.includes("reject")&&alert("Es necesario aceptar las pautas publicitarias para ingresar al sitio.")})})})();
//]]>
</script>
