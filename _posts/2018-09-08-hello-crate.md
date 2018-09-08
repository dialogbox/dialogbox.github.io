---
title: "Hello Crate!"
description: "이 글에서는 module 사용법과 외부 crate를 사용하는 방법을 알아보고 간단한 cli 프로그램을 만들어 본다."
categories: rust
tags: [rust, quickstart, cargo, tutorial]
---

이 글에서는 module 사용법과 외부 crate를 사용하는 방법을 알아보고 간단한 cli 프로그램을 만들어 본다.

## Modules

[이전 포스팅]에서는 다음과 같이 `lib.rs` 파일 하나에 모든 코드가 들어 있었다. 

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

아주 간단한 경우가 아니라면 `lib.rs` 파일 하나에 모든 코드를 담기에는 무리가 있다. 이 경우 namespace의 역할을 하는 여러 module로 코드들을 구조화 한다.

### `mod` block

이미 가장 간단한 방법은 살펴 보았다. 바로 `tests` module 인데, 앞서 코드처럼 `mod` keyword를 사용해 정의한다.

```rust
mod mymodule {
  ...
}

mod tests {
  ...
}
```

앞의 프로그램에서 `average()`를 `mymodule`로 옮겨 보자.

```rust
mod mymodule {
  fn average(a: i64, b: i64) -> f64 {
    (a + b) as f64 / 2.0
  }
}
...생략
```

이제 test에서 `use super::*;` 만으로는 사용이 불가능하다. `use super::*;` 명력으로 `mod mymodule` 자체는 포함이 되었지만 `average()` 함수는 `mod mymodule` 내부에 있기 때문에 다음과 같이 호출해야 한다.

```rust
assert_eq!(mymodule::average(2, 2), 2.0);
assert_eq!(mymodule::average(2, 3), 2.5);
```

또는 다음 명령으로 `average()`를 다시 현재 namespace에 가져와도 된다.

```rust
use mymodule::average;
```

하지만 실행해 보면 다음과 같이 에러가 발생한다.

```console
error[E0603]: function `average` is private
  --> src/lib.rs:19:20
   |
19 |         assert_eq!(mymodule::average(2, 2), 2.0);
   |                    ^^^^^^^^^^^^^^^^^
```

에러와 같이 `average` 함수는 private이기 때문이다. Rust에서 모든 함수와 모듈은 기본적으로 private이기 때문에 외부에서 사용할 수 없다. 외부에서 사용할 수 있도록 하려면 `pub` keyword를 추가해 준다.

이제 코드는 다음과 같다.

```rust
pub mod mymodule {
  pub fn average(a: i64, b: i64) -> f64 {
    (a + b) as f64 / 2.0
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn average_should_work() {
    assert_eq!(mymodule::average(2, 2), 2.0);
    assert_eq!(mymodule::average(2, 3), 2.5);
  }
}
```

### Module별 파일

`mod` block을 별도의 파일로 분리하려면 `[MODULE_NAME].rs` 파일을 생성하면 된다. 그리고 `mod` 구문은 block없이 이름만 명시한다.

위의 예제는 다음과 같이 다시 쓸 수 있다.

* `lib.rs`
  ```rust
  pub mod mymodule;

  #[cfg(test)]
  mod tests {
    use super::*;

    #[test]
    fn average_should_work() {
      assert_eq!(mymodule::average(2, 2), 2.0);
      assert_eq!(mymodule::average(2, 3), 2.5);
    }
  }
  ```
* `mymodule.rs`
  ```rust
  pub fn average(a: i64, b: i64) -> f64 {
    (a + b) as f64 / 2.0
  }
  ```

### Module별 directory

모듈이 아주 커진다면 모듈별로 파일 하나씩이 모자라게 된다.

이때 모듈 이름과 동일한 directory를 생성하고 `[MODULE_NAME]/mod.rs` 파일을 생성하면 해당 directory의 파일들은 해당 module로 인식된다. 이때 `mod.rs`는 최상위의 `lib.rs`와 동일한 역할을 한다고 생각하면 된다.

앞선 예제는 이제 다음과 같이 수정이 가능하다.

* `lib.rs`: 변동 없음
* `mymodule.rs` -> `mymodule/mod.rs`

`mod.rs`에 동일한 방식으로 다른 module을 추가해 나갈 수 있다.

## 외부 Crate 사용

[이전 포스팅]에서 project `clap` crate를 추가했었다. 이렇게 추가된 외부 crate를 사용하기 위해서는 최상위 module에 다음과 같이 외부 crate를 선언해 줘야 한다.

* `lib.rs`
  ```rust
  extern crate clap;
  ```

이제 이 crate의 module들과 함수들을 가져다 쓸 수 있다.

## 예제 CLI 프로그램

앞서 project에 추가한 `clap` crate을 이용해 간단한 CLI 프로그램을 만들어 보자. `clap`의 자세한 사용방법은 [clap 문서]에서 확인할 수 있다.

**Note:** [Docs.rs] 사이트는 자동 생성된 문서들을 찾아볼 수 있는 사이트인데, project에 추가한 crate의 문서는 `cargo doc --open` 명령으로 offline에서도 볼 수 있다. 이 명령을 사용하면 우리가 만든 crate의 문서도 확인할 수 있다.
{: .notice}

먼저 새로운 project를 생성하고 `Cargo.toml`에 dependency를 추가하자.

```console
% cargo init rcat
```

```toml
[dependencies]
clap = "2.32.0"
```

이제 `main.rs` 파일에 다음과 같이 입력한다.

```rust
extern crate clap;
use clap::App;

fn main() {
    App::new("rcat")
        .version("1.0.0")
        .about("simple cat clone")
        .author("Jason Kim")
        .get_matches();
}
```

첫줄에서 앞서 설명한 것과 같이 `clap` crate을 추가해 줬다. 이제 `use clap::App;`과 같이 `clap` crate에 포함된 모듈들을 불려올 수 있다.

```rust
    App::new("rcat")
        .version("1.0.0")
        .about("simple cat clone")
        .author("Jason Kim")
        .get_matches();
```

이 부분은 `crate::App`을 사용해 CLI 프로그램을 선언한 것이다. 자세한 내용은 문서를 참조하고 일단 실행을 해 보자.

```console
% cargo build
    Finished dev [unoptimized + debuginfo] target(s) in 0.04s
% ./target/debug/rcat
% ./target/debug/rcat -h
rcat 1.0.0
Jason Kim
simple cat clone

USAGE:
    rcat

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information
% ./target/debug/rcat -V
rcat 1.0.0
```

이미 위에서 선언한 정보를 바탕으로 기본적인 CLI 인터페이스가 구현되어있다.

몇 가지 Argument를 추가해 보자.

```rust
extern crate clap;
use clap::{Arg, App};

fn main() {
    let matches = App::new("rcat")
        .version("1.0.0")
        .about("simple cat clone")
        .author("Jason Kim")
        .arg(Arg::with_name("upper")
            .short("U")
            .long("upper")
            .takes_value(false)
            .help("Makes the output to upper case"))
        .arg(Arg::with_name("INPUT")
            .help("Sets the input file to use")
            .required(true)
            .index(1))
        .get_matches();

    let upper = matches.is_present("upper");
    let input = matches.value_of("INPUT").expect("INPUT file must be specified");

    println!("Value for upper: {}", upper);
    println!("Value for INPUT: {}", input);
}
```

이제 `--upper` 또는 `-U` flag가 추가 된 것을 볼 수 있다.

```console
% cargo run -- src/main.rs -h
rcat 1.0.0
Jason Kim
simple cat clone

USAGE:
    rcat [FLAGS] <INPUT>

FLAGS:
    -h, --help       Prints help information
    -U, --upper      Makes the output to upper case
    -V, --version    Prints version information

ARGS:
    <INPUT>    Sets the input file to use
```

`cat` 명령어 처럼 파일을 읽어서 화면에 출력하는 코드는 다음과 같다.

```rust
extern crate clap;
use clap::{Arg, App};
use std::{io, fs};

fn main() {
    let matches = App::new("rcat")
        .version("1.0.0")
        .about("simple cat clone")
        .author("Jason Kim")
        .arg(Arg::with_name("upper")
            .short("U")
            .long("upper")
            .takes_value(false)
            .help("Makes the output to upper case"))
        .arg(Arg::with_name("INPUT")
            .help("Sets the input file to use")
            .required(true)
            .index(1))
        .get_matches();

    let upper = matches.is_present("upper");
    let input = matches.value_of("INPUT").expect("INPUT file must be specified");
    cat(input, upper).expect("Can not read file");
}

fn cat(path: &str, upper: bool) -> Result<(), io::Error> {
    let contents = fs::read_to_string(path)?;

    if upper {
        Ok(println!("{}", contents.to_uppercase()))
    } else {
        Ok(println!("{}", contents))
    }
}
```

## 마무리

이번 글에서는 module 구조와 외부 crate을 사용하는 방법을 설명했다. 이제 Rust로 프로그램을 작성할 기본적인 준비는 된 샘이다.
물론 시리즈의 서두에 이야기 한 것 처럼 Rust는 쉬운 언어가 아니기 때문에 더 깊이 들어가기 위해서는 알아야 할 것이 너무나도 많다.

그러나 일단은 환경을 구축하고 남들이 만든 crate을 하나씩 가져다 써보면서 공부할 수 있다면 좀더 쉽게 접근할 수 있으리라 생각한다.

[이전 포스팅]: {{ site.baseurl }}{% post_url 2018-09-01-hello-cargo %}
[Hello Cargo!]: {{ site.baseurl }}{% post_url 2018-09-01-hello-cargo %}
[Docs.rs]: https://docs.rs
[clap 문서]: https://docs.rs/clap/2.32.0/clap/