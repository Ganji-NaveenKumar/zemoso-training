package assignment7.part4;

public class UniCycle implements Cycle{
    public void ride(){
        System.out.println("Riding in UniCycle");
    }

    @Override
    public void name() {
        System.out.println("UniCycle");
    }
}
