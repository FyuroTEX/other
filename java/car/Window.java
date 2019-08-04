package car;

public class Window {

    Double opacity;

    protected Double heigth;
    protected Double width;


    public Window(Double opacity, Double heigth, Double width) {
        this.opacity = opacity;
        this.heigth = heigth;
        this.width = width;
    }

    public Window() {
        this.opacity = 1.0;
        this.heigth = 2.0;
        this.width = 4.0;
    }

    public void setOpacity(Double opacity) {
        this.opacity = opacity;
    }
    public Double Area(Double heigth, Double width){
        return heigth * width;
    }

    public Double getOpacity() {
        return opacity;
    }

    public Double getHeigth() {
        return heigth;
    }

    public void setHeigth(Double heigth) {
        this.heigth = heigth;
    }

    public Double getWidth() {
        return width;
    }

    public void setWidth(Double width) {
        this.width = width;
    }
}
