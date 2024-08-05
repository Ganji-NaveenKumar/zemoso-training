package assignment3;
import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class PingClass {
    public static int findMedian(ArrayList<Integer> times){
        int median=-1;
        if(times.isEmpty()) return -1;
        Collections.sort(times);
        System.out.println(times);
        int size=times.size();
        if(size%2!=0) median=times.get(size/2);
        else{
            median=(times.get(size/2-1) + times.get(size/2))/2;
        }
        return median;
    }
    public static void printPing(String str){
        ArrayList<Integer> times=new ArrayList<Integer>();
        try{
//            converting input string into ping with 15 packets.
            String command = "ping -n 15 " + str;
//            executing the ping.
            Process process = Runtime.getRuntime().exec(command);
            BufferedReader inputStream = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String output;
            while ((output = inputStream.readLine()) != null) {
//                getting reply from process ping.
//                System.out.println(output);
                if (output.contains("time=")) {
//                   taking time from reply.
                    String timeStr = output.split("time=")[1].split("ms")[0].trim();
                    System.out.println(timeStr);
                    times.add(Integer.parseInt(timeStr));
                }
            }
//            finding median time
            int value=findMedian(times);
            if(value==-1) System.out.println("Not connected to Ping");
            else System.out.println("The Median value of time-ping is: "+value);
        }catch(IOException e){
            System.out.println(e.getMessage());
        }

    }
    public static void main(String[]args) throws IOException {
        Scanner sc=new Scanner(System.in);
        String str=sc.next();
        printPing(str);
    }
}
