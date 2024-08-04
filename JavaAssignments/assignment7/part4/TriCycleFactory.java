package assignment7.part4;

public class TriCycleFactory implements CycleFactory{
    @Override
    public Cycle createCycle() {
        return new TriCycle();
    }
}
