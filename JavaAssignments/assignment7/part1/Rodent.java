package assignment7.part1;

abstract class Rodent {
    Rodent(){
        System.out.println("Rodent constructor");
    }
    abstract void eat();
    abstract void sleep();
    abstract void run();
}
