package MiFecha;

public class Fecha {


    // Atributos
    private int dia;
    private int mes;
    private int anio;


    public Fecha(){

    }
    public Fecha(int tuDia, int tuMes, int tuAnio){

        dia = tuDia;
        mes = tuMes;
        anio = tuAnio;

    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    public int getDia() {
        return dia;
    }

    public int getMes() {
        return mes;
    }

    public int getAnio() {
        return anio;
    }

    public String formaF(){
        int d = getDia();
        int m = getMes();
        int a = getAnio();
        String dd;
        String mm;
        if (d<10){
            dd = "0"+String.valueOf(d);
        }else{
            dd = String.valueOf(d);
        }
        if (m<10){
            mm = "0"+String.valueOf(m);
        }else{
            mm = String.valueOf(m);
        }


        String formato = "fecha: " + dd + "/" + mm + "/" + a;

        return formato;
    }







}
