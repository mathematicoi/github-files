/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <string.h>

using namespace std;
int i;
char p[80];
char s[80];

int main()
{
    char s[80]="Wikus";
    cout<<"enter password";
    cin>>p;
    while(p[i]!='\0') 
    {
        if(p[i]==s[i]) 
        {
            i++;
            
        } 
        else 
        {
             printf("That is wrong");
            break;
        }
        if(p[i]=strlen(s)) {
        
        printf("success");
        }
        
    }
   

    return 0;
}
