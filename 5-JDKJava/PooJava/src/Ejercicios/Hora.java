package Ejercicios;

import java.time.LocalDateTime;

public class Hora {

    private int hora;
    private int minuto;
    private int segundo;

    public Hora(){

    }


    public int getHora() {
        return hora;
    }

    public int getMinuto() {
        return minuto;
    }

    public int getSegundo() {
        return segundo;
    }

    public void setHora(int hora) {
        this.hora = hora;
    }

    public void setMinuto(int minuto) {
        this.minuto = minuto;
    }

    public void setSegundo(int segundo) {
        this.segundo = segundo;
    }

    public String visualizarHora(){

        LocalDateTime ahora= LocalDateTime.now();
        int año = ahora.getYear();
        int mes = ahora.getMonthValue();
        int dia = ahora.getDayOfMonth();
        int hora = ahora.getHour();
        int minutos = ahora.getMinute();
        int segundos = ahora.getSecond();
        return("Hora actual : " + hora + ":"+ minutos+":"+segundos);

    }
}
