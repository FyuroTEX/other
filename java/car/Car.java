package car;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Car {
    public static void main(String[] args) {

        Auto corchaliga = new Auto();

        System.out.println(corchaliga.getFrontWindow().getOpacity());
        corchaliga.frontWindow.opacity = 2.0;
        System.out.println(corchaliga.getFrontWindow().getOpacity());
        corchaliga.getDoorWindow().setOpacity(.5);
        System.out.println(corchaliga.getDoorWindow().getOpacity());

        System.out.println(corchaliga.getEngine().getEngine());
        corchaliga.getEngine().setEngineFull(8, "V8");
        System.out.println(corchaliga.getEngine().getEngine());
        System.out.println(corchaliga.doorWindow.heigth);


        DoorWindow doorWindow = new DoorWindow();
        FrontWindow frontWindow = new FrontWindow();
        DoorWindowWidthRyushecki dWwR = new DoorWindowWidthRyushecki();
        corchaliga.setDoorWindow(doorWindow);
        corchaliga.setFrontWindow(frontWindow);
        Window windows95 = new Window(2.0, 3.0, 4.0);
        System.out.println(corchaliga.getDoorWindow().toString());

        Engine engineV8 = new Engine();

        corchaliga.setEngine(engineV8);
        corchaliga.setEngine(26, "nbhnh");

        List<Window> garage = new ArrayList();
        garage.add(new FrontWindow());
        garage.add(new DoorWindow());
        garage.add(new DoorWindowWidthRyushecki());
        garage.add(new DoorWindowWidthRyushecki());
        garage.add(frontWindow);

        System.out.println("List before: " + garage);
//        garage.forEach(i ->{
//           garage.remove(i);
//        });
//        for (int i = garage.size(); i > 0 ; i--) {
//            garage.remove(0);
//        }
        int listSize = garage.size();
        while (listSize > 0) {
            garage.remove(0);
            listSize--;
        }

        System.out.println("List after: " + garage);
        Integer sizeOfGarage = garage.size();
        Boolean isFrontWindowInGarage = garage.contains(frontWindow);

        List<Door> doorsFromGarage = new ArrayList<>();

        doorsFromGarage.add(new Door("black", "Right"));
        doorsFromGarage.add(new Door("black", "Left"));
        doorsFromGarage.add(new Door("white", "Right"));
        doorsFromGarage.add(new Door("white", "Left"));

        corchaliga.setDoors(doorsFromGarage);

        List<Door> whiteRightDoor = new ArrayList<>();

//        doorsFromGarage.forEach(i ->{
//            if(i.getColor().equals("white") && i.getPosition().equals("Right"))
//            whiteRightDoor.add(i);
//        });
        for (Door door : doorsFromGarage) {
            if(door.getColor().equals("white") && door.getPosition().equals("Right"))
            whiteRightDoor.add(door);
        }
        System.out.println("Right White dors :" + whiteRightDoor);







        for (int i = 0; i < corchaliga.doors.size(); i++) {
            System.out.println("Doors position = " + corchaliga.doors.get(i).position);
        }
        List<String> otherDoor = new ArrayList<>();


//        for(int i = 0; i < doorsFromGarage.size(); i++){
//            otherDoor.add(corchaliga.doors.get(i).color +" "+ corchaliga.doors.get(i).position);
//        }


        for (int i = 0; i < doorsFromGarage.size(); i++) {

            String color = corchaliga.getDoors().get(i).getColor();
            String position = corchaliga.getDoors().get(i).getPosition();

            otherDoor.add(color + " " + position);
            System.out.println(otherDoor.get(i));
        }
        for (Door door : doorsFromGarage) {
            System.out.println(door.getColor());

        }

        doorsFromGarage.forEach(i -> System.out.println(i.getPosition()));

        List<String> colors = Arrays.asList("white", "black", "green");
        List<String> positin = Arrays.asList("right", "left", "back right");

        List<Door> colorPlusPosition = new ArrayList<>();

        for (int i = 0; i < 15 ; i++) {
            for (int j = 0; j < 3; j++) {

                for (int k = 0; k < 3; k++) {
                    colorPlusPosition.add(new Door(colors.get(j), positin.get(k)));
                }
            }
        }

        System.out.println(colorPlusPosition);


        Door someDoor = new Door();
        someDoor.setColor("black");

        Door someDoor2 = someDoor;

        someDoor2.setColor("white");

        Door someDoor3 = someDoor2;

        someDoor3.setColor("green");

        Door someDoor4 = new Door();
        someDoor4.setColor("pidor");

        someDoor4 = someDoor3;


        System.out.println(someDoor2);//white
        System.out.println(someDoor4);//green
        System.out.println(someDoor.equals(someDoor4));//green

        Door someDoor43 = new Door();
        someDoor43.setColor("black");

        Door someDoor44 = new Door();;

        someDoor44.setColor("black");
        someDoor44.setPosition("fdsgdg");

        System.out.println(someDoor43.equals(someDoor44));//green


    }


}

