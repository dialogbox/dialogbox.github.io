---
title: "Hello Safe Rust!"
categories: quickstart
tags: [rust, tutorial, basic]
---

이 글에서는 Rust의 가장 큰 특징이라 할 수 있는 safty에 대해 아주 간단히만 살펴 본다.

## Hello Safe World!

왜 Rust를 배워야 하는지에 대해 이야기 하자면 끝이 없겠지만 가장 강점으로 내세우는 safty에 대해 간단히 맛만 살짝 볼까 한다.

### 무엇이 문제인가?

[Programming Rust][1]에서 발최한 다음의 C 프로그램을 보자.

```c
int main(int argc, char **argv) {
    unsigned long a[1];
    a[3] = 0x7ffff7b36cebUL;
    return 0;
}
```

Compile해서 돌려보지 않고 어떤 결과가 나올지 예상할 수 있을까? 우선 변수 `a`에 할당된 범위를 넘어서 값을 변경하고 있다. 그러니 아마도 에러가 나서 죽거나 할 것이다.

하지만 진짜 이렇게 간단한 문제일까? 내 리눅스 VM에서 돌려 보았다.

```console
$ gcc test.c
$ ./a.out
Segmentation fault (core dumped)
```

역시나 익숙한 에러가 발생한다. 그런데 core dump를 열어보거나 gdb로 돌려서 좀더 자세한 에러를 보면 내가 방금 만든 버그가 얼마나 심각한지 알 수 있다.

```console
$ gdb a.out
GNU gdb (Ubuntu 8.1-0ubuntu3) 8.1.0.20180409-git
...
(gdb) run
Starting program: /home/vagrant/a.out

Program received signal SIGSEGV, Segmentation fault.
0x00007ffff7b36ceb in __getrpcbynumber_r (number=0, resbuf=0x7fffffffe540, buffer=0x1 <error: Cannot access memory at address 0x1>,
    buflen=93824992232800, result=0x3e5c370eca381f64) at ../nss/getXXbyYY_r.c:367
367	../nss/getXXbyYY_r.c: No such file or directory.
```

`__getrpcbynumber_r` 함수가 에러를 발생시켰다. 나는 이 함수를 실행한 적이 없는데 이 에러는 어디서 왔을까?

C에서 stack 변수의 3 machine word 뒤는 함수가 return될 주소가 저장되어 있는데 다음 구문이 이 주소를 임의의 값으로 엎어 쓴 것이다.

```c
a[3] = 0x7ffff7b36cebUL;
```

만약 코드상에 메모리 관련 버그가 있고, 누군가 악의적으로 특정 주소를 대입한다면 아무 함수나 호출할 수 있게 된다. 실제 아주 빈번하게 발생하는 보안 버그의 유형이고 발생한다면 반드시 공격 대상이 되는 버그이다.
잘못된 메모리 접근은 단지 내 프로그램이 잘못 동작하는 문제를 넘어 보안 문제의 시작과 끝이라 할 수 있다.

할당되지 않은 메모리는 사용하면 안되고, 사용하지 않는 메모리는 반환되어야 한다. 아주 단순하고 당연한 명제이지만 이것이 지켜지지 않을 수 있는 상황은 너무나도 많다.

### 일반적인 해결방안

여러 버그 중 위의 예제의 bound check는 비교적 해결책이 명확하다. C++의 `std::vector`나 Java/Python 등의 collection은 모두 runtime에 size를 check해서 할당된 크기를 넘어서면 오류를 발생 시킨다. 고정크기의 배열이 아니고 동적으로 크기가 변하는 경우 이 방법 이외에는 다른 해결책은 없으며 size check를 한번 더 정도의 runtime overhead가 추가된다.

Bound check 이외에 dangling pointer와 double free와 같은 문제는 좀더 복잡한데,
일반적으로 언어에 따라 [Garbage Collection(GC)](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))나 [Reference Counting(RC)](https://en.wikipedia.org/wiki/Reference_counting)으로 해결하고 있지만, 각각의 여러 장단점이 있고, 둘 모두 runtime overhead가 발생한다는 문제가 있다. 응용에서 어느정도의 감수가 가능한 곳에서는 문제가 되지 않지만 low level system programming에는 분명히 한계가 있다.

이 점이 여전히 C/C++이 유일한 선택지일 수 밖에 없는 이유이기도 하다.

### Rust



[1]: http://shop.oreilly.com/product/0636920040385.do
