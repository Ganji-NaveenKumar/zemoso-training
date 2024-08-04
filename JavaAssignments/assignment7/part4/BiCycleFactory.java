package assignment7.part4;

public class BiCycleFactory implements CycleFactory{
    @Override
    public Cycle createCycle() {
        return new BiCycle();
    }
}
