/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;
int bar=3;

int out_of_order(double a[],int size);
double compute_average(double a[], int size);
void show_difference(double a[]);

int main()
{
double production[bar];
out_of_order(production,bar);
compute_average(production,bar);
show_difference(production);

}


int out_of_order(double a[],int size) {
    int count;
    double next;
    cin>>next;
    while((next>0)&&(count<size)) {
        cout<<"keep typing";
        a[count]=next;
        count++;
        cin>>next;
        
        
    }
}

double compute_average(double a[], int size) {
    double total=0;
    for(int i=0;i<size;i++) {
        total= total + a[i];
    }
    return (total/size);
    
}

void show_difference(double a[]) {
    double dif=0;
    for(int i=0;i<bar;i++) {
        cout<<a[i];
        cout<<"it differs from the average by:";
        dif=compute_average(a,bar)-a[i];
        cout<<"\n";
        cout<<dif;

    }
}