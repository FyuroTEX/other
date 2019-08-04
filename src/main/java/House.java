public class House extends Window {
    String field1;
    Integer age;
    Boolean smt;
    Doors door;
    Window window;


    public House() {
        this.door = new Doors();
        this.window = new Window();
        System.out.println("Jopa");

    }

    protected void someFunction() {
        System.out.println("construcor");
    }

    public String someText() {
        return "AZAZA";
    }

    public Integer someTInt() {
        return 12;
    }

    public Integer sum(Integer first, Integer second) {

        return first + second;
    }

    public Doors getDoor() {
        return door;
    }

    public Window getWindow() {
        return window;
    }
}
