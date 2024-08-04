package assignment7.part4;

public class UniCycleFactory implements  CycleFactory{
    public Cycle createCycle() {
        return new UniCycle();
    }
}
