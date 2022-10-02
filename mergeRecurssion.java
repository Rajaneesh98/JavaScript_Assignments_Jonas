/**
 * merge
 */
public class mergeRecurssion {

    public static void remAdd(int start, int[] arr, int index, int[] input) {

        while(start<arr.length){
            input[index]=arr[start];
            index++;
            start++;
        }
    }

    public  static void merge(int[] arr1, int[] arr2, int[] input) {

        int len1= arr1.length;
        int len2= arr2.length;
        int ind1=0,ind2=0,index=0;
        while(ind1<len1 && ind2<len2){
            if(arr1[ind1]<arr2[ind2]){
                input[index]=arr1[ind1];
                index++;
                ind1++;
            }else{
                input[index]=arr2[ind2];
                index++;
                ind2++;
            }
        }
        if(ind1<len1){
            remAdd(ind1,arr1,index,input);
        }
        if(ind2<len2){
            remAdd(ind2,arr2,index,input);
        }
    }

    public static void mergeSort(int[] arr){

        if(arr.length<=1){
            return;
        }
        int mid= arr.length/2;
        int[] arr1= new int[mid];
        int[] arr2 = new int[arr.length-mid];
        
        for(int i=0; i<mid ; i++){
                arr1[i]=arr[i];
        }
        for(int j=0; j<arr.length-mid; j++){
            arr2[j]=arr[mid+j];
        }

        mergeSort(arr1);
        mergeSort(arr2);
        merge(arr1,arr2,arr);
    }

    public static void main(String[] args) {
        int[] arr={1,4,2,3,6,9,7};
        mergeSort(arr);
        for(int i : arr){
            System.out.print(i+" ");
        }
    }
}