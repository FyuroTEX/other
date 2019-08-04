package car;

public class Auto {

    Doors door;
    Engine engine;
    Wheel wheel;
    Window window;

    public Auto() {
        this.door = new Doors();
        this.engine = new Engine();
        this.wheel = new Wheel();
        this.window = new Window();
    }

    public Doors getDoor() {
        return door;
    }

    public Engine getEngine() {
        return engine;
    }

    public Wheel getWheel() {
        return wheel;
    }

    public Window getWindow() {
        return window;
    }

    public void setDoor(Doors door) {
        this.door = door;
    }

    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public void setWheel(Wheel wheel) {
        this.wheel = wheel;
    }

    public void setWindow(Window window) {
        this.window = window;
    }
}
