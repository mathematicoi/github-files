/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

const int nop = 4;
int sum;
void input_data(int a[]);
void scale(int a[], int nop);
int get_total(int &sum);
void asterisk(int a[],int nop);

int main()
{
    
    int production[nop];
    cout<<"\n"<<"please enter positive numbers:";
    input_data(production);
    asterisk(production,nop);
}



void input_data(int a[]) {
    for(int i=0; i<nop; i++){
        get_total(a[i]); 
        scale(a,nop);
        //cout<<a[i];

    }
    
}
int get_total(int &sum) {
    sum=0;
    int next;
    cin>>next;
    while(next>=0) {
        sum = sum + next;
        cin>>next;
    }
   
}

void scale(int a[], int nop) {
    for(int i=0;i<nop; i++) {
        int rem=a[i]%1000;
        if(rem<=500) {
            a[i]=a[i]-rem;
        }
        else {
            a[i]=a[i]-rem+1000;

        }
    }
    
    
}

void asterisk(int a[],int nop) {
    int asterisk_no;
    for(int i=0;i<nop;i++) {
        asterisk_no=a[i]/1000;
        cout<<"Plant"<<i<<"=";
        
        for(int j=0;j<asterisk_no;j++) {
            
            cout<<"*";
            
        }
        cout<<"\n";
        
    }
    
    
}
