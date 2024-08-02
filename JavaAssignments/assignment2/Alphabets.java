package assignment2;
import java.util.*;
public class Alphabets {
    public static boolean findValid(String str){
//        taking count array for all alphabets
        int[] alphabets=new int[26];
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
//            adding count in respective place of 0-25 as a-z
            alphabets[ch-'a']++;
        }
//        iterative  count array and if any alphabet is zero,then return false directly.
        for (int element : alphabets) {
            if (element == 0) {
                retrun false;
            }
        }
        return  true;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s="abcdefghijklmnopqrstuvwxyz";
        System.out.println(findValid(s));
        String str=sc.next();
        str=str.toLowerCase();
        System.out.println(findValid(str));
    }
}
