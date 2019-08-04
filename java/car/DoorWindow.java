package car;

public class DoorWindow extends Window {
    public DoorWindow() {
        this.opacity = 1.0;
        this.heigth = 50.0;
        this.width = 120.0;
    }

    public Double Area(Double heigth, Double width){
        return heigth * width;
    }

    @Override
    public String toString() {
        return "DoorWindow{" +
                "opacity=" + opacity +
                ", heigth=" + heigth +
                ", width=" + width +
                '}';
    }
}
