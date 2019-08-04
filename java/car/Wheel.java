package car;

public class Wheel {

    String label;
    int quantityWheel;

    public Wheel(String label, int quantityWheel) {
        this.label = label;
        this.quantityWheel = quantityWheel;
    }

    public Wheel() {
        this.label = "Michelin Alpin";
        this.quantityWheel = 4;
    }
}
