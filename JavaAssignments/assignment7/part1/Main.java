package assignment7.part1;

public class Main {
    public static void main(String[] args) {
        Rodent[] rodent = new Rodent[3];

//        while initializing the  default constructor get executed.
        rodent[0]=new Hamster();
        rodent[1]=new Gerbil();
        rodent[2]=new Mouse();
        System.out.println("Abstract methods");
        for(Rodent rat:rodent){
            rat.eat();
            rat.run();
            rat.sleep();
            System.out.println();
        }
    }
}
