# C# Fundamentals


**1.** What is the purpose of a `namespace`?
<!-- enter you answer in the space below -->
```
    - names the files to be able to pull data from it quickly
```
**2.** What is the difference between a `class` and a `struct`?
<!-- enter you answer in the space below -->
```
    - Struct are value types, classes are reference types 
    
```
**3.** What is the method that returns an instance of a class, yet it has no return type?
<!-- enter you answer in the space below -->
```
    - deletes or removes 
```
## Example 1
```c#
abstract class Car
{
  ...
  public virtual string Start()
  {
    return "Vroooom";
  }
}
```
**5.** In the example what is the access modifier of the `Start()` method?
<!-- enter you answer in the space below -->
```
    - public
```
**6.** In the example what is `string` an indication of?
<!-- enter you answer in the space below -->
```
    - what vaule type with be returned
```
**7.** In the example what is `abstract` preventing?
<!-- enter you answer in the space below -->
```
    - being able to access class Car 
```
**8.** In the example what is the purpose of `virtual`?
<!-- enter you answer in the space below -->
```
    - virtual has access to mutiple modles
```
**9.** Name four access modifiers:
<!-- enter you answer in the space below -->
```
    - public access modifier.
    - private access modifier.
    - protected access modifier.
    - internal access modifier.
```
**10.** If you set a class or method to private, what can access it?
<!-- enter you answer in the space below -->
```
    - only that file
```