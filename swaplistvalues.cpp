//This is a sorting file, composed with C++.
//It peeks into an array and sorts this array. I used references to perform the task.

#include <iostream>

using namespace std;
int size=7;
void fill_array(int a[],int size, int &number_used);
void swap(int &v1,int &v2);
void sort(int a[], int number_used);

int main()
{
    int number_used;
    int array[size];
    fill_array(array,size,number_used) ;
    sort(array,number_used);
    cout<<"enter array list and output will be sorted out";
    for(int i=0;i<number_used;i++) {
        cout<<array[i]<<"\n";
        
        
    }

    return 0;
}


void fill_array(int a[],int size, int &number_used) {
    int next,index;
    cout<<"enter up to"<<size;
    
    cin>>next;
    while((next>=0)&&(index<size)) {
    a[index]=next;
    index++;
    cin>>next;
    }
    number_used=index;
}


void swap(int &v1,int &v2) {
    int temp;
    if(v1>v2) 
    {
           temp=v1;
           v1=v2;
           v2=temp;
    }
   
    
}

void sort(int a[], int number_used) {
    int temp;
    for(int j=0;j<number_used;j++) {
        for(int i=0;i<number_used;i++) {
          swap(a[i],a[i+1]);
            
        }
        
    }
    
    
}
