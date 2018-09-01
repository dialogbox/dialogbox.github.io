---
title: "Hello Cargo!"
categories: rust
tags: [rust, quickstart, cargo, tutorial]
---

이 글에서는 `cargo` project의 구조와 module 구조 unit test 작성 방법에 대해 간단히 알아본다.

## Cargo Project

[이전 포스팅]({{ site.baseurl }}{% post_url 2018-08-30-hello-rust %})에서 만든 project를 다시 열어 보자.

```console
% tree hello-world
hello-world
├── Cargo.toml
└── src
    └── main.rs

1 directory, 2 files
```

Cargo project는 `Cargo.toml` 파일과 `src` directory의 source code들로 구성된다. `cargo build`나 `cargo update`등의 명령을 한번이라도 실행했다면 `Cargo.lock`과 `target` directory가 만들어 져 있을 수 있다.

**Note:** `cargo`의 기능을 여기서 모두 다루기는 힘들기 때문에 `cargo`에 대해 자세한 내용이 알고 싶다면 [Cargo Guide]를 참고하기 바란다.
{: .notice--info}

### Crate와 dependencies

`cargo`로 생성한 Rust project는 crate라는 형태로 packaging 된다. 이런 crate들은 중앙 repository인 [Crate registry]에 등록되고 관리되며, Crate registry의 crate들은 `Cargo.toml`의 `[dependendies]`에 추가해 주면 자동으로 다운로드되고 컴파일된다.

예를들어 CLI 툴을 만들때 사용하는 argument processor인 `clap` crate를 검색해 보면 다음과 같은 정보를 볼 수 있다.

{% include figure image_path="/assets/images/hello-cargo/hello-cargo-clap-crate-search-result.png" alt="clap crate search result" caption="crates.rs에서 clap crate를 검색한 결과" %}

위 페이지에서 안내하는 대로 `Cargo.toml` 파일에 추가해 주면 된다.

```toml
[package]
name = "hello-world"
version = "0.1.0"
authors = ["Jason Kim <dialogbox@gmail.com>"]

[dependencies]
clap = "2.32.0"
```

**Note:** Version은 Semantic versioning 포멧을 사용하기 때문에 여러가지 방식으로 유연하게 지정 가능하다. 자세한 내용은 [Cargo Guide] 또는 [semver requirements] 문서를 참고한다.
{: .notice--info}

다시 컴파일 해 보자

```console
% cargo build
   Compiling unicode-width v0.1.5
   Compiling libc v0.2.43
   Compiling bitflags v1.0.4
   Compiling ansi_term v0.11.0
   Compiling vec_map v0.8.1
   Compiling strsim v0.7.0
   Compiling textwrap v0.10.0
   Compiling atty v0.2.11
   Compiling clap v2.32.0
   Compiling hello-world v0.1.0 (file:///home/dialogbox/works/rust/tutoials/hello-world)
    Finished dev [unoptimized + debuginfo] target(s) in 9.21s
```

`clap` crate와 `clap`가 필요로 하는 crate들이 자동으로 추가된 것을 볼 수 있다. `clap`을 포함하여 외부 crate를 사용하는 방법은 나중에 다시 다루기로 한다.

### Project layout

Cargo의 build 결과물은 크게 `lib`와 `bin`으로 나뉘는데, 이름에서 알 수 있듯이 `bin`은 실행파일을 의미하고, `lib`은 실행파일이 아닌 library를 의미한다. 하나의 cargo project는 여러개의 `bin`들과 하나의 `lib`로 구성될 수 있으며 경우에 따라 project의 layout에 차이가 있다.

#### `bin`이 없거나 하나인 경우

다른 project에서 사용하기 위한 library를 만들 경우 실행파일이 없을 수 있다.

`cargo init`에 `--bin` 옵션을 추가한 경우 `src/main.rs` 파일이 생성되고, `--lib`를 지정한 경우 `src/lib.rs` 파일이 생성되는데,
`src/main.rs`가 있으면 실행파일을 생성하고, 그렇지 않은 경우 `src/lib.rs`를 이용해 library를 생성한다.

```console
% cargo init hello-lib --lib
     Created library project
% tree hello-lib            
hello-lib
├── Cargo.toml
└── src
    └── lib.rs

1 directory, 2 files
% cargo build
   Compiling hello-lib v0.1.0 (file:///home/dialogbox/works/rust/tutoials/hello-lib)
    Finished dev [unoptimized + debuginfo] target(s) in 0.17s
% ls target/debug/
build  deps  examples  incremental  libhello_lib.d  libhello_lib.rlib  native
```

`src/main.rs`와 `src/lib.rs`가 둘다 있어도 된다.

```console
% touch src/lib.rs
% cargo build          
   Compiling hello-world v0.1.0 (file:///home/dialogbox/works/rust/tutoials/hello-world)
    Finished dev [unoptimized + debuginfo] target(s) in 0.34s
% ls target/debug
build  deps  examples  hello-world  hello-world.d  incremental  libhello_world.d  libhello_world.rlib  native
```

보시다시피 실행파일과 library가 모두 생성되었다. 이때 생성된 라이브러리는 실행파일에 자동으로 link 되기 때문에 `src/main.rs`에는 프로그램 실행을 위한 최소한의 코드만 두고 나머지는 library로 분리 시키는 것이 일반적이다.

실행파일의 소스가 여러개인 경우 `src/bin/*.rs`에 둘 수 있다. 자세한 내용은 [Cargo Guild]의 [The Manifest Format]을 참고하자.

#### `bin`이 여러개인 경우

실행 파일이 여러개인 경우 `[[bin]]` section을 여러개 추가할 수 있다.

**Note:** 이 경우 더이상 `src/bin/*.rs`가 자동으로 실행파일로 컴파일 되지 않는다. 즉, `[[bin]]`을 지정한 경우 생성하고자 하는 실행파일의 소스를 직접 지정해 줘야 한다.
{: .notice--warning}

지금 단계에서 이런 구성은 필요하지 않으므로 일단은 넘어가자.

#### TL;DR

* `[dependencies]`에 필요한 외부 crate를 추가할 수 있다.
* `src/main.rs`가 있으면 실행 파일이 만들어지고
* `src/lib.rs`가 있으면 library가 만들어진다.
* 둘다 있으면 실행파일을 만들면서 로직들을 library에 분리해 둘 수 있다.

지금은 이 정도만 기억하고 넘어가자.

### Tests

Cargo는 test 코드를 실행하기 위한 기능이 포함되어 있다. 다음과 같이 테스트 코드를 추가해 보자.

* `src/lib.rs`
  ```rust
  #[cfg(test)]
  mod tests {
      #[test]
      fn it_works() {
          assert_eq!(2 + 2, 4);
      }
  }
  ```

`mod tests`는 tests라는 모듈을 정의하는 것이고, `#[cfg(test)]`는 이 모듈이 test 코드를 컴파일 할때만 포함되도록 정의하는 구문이다. 이 구문은 빠져도 테스트 실행에는 문제가 없으나 불필요한 코드가 최종 바이너리에 포함되게 된다.

`#[test]`가 test case를 정의하는 구문이다. 아무 함수에나 이 구문을 붙이면 `cargo test` 명령으로 실행 가능하다.

이제 테스트를 실행해 보자.

```console
% cargo test
    Finished dev [unoptimized + debuginfo] target(s) in 0.02s
     Running target/debug/deps/hello_world-328db630ba545801

running 1 test
test tests::it_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out

     Running target/debug/deps/hello_world-06e8284c276fb112

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out

   Doc-tests hello-world

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```

그냥 `cargo test`라고 실행하면 모든 테스트를 수행하며 다음과 같이 module 이름을 지정하거나 test 함수 이름을 지정할 수도 있다.

```console
% cargo test tests
% cargo test tests::it_works
% cargo test it_works
```

테스트 이름은 일부만 지정하면 해당 이름이 포함된 모든 테스트를 실행한다.

```console
% cargo test tests::it_
% cargo test sts::it_wo
```

이제 테스트가 실패하도록 수정하고 다시 실행해 보자.

* `src/lib.rs`
  ```rust
  #[cfg(test)]
  mod tests {
      #[test]
      fn it_works() {
          assert_eq!(2 + 2, 5);
      }
  }
  ```

다음과 같이 상세한 리포트가 출력된다.

```console
running 1 test
test tests::it_works ... FAILED

failures:

---- tests::it_works stdout ----
thread 'tests::it_works' panicked at 'assertion failed: `(left == right)`
  left: `4`,
 right: `5`', src/lib.rs:5:9
note: Run with `RUST_BACKTRACE=1` for a backtrace.


failures:
    tests::it_works

test result: FAILED. 0 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out
```

### 함수 만들어 보기

이제 마지막으로 간단한 함수 하나를 만들고 테스트 해 보자.

앞서 실패하는 테스트는 다시 원래대로 되돌리고, 다음과 같이 테스트 케이스를 추가해 보자.

```rust
#[test]
fn average_should_work() {
    assert_eq!(average(2, 2), 2.0);
    assert_eq!(average(2, 3), 2.5);
}
```

`average()` 함수가 없으니 당연히 에러가 발생한다.

```console
% cargo test average_should_work                                                                        hello-world [master] ✗
   Compiling hello-world v0.1.0 (file:///Users/dialogbox/works/rust/tut/hello-world)
error[E0425]: cannot find function `average` in this scope
  --> src/lib.rs:16:20
   |
16 |         assert_eq!(average(2, 2), 2.0);
   |                    ^^^^^^^ not found in this scope

error[E0425]: cannot find function `average` in this scope
  --> src/lib.rs:17:20
   |
17 |         assert_eq!(average(2, 3), 2.5);
   |                    ^^^^^^^ not found in this scope

error: aborting due to 2 previous errors

For more information about this error, try `rustc --explain E0425`.
error: Could not compile `hello-world`.

To learn more, run the command again with --verbose.
```

이제 `average()` 함수를 구현해 보자. 이 코드는 테스트 코드가 아니기 때문에 `mod test` 외부에 추가해야 한다.

```rust
fn average(a: i64, b: i64) -> f64 {
    (a + b) as f64 / 2.0
}
```

하지만 여전히 애러가 발생한다.

```console
...생략
error[E0425]: cannot find function `average` in this scope
  --> src/lib.rs:16:20
   |
16 |         assert_eq!(average(2, 2), 2.0);
   |                    ^^^^^^^ not found in this scope
help: possible candidate is found in another module, you can import it into scope
   |
1  | use average;
   |
...생략
```

에러 메시지에 힌트가 들어있다. 우리가 추가한 함수는 `tests` 모듈에 있지 않기 때문에 import를 해 줘야 한다.

모듈 이름을 명시적으로 지정해서 import 할수도 있지만 워낙 자주 사용하는 구문이기 때문에 다음과 같이도 쓸 수 있다.

```rust
use super::*;
```

전체 코드는 이제 다음과 같다.

```rust
fn average(a: i64, b: i64) -> f64 {
    (a + b) as f64 / 2.0
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }

    #[test]
    fn average_should_work() {
        assert_eq!(average(2, 2), 2.0);
        assert_eq!(average(2, 3), 2.5);
    }
}
```

이제 다시 실행해 보면 정상적으로 실행 된다.

## 마무리

이번 글에서는 Cargo를 이용해서 project를 생성하고 코딩을 시작하기 위한 가장 기본적인 내용을 정리해 보았다.
다음번에는 모듈을 이용해 코드를 구조화 하는 방법과 외부 crate를 참조하는 방법을 살펴 보고 간단한 CLI 프로그램을 만들어 볼까 한다.

[Cargo Guide]: https://doc.rust-lang.org/cargo/guide/
[The Manifest Format]: https://doc.rust-lang.org/cargo/reference/manifest.html#the-project-layout
[Crate Registry]: https://crates.io/
[semver requirements]: https://github.com/steveklabnik/semver#requirements
