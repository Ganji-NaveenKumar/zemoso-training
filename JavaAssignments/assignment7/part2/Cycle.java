package assignment7.part2;
class Unicycle extends Cycle{
    void balance(){
        System.out.println("Unicycle balance with one tyre");
    }
}
class  Bicycle extends Cycle{
    void balance(){
        System.out.println("Bicycle balance with two tyre");
    }
}
class Tricycle extends Cycle{
}
public class Cycle {
    void ride(){
        System.out.println("Ride cycle");
    }
    public static void main(String[] args) {
        Cycle[] cycle=new Cycle[3];
        cycle[0]=new Unicycle();
        cycle[1]=new Bicycle();
        cycle[2]=new Tricycle();
        for(Cycle cyc:cycle){
            cyc.ride();
//            cyc.balance();
//            the method balance is calling in instance of Cycle class,which is parent class,
//            but it is present in subclass.
//            so ,need to make its abstract or regular method,but in tricycle,we don't have method.
//            so,we need to downcast it
            if (cyc instanceof Unicycle) {
                ((Unicycle) cyc).balance();
            } else if (cyc instanceof Bicycle) {
                ((Bicycle) cyc).balance();
            } else {
                System.out.println("Tricycle cannot balance");
            }
            System.out.println();
        }
//        generally we downcast with this;
        Unicycle cycle1=(Unicycle) cycle[0];
        Bicycle cycle2=(Bicycle) cycle[1];
        Tricycle cycle3=(Tricycle) cycle[2];
        cycle1.balance();
        cycle2.balance();
        if(cycle3 instanceof Tricycle) System.out.println("Tricycle cannot balance");
    }
}
