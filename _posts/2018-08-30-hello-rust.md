---
title: "Hello Rust!"
description: "Rust언어에 대해 간단히 소개하고 시작하기 위해 필요한 설치 과정을 다룬다."
categories: rust
tags: [rust, quickstart, tutorial]
---

## 시작하며

블로그란걸 안해본지도 10년이 넘었고, 제대로 된 글은 마지막으로 써본게 언제인지도 기억이 나지 않습니다. 항상 마음만 굴뚝이고 핑계거리는 100만가지가 넘지만, 늘 부족한 한글자료와 달리 빠른 속도로 늘어 가는 중국어 자료들을 보면서 언젠가는 한 발자국이라도 때어 봐야겠다 생각했습니다.

개발이라는게 공부만으로 되는게 아니다 보니, 업무와 연관이 있지 않으면 도무지 진도가 나가지 않고 보잘것 없는 것이라도 조금씩 정리를 해 보면 도움이 되지 않을까 해서 큰 마음을 먹고 페이지를 만들어 봤습니다.

Rust에 대해 아직 공부 중이라 뭔가 대단히 잘 아는것도 아니고 글 솜씨도 없지만, 나 자신에게는 큰 도움이 될 것 같고, 다른 누군가에게는 티끌만큼이라도 도움이 되겠거니 생각하며 시작해 봅니다.

## Rust란

한동안 수많은 언어들이 쏟아져 나왔지만 OS, Kernel 이나 웹브라우저 등의 System Programming 영역은 여전히 C/C++만이 유일한 선택지였다. Go가 system programming 언어를 표방하고 나왔지만 이들이 말하는 System은 분명 전통적 low level system과는 거리가 있다.(이 부분에서 Google이 바라보는 system이 전통적인 의미와 매우 다르다는 점이 흥미롭게 느껴지기도 한다.)
문제는, 많은 노력에도 불구하고 C/C++로 만든 코드에는 항상 메모리 관리에 문제가 발생했고 이는 보안 버그로 이어졌으며, 이 때문에 multi core를 활용하도록 병렬 프로그램을 만들기가 너무 어려웠다는 점이다.
이런 문제들로 고통받던 모질라 재단은 새로운 언어를 만들게 되었는데 이 언어가 바로 Rust이다.

### 특징

Rust는 Graydon Hoare에 의해 개발되고 모질라 제단이 지원하고 있는 오픈소스 프로젝트로 Rust 홈페이지에서는 다음과 같은 점들을 주요 특징으로 소개하고 있다.

* zero-cost abstractions
* move semantics
* guaranteed memory safety
* threads without data races
* trait-based generics
* pattern matching
* type inference
* minimal runtime
* efficient C bindings

이 중 가장 중요하다 생각하는 두가지가 *zero-cost*와 *safety*이다.

Rust는 system programming language 답게 GC등의 부가적인 runtime이 없다. 따라서 항상 예측가능하게 동작하며 compile된 binary는 C/C++로 만든것과 본질적으로 동일하다.

하지만 Rust는 runtime 없이도 GC 기반의 언어들과 동일한 수준의 메모리 안전성을 제공한다. Double free, dangling pointer, data races와 같은 문제가 발생하지 않으며(일부러 만들려고 해도 매우 어렵다), 모든 경우에 undefined behavior가 발생하지 않도록 면밀하게 설계되어 있다. Rust는 runtime 없이 이를 달성하기 위해 언어 수준에서 매우 깐깐한 규칙을 정해 놓고, 이 규칙들을 지키지 않으면 컴파일이 되지 않도록 하고 있다. Compile time에 모든 문제를 찾아내고 run time overhead는 없도록 하여 두마리 토끼를 모두 잡고 있다.

더 자세한 내용들은 앞으로 계속 다룰 계획이다.

### 진입장벽

#### 언어 자체

Rust는 배우기가 쉽지 않은 언어로 알려져 있다. 앞서 나열한 상충되는 특징들을 달성하기 위해 도입된 ownership, lifetime과 같은 개념들에 더해, 복잡한 type system과 너무나도 깐깐한 compiler는, 한동안 쉽고 사용하기 편한 언어에 길들여져 있던 사람들에게 매우 높은 진입장벽으로 작용한다.

많은 사람들이 얼핏 보면 고수준의 dynamic type 언어처럼 보이기도 하는 [홈페이지][1]의 예제 때문에 섣불리 덤벼 들었다가, 조금만 수정해 보려고 해도 엄청난 에러를 뱉어내는 컴파일러(알고보면 너무 친절하게 많은 정보를 주고 있는 것이긴 하지만)에 질려 포기하곤 한다.

Rust는 C++과 같은 저수준 언어와 ML, Haskell등의 언어 모두에 매우 조예가 깊지 않다면 쉽게 덤벼들어 뭐든 만들어 가면서 배울 수 있는 언어가 아닌듯 하다. 따라서 적어도 커뮤니티에서 **The Book** 또는 **TRPL**이라 불리는 [The Rust Programming Language][3]이나 좀더 심도 있는 책인 [Programming Rust][2] 정도는 한번 읽고 난 다음 도전하는 것을 권하고 싶다.

참고로 **TRPL**은 [온라인][3]에서도 무료로 볼 수 있고 나중에 설명할 rustup이 설치 되어 있다면 `rustup doc --book` 명령을 실행하면 offline에서도 볼 수 있다. (Standard library의 문서는 `rustup doc --std`)

#### 빠른 변화

Rust는 아직도 매우 빠른속도로 개발되고 있다. 이는 바꿔 말하면 아직 안정화가 덜 되었다는 의미로, 6주마다 릴리즈 되는 stable channel과 매일 릴리즈 되는 nightly channel로 나눠져 있다. 점차 개선되고 있기는 하나, 많은 인기있는 Rust 기반 project들이 nightly channel에서만 돌아가고, futures와 같은 핵심 라이브러리 역시 아직 많은 변화를 겪고 있다. 이 부분은 시간이 해결해 주겠지만 처음 배우는 입장에서 매우 혼란스러운 것이 사실이다.

하지만, 하위 호환성이 안정화 되지 않았다는 의미이지 생성된 바이너리가 불안정 하다는 의미는 아니다. Rust 커뮤니티는 누구보다 보안과 안정성을 중요하게 생각하기 때문에 어떻게든 컴파일이 되서 돌아간다면 이는 매우 안정적이고 안전하면서 완성도 높은 실행 파일을 만들어 낸다. 이 점 때문에 많은 개발자들이 기본 개발 환경으로 nightly channel을 사용하고 있는것 이기도 할 것이다.

#### 여전히 부족한 tool

외부 Tool들도 아직 많이 부족하다. 이미 수십년간 성숙된 Java는 말할것도 없고, 자주 비교될 수 밖에 없는 Golang에 비교해 보면 IDE나 editor등의 지원이 형편없다고 할 수 있다.

사실 이 부분은 Golang이 워낙에 특출난데, 언어 자체가 매우 단순해서 구문분석이 쉽고, 컴파일이 극단적으로 빠르기 때문에 language server가 거의 즉각적으로 반응 할 수 있는데다, type system도 단순해서 말그대로 그 쪽에 특화된 언어라고 할 수 있다. 거칠게 이야기 하면 언어가 좀 모자라도 주변 툴들로 극복하는 전략이라 할 수 있을 것 같다.

반면 Rust는 정반대라 할 수 있는데, 워낙에 복잡한 type system과 언어 구조로 인해 컴파일도 매우 느리고, 왠만한 실수는 compile time에 잡아내려는 설계사상 때문에, 조금만 잘못되어도 compile이 되지 않는다. 이 때문에 수정중에도 실시간으로 구문을 분석해야 하는 IDE, Editor들 입장에서는 매우 까다로운 언어라고 할 수 있다. 하지만 빠른 속도로 개선되고 있고 컴파일 속도도 최근에 많은 개선이 있었기 때문에 가까운 시일안에 큰 불편 없는 수준이 되리라 생각한다.

## Rust 시작하기

이제 시작하기 위해 필요한 toolchain들을 설치하고 간단한 코드를 작성해 보자.

### Rust Toolchain 설치

Rust는 앞서 이야기 한 것 처럼 stable channel이 6주 단위로 release되고 nightly channel은 매일 새버전이 release된다. 다른 프로젝트와 달리 nightly를 실제 사용하는 경우도 많기 때문에 직접 toolchain을 설치하고 관리하는것은 매우 비효율적이다. 게다가 cross compile까지 필요하다면 toolchain 관리를 위한 체계가 필요하다.

[rustup](https://rustup.rs)을 사용하면 이를 자동화 할 수 있다.

#### rustup 설치

MacOS나 Linux 같은 Unix환경이라면 다음 명령어 한줄로 설치가 가능하다.

```console
% curl https://sh.rustup.rs -sSf | sh
```

Windows라면 gnu toolchain이나 Visual C++ Build Tools 2015가 필요하다. 자세한 사항은 rustup 홈페이지와 [Working with Rust on Windows](https://github.com/rust-lang-nursery/rustup.rs#working-with-rust-on-windows)를 참고한다.

#### Tool chain 설치

따로 설정하지 않았다면 기본적으로 stable toolchain이 설치되어 있다.

```console
% rustup toolchain list
stable-x86_64-apple-darwin (default)
```

nightly toolchain을 설치하고 싶다면 다음과 같이 설치한다.

```console
% rustup toolchain install nightly
% rustup default nightly
...
% rustup toolchain list
stable-x86_64-apple-darwin
nightly-x86_64-apple-darwin (default)
```

하지만 당장은 nightly의 기능을 사용할 일은 없을 것이기 때문에 당분간은 stable을 그대로 사용하도록 하자.

```console
% rustup default stable
```

#### Cross platform target 추가

`rustup`을 기본으로 설치했다면 설치한 OS에 해당하는 target과 WebAssembly를 위한 WASM target 두가지가 기본으로 설치된다.

```console
% rustup target list
...
wasm32-unknown-unknown (installed)
x86_64-apple-darwin (default)
...
```

Cross compile을 위해 target을 추가하고 싶다면 다음 명령어를 사용한다.

```console
% rustup target add x86_64-unknown-linux-gnu
% rustup target list
...
wasm32-unknown-unknown (installed)
x86_64-apple-darwin (default)
...
x86_64-unknown-linux-gnu (installed)
```

하지만 cross compile을 위한 toolchain을 구성하고 설치하는건 쉬운일이 아니다. `rustup`이 자동으로 처리해 주는것은 rust toolchain만이고 gcc, ld, MSVC 등의 cross compile toolchain은 별도로 설치해 줘야 한다. 테스트 해 본 바로는 linux 이외의 플랫폼에서 제대로 구성하기는 쉽지 않았다.

다만 기본 설치된 `wasm32-unknown-unknown` target은 비교적 문제 없이 잘 동작한다.

#### Toolchain upgrade

설치된 toolchain을 최신버전으로 upgrade하려면 `update` 명령을 사용한다.

```console
% rustup update
info: syncing channel updates for 'stable-x86_64-apple-darwin'
info: syncing channel updates for 'nightly-x86_64-apple-darwin'
...
```

### IDE / Editor

대부분의 IDE / Editor가 rust plugin을 가지고 있어서 취향에 맞게 사용하면 된다. 지원하는 IDE와 plugin은 다음 link에 잘 정리되어 있다.

* https://areweideyet.com

개인적으로 이 글을 쓰는 시점에서는 Intellij IDEA의 intellij-rust plugin이 가장 뛰어나다 생각한다. VSCode나 Atom 등의 기반이 되는 RLS(Rust Language Server)가 빠른속도록 개선되고 있으니 앞으로 어떻게 될지는 모르겠지만, 지금으로써는 IDEA에 비해 한참 모자라다. 무료버전의 IDEA CE에서도 잘 동작하고 Clion과도 잘 동작한다. Clion을 사용하면 debugger도 사용 가능하다는 글을 본적이 있는데, 아직 debugger를 사용해 보지는 않았다.

**[TL;DR]** Intellij IDEA CE + intellij-rust 조합이 가장 좋다.
{: .notice}

### Hello World

이제 `Hello World`를 출력해 보자.

#### Project 생성

Rust는 nodejs의 `npm`과 유사한 `cargo`라는 build tool을 제공한다. `cargo`를 이용해 프로젝트를 생성해 보자.

```console
% cargo init --bin hello-world
     Created binary (application) project
% tree hello-world
hello-world
├── Cargo.toml
└── src
    └── main.rs

1 directory, 2 files
```

`--bin` 옵션은 실행 파일을 위한 project를 생성한다. 이 옵션이 없으면 라이브러리를 위한 project가 생성된다. 자세한 내용은 일단 넘어가자.

이제 다음과 같이 2개의 파일이 생성되었다.

* `Cargo.toml`

  ```toml
  [package]
  name = "hello-world"
  version = "0.1.0"
  authors = ["Jason Kim <dialogbox@gmail.com>"]

  [dependencies]
  ```

* `main.rs`

  ```rust
  fn main() {
      println!("Hello, world!");
  }
  ```

이미 기본적으로 `Hello, world!`를 출력하도록 되어 있다. 그대로 실행해 보자.

#### Build 및 실행

```console
% cargo build
   Compiling hello-world v0.1.0
    Finished dev [unoptimized + debuginfo] target(s) in 1.83s
% ./target/debug/hello-world
Hello, world!
```

`cargo run` 명령으로 한번에 할 수도 있다.

```console
cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.02s
     Running `target/debug/hello-world`
Hello, world!
```

#### Cross Compile

다른 target으로 컴파일 하려면 `--target` 옵션을 사용한다.

```console
cargo build --target=wasm32-unknown-unknown
   Compiling hello-world v0.1.0
    Finished dev [unoptimized + debuginfo] target(s) in 2.52s
% ls target/wasm32-unknown-unknown/debug
build            deps             examples         hello-world.d    hello-world.wasm incremental      native
```

Rust 커뮤니티는 WebAssembly에 매우 많은 관심을 보이고 있다. Runtime이 없이 안전한 코드를 만들 수 있는 Rust의 특성이 WebAssembly와 잘 맞기 때문일텐데, 이 글의 범위를 넘어서기 때문에 참고할만한 링크 몇 개만 소개하고 넘어갈까 한다

* https://rustwasm.github.io/book/
* https://medium.com/@charltoons/tutorial-compiling-rust-to-wasm-b70d4a7d428f

## 마무리

이번 글에서는 Rust언어에 대해 간단히 소개하고 시작하기 위해 필요한 설치 과정을 다루어 보았다.
다음번에는 cargo를 이용해 project를 빌드하고 실행하는 방법을 정리해 볼까 한다.

[1]: https://www.rust-lang.org
[2]: http://shop.oreilly.com/product/0636920040385.do
[3]: https://doc.rust-lang.org/book/
