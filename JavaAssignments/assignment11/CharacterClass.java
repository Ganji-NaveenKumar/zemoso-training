package assignment11;
import  java.io.*;
import java.util.HashMap;

public class CharacterClass {
    public static void main(String[] args) throws IOException {
        String inputFileName=args[0];
        String outputFileName= args[1];
        HashMap<Character,Integer> hashMap=new HashMap<>();
        try(BufferedReader br=new BufferedReader(new FileReader(inputFileName))){
            String line;
            while((line=br.readLine())!=null){
                for(int i=0;i<line.length();i++){
                    char ch=line.charAt(i);
                    hashMap.put(ch, hashMap.getOrDefault(ch, 1) + 1);
                }
            }
        }
        catch(IOException e){
            System.out.println(e.getMessage());
        }
        try(BufferedWriter bw = new BufferedWriter(new FileWriter(outputFileName))){
            hashMap.forEach((key,value)->{
                    try{
                        bw.write(key+" : "+value);
                        bw.newLine();
                    }
                    catch(IOException e){
                        System.out.println(e.getMessage());
                    }});
        }
        catch(IOException e){
            System.out.println(e.getMessage());
        }
        System.out.println("inputFile name "+inputFileName);
        System.out.println("outFile name "+outputFileName);
    }
}
