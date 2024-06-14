import java.util.*;
public class Assignment{
    public static String find(int a[],int n){
        int evencn=0,oddcn=0;
        for(int i=0;i<n;i++){
            if(a[i]%2==0) evencn++;
            else oddcn++;
        }
        boolean  flag=false;
        int x=evencn/2+evencn%2;
        int y=oddcn/2;
        // 2 4 6 8 5
        //start with even.
        int teven=x;
        int t1=n/2+n%2;
        //if even numbers are more than the target, directly Alice wins
        if(teven>=t1) flag=true;
        else{
           t1-=x;
           if(t1%2!=0) flag=false;
           else{
            if(y>=t1) flag=true;
           }
        }
        //start with odd
        x=evencn/2;
        y=oddcn/2+oddcn%2;
        int todd=y-y%2;
        t1=n/2+n%2;
        //if odd numbers are more than the target ,directly Alice wins.
        if(todd>=t1) flag=true;
        else{
            t1-=todd;
            if(t1<=x) flag=true;
        }
        return flag ? "Alice":"Bob";
    }
    public static void main(String[]args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int a[]=new int[n];
        for(int i=0;i<n;i++){
            a[i]=sc.nextInt();
        }
        System.out.println(find(a,n)+" is winner of the game");
        sc.close();
    }
}