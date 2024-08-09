package assignment6;

import java.util.ArrayList;

public class Vampire {
    private static void swap(char[] arr, int i, int j) {
        char temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    public static void findPermutation(char[] ch,int start,int end,ArrayList<String> arr){
        if (start == end) {
            arr.add(new String(ch));
        } else {
            for (int i = start; i <= end; i++) {
                swap(ch,start,i);
                findPermutation(ch, start + 1, end, arr);
                swap(ch, start, i); // backtrack
            }
        }
    }
    public  static  boolean vampire(String str){
        char[] ch=str.toCharArray();
        long target=Long.parseLong(str);
        ArrayList<String> permutes=new ArrayList<>();
        findPermutation(ch,0,str.length()-1,permutes);
        for (String s : permutes) {
            int n = s.length() / 2;
            long a = Long.parseLong(s.substring(0, n));
            long b = Long.parseLong(s.substring(n));
            if(a%10==0 && b%10==0) continue;
            if (a * b == target) {
//                System.out.println(a+" "+b+" "+str);
                return true;
            }
        }
        return false;
    }
    public static void main(String[]args){
        ArrayList<Integer> vampireNumbers=new ArrayList<>();
        int n=1260;
        while(vampireNumbers.size()<101){
            String str=String.valueOf(n);
            if(str.length()%2==0 && vampire(str)){
                vampireNumbers.add(n);
            }
            n++;
        }
        vampireNumbers.forEach(System.out::println);
    }
}