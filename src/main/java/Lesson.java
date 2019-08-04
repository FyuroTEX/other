public class Lesson {

    public static void main(String[] args) {
        ////MAIN TYPES
        String text = "Text";
        Integer number = 123;
        Double numberWithCommma = 123.23;
        Boolean truOrFalse = true;
        Long longNumber = 234723894234L;

        /////////


        Float numberWithCommmaflt = 213124.23432f;
        Byte bytes = 127;


        House comeClass = new House();

        String tex1t = comeClass.someText();
        System.out.println(comeClass.getWindow().getHeigth());
        comeClass.getWindow().setHeigth(2.5);
        comeClass.getWindow().setHeigth(2.5);
        System.out.println(comeClass.getWindow().getHeigth());
//        System.out.println(comeClass.window.heigth);
        comeClass.someFunction();

    }
}
