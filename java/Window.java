public class Window {
    Double width;
    Double heigth;
    String typeOfGlass;
    String typeOfFrame;

    public Window(Double width, Double heigth, String typeOfGlass, String typeOfFrame) {
        this.width = width;
        this.heigth = heigth;
        this.typeOfGlass = typeOfGlass;
        this.typeOfFrame = typeOfFrame;
    }

    public Window() {
        this.width = 2.4;
        this.heigth = 1.5;
        this.typeOfGlass = "Aweso";
        this.typeOfFrame = "SomeFrame";
    }

    protected void setWidth(Double width) {

        this.width = width;
    }

    public void setHeigth(Double heigth) {

        this.heigth = heigth;
    }

    public void setTypeOfGlass(String typeOfGlass) {

        this.typeOfGlass = typeOfGlass;
    }

    public void setTypeOfFrame(String typeOfFrame) {
        this.typeOfFrame = typeOfFrame;
    }

    public Double getWidth() {

        return width;
    }

    public Double getHeigth() {
        return heigth;
    }

    public String getTypeOfGlass() {
        return typeOfGlass;
    }

    public String getTypeOfFrame() {
        return typeOfFrame;
    }
}
