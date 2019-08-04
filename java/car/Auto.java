package car;

import java.util.List;

public class Auto {

    Door rightDoor;
    Engine engine;
    Wheel wheel;
    Window doorWindow;
    FrontWindow frontWindow;
    Door leftDoor;

    List<Door> doors;


    DoorWindowWidthRyushecki dWwR;


    public Auto() {
        this.leftDoor = new Door();
        this.rightDoor = new Door();
        this.engine = new Engine();
        this.wheel = new Wheel();
        this.doorWindow = new DoorWindow();
        this.frontWindow = new FrontWindow();

    }

    public DoorWindowWidthRyushecki getdWwR() {
        return dWwR;
    }

    public void setdWwR(DoorWindowWidthRyushecki dWwR) {
        this.dWwR = dWwR;
    }

    public Door getRightDoor() {
        return rightDoor;
    }

    public void setRightDoor(Door rightDoor) {
        this.rightDoor = rightDoor;
    }

    public Door getLeftDoor() {
        return leftDoor;
    }

    public void setLeftDoor(Door leftDoor) {
        this.leftDoor = leftDoor;
    }

    public void setDoors(List<Door> doors){
       this.doors = doors;
    }
    public List<Door> getDoors(){
        return doors;
    }

    public Engine getEngine() {
        return engine;
    }

    public void setEngine(Engine engine) {
        this.engine = engine;
    }
    public void setEngine(    Integer celindrs, String modelEngine) {
        this.engine = new Engine(celindrs, modelEngine);
    }

    public Wheel getWheel() {
        return wheel;
    }

    public void setWheel(Wheel wheel) {
        this.wheel = wheel;
    }

    public Window getDoorWindow() {
        return doorWindow;
    }

    public void setDoorWindow(Window doorWindow) {
        this.doorWindow = doorWindow;
    }

    public FrontWindow getFrontWindow() {
        return frontWindow;
    }

    public void setFrontWindow(FrontWindow frontWindow) {
        this.frontWindow = frontWindow;
    }


}
