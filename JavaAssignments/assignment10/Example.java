package assignment10;

 class Node<T>{
    T data;
    Node<T> next;
    Node(T data){
        this.data=data;
    }
}
class SList<T>{
     Node<T> head;
     SList(){
         head=new Node<>(null);
     }
    public SListIterator<T> iterator() {
        return new SListIterator<>(head);
    }
    public String toString(){
        StringBuilder sb = new StringBuilder();
        SListIterator<T> it = iterator();
        while (it.hasNext()) {
            sb.append(it.next()).append(" ");
        }
        return sb.toString();
    }
}
class SListIterator<T> {
     Node<T> current;
    Node<T> lastReturned;

    SListIterator(Node<T> head) {
        current = head;
    }
    public boolean hasNext() {
        return current.next != null;
    }
    public T next() {
        lastReturned = current;
        current= current.next;
        return current.data;
    }
    public void insert(T data) {
        Node<T> newNode = new Node<>(data);
        newNode.next = current.next;
        current.next = newNode;
        current=newNode;
    }
    public void remove() {
        if(current==null) {System.out.println("End of the List");}
        else if(lastReturned==null){System.out.println("dummy node");}
        else if(current.next==null) {lastReturned.next=null;}
        else{
            lastReturned.next=current.next;
            current=lastReturned.next;
        }
    }
}
public class Example {
     public static void main(String[] args) {
         SList<String> slist=new SList<>();
         SListIterator<String> it=slist.iterator();
         it.insert("naveen");
         it.insert("swarupa");
         it.insert("neeraj");
         System.out.println(slist);
         it.insert("manoj");
         it.insert("teja");
         System.out.println(slist);
         it=slist.iterator();
         it.insert("pavani");
         it=slist.iterator();
         System.out.println(slist);
         it.next();
         it.remove();
         System.out.println(slist);
         it.next();
         it.next();
         it.remove();
         System.out.println(slist);
     }
}
