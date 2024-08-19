let MModal = `<div id="miModal" class="modal">
  <div class="modal-contenido">
    <span class="cerrar">X</span>
    <div class="contenido">
      <!--[ Show All Image ]-->
      <div class="psImg hdImg">
        <div>
          <div class="ContactForm">
            <form name="cForm">
              <div>
                <label for="issue-type"><span class="n req">Seleccione un tipo de problema:</span></label>
                <select name="Asunto" id="issue-type" class="caja1 cSelect1">
                  <option value="Etiquetado: Título o resumen incorrecto, o episodio fuera de orden">Problema de etiquetado</option>
                  <option value="Problema-video: ">Problema de video</option>
                  <option value="Sonido: Difícil de escuchar, no coincide con el video o falta en algunas partes">Problema de sonido</option>
                  <option value="Subtitulos: Falta, es difícil de leer, no coincide con el sonido, tiene errores ortográficos o traducciones deficientes">Problema con subtítulos o leyendas</option>
                  <option value="Conexion:  Almacenamiento en búfer frecuente, la reproducción no se inicia u otro problema">Problema de conexión o de almacenamiento en búfer</option>
                </select>
              </div>
    <!--[ Extra ]-->
    <!--<div class="cArea">
      <label>
        <input class="cInpt cTel" name="telegram" id="telegram" type="text" />
        <span class="n">Telegram Username</span>
      </label>
      <span class="h">This field is optional</span>
    </div>-->
    <div class="cArea">
      <label>
        <textarea placeholder="¿Cúal es el problema? Por favor explicame" style="resize:vertical" class="cInpt cMsg" name="message" id="message" rows="3"></textarea>
      </label>
    </div>
    <div class="cArea borde1">
      <label>
        <input placeholder="Direccion de correo electronico" class="cInpt cMail" name="email" id="email" type="email" />
      </label>
    </div>
    <div class="cArea">
      <button class="cBtn button" type="submit"><i class="icon demo"></i>Enviar reporte</button>
    </div>
  </form>
</div>
</div>
</div>
    </div>
  </div>
</div>
`

document.write(MModal)
