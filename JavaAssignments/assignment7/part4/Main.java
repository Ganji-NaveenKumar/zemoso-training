package assignment7.part4;
public class Main {
    public static void main(String[] args) {
        CycleFactory unicycle=new UniCycleFactory();
        CycleFactory bicycle=new BiCycleFactory();
        CycleFactory tricycle=new TriCycleFactory();
        Cycle bicycle1=unicycle.createCycle();
        Cycle unicycle1=bicycle.createCycle();
        Cycle tricycle1=tricycle.createCycle();
        unicycle1.name();
        unicycle1.ride();
        bicycle1.name();
        bicycle1.ride();
        tricycle1.name();
        tricycle1.ride();
    }
}
