package car;

public class Window {

    Double opacity;

    public Window(Double opacity) {
        this.opacity = opacity;
    }

    public Window() {
        this.opacity = 1.0;
    }

    public void setOpacity(Double opacity) {
        this.opacity = opacity;
    }

    public Double getOpacity() {
        return opacity;
    }
}
