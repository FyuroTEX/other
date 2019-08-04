package car;

public class Car {
    public static void main(String[] args) {

        Auto corchaliga = new Auto();

        System.out.println(corchaliga.getWindow().getOpacity());
        corchaliga.window.opacity = 2.0;
        System.out.println(corchaliga.getWindow().getOpacity());
        corchaliga.getWindow().setOpacity(.5);
        System.out.println(corchaliga.getWindow().getOpacity());

        System.out.println(corchaliga.getEngine().getEngine());
        corchaliga.getEngine().setEngine(8, "V8");
        System.out.println(corchaliga.getEngine().getEngine());

    }
}
