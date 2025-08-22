function GerarDiaDaSemana() {
    //Maniplando as datas e horário
    const DiaDaSemana = new Date().toLocaleDateString("pt-br" , {
        weekday: "long"
    });

    const Hora = new Date().toLocaleTimeString("pt-br" , {
        hour: "numeric",
        minute: "numeric" 
    });

    const Data = new Date().toLocaleDateString("pt-br");
    const DataCompleta = `${DiaDaSemana} (${Data}) às ${Hora}`

    return DataCompleta;
}

export default GerarDiaDaSemana;