package car;


import java.util.Objects;

public class Door {

    String color;
    String position;
    Window window = new DoorWindow();


    public Door(String color) {
        this.color = color;
    }

    public Door(String color, String position) {
        this.color = color;
        this.position = position;
    }

    public Door() {
        this.color = "black";
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPosition() {
        return position;
    }

    public Window getWindow() {
        return window;
    }

    @Override
    public String toString() {
        return "Door{" +
                "color='" + color + '\'' +
                ", position='" + position + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Door)) return false;
        Door door = (Door) o;
        return Objects.equals(getColor(), door.getColor()) &&
                Objects.equals(getPosition(), door.getPosition()) &&
                Objects.equals(getWindow(), door.getWindow());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getColor());
    }
}
