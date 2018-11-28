---
title: "Hello WebAssembly!"
description: "이 글에서는 WebAssembly와 wasm-pack의 사용법에 대해 간단히 알아본다."
categories: quickstart
tags: [rust, tutorial, webassembly, wasm, wasm-pack]
---

이 글에서는 Node.js나 web application에서 rust를 활용할 수 있는 방법으로 wasm-pack을 이용한 WebAssembly node.js module에 대해 간단히 알아본다.

## WebAssembly?

WebAssembly(줄여서 wasm)는 web browser 내부에서 실행되기 위한 새로운 cross platform assembly/binary format으로 대부분의 platform에서 native 코드와 동일한 수준의 성능을 내는 것을 목표로 하고 있다. WebAssembly 자체에 대한 자세한 설명은 이 글의 범위를 넘어서기 때문에 간단한 소개는 이 정도로 마치고, 자세한 내용은 [WebAssembly 사이트]나 [MDN WebAssembly]에서 찾을 수 있다.

참고로 [WebAssembly 사이트]에 있는 [WebAssembly Demo]의 경우 wasm으로 compile된 Unity engine 예제로 순수하게 web browser에서 돌아간다.

또 다른 예제로 [Epic Zen Garden]은 Unreal Engine 4로 되어 있으며 WebAssembly와 WebGL 2.0으로 되어 있다.

## wasm-pack

wasm은 직접 assembly를 코딩해서 만들 수 도 있지만 그런 식의 작업은 한계가 있기 때문에 대부분 각 언어별 wasm compiler backend를 통해서 만들게 된다. 즉, C/C++과 같은 언어로 코딩하고 컴파일을 하면 wasm binary가 생성되는 것인데, wasm의 특성상 GC등의 runtime이 없는 low level 언어가 주로 사용된다.

Runtime이 없는 low level언어라는 특성과 WebAssembly에 적극적인 mozilla의 영향으로 rust 커뮤니티 역시 wasm target에 많은 관심을 가지고 있으며 오늘 소개할 `wasm-pack` 을 사용하면 매우 간단하게 wasm module을 생성 할 수 있다.

Rust code를 wasm target으로 compile하는 것은 매우 쉽다. `rustup`을 통해 target을 설치하면 되는데 아마 많은 platform에서 기본적으로 설치가 되어 있다.

```console
$ rustup target list
...
wasm32-unknown-unknown (installed)
x86_64-apple-darwin (default)
...
```

즉 단순히 cross-platform compile로 wasm target의 binary를 생성하기만 하면 된다.

하지만 실제 유용한 코드를 만들기 위해서는 훨씬 복잡한 작업이 필요한데, 대표적으로 web browser(또는 node.js engine)과의 interaction을 들 수 있다. 예를들어, Rust 프로그램에서 javascript function을 호출한다던가, DOM 객체에 접근해야 할 경우 어떻게 처리할 것인가? 그 반대의 경우도 마찬가지다.

또 이렇게 만들어진 wasm code를 npm module 등으로 감싸고 javascript code에서 쉽게 사용할 수 있도록 하는 것도 손이 많이 가는 과정이다.

이런 과정을 자동화 하기 위한 모듈들이 [wasm-bindgen]과 [wasm-pack]으로, `wasm-bindgen`은 Rust <-> JavaScript간의 interaction을 처리하기 위한 crate이며, `wasm-pack`은 wasm project 생성부터 build, test, packaging을 자동화 해 주는 툴이다.

### 설치

`wasm-pack`은 rust 1.30.0 이상이 필요하다. Rust가 설치되어 있다면 다음 명령 한줄로 바로 설치가 된다.

```console
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

`wasm-pack`으로 project를 생성하는 방법은 여러가지가 있지만 template을 통해 생성하는 방법을 사용하려면 다음과 같이 `cargo-generate`를 설치 해줘야 한다.

```console
cargo install cargo-generate
```ㄴ

## 예제 프로그램

### Hello WASM

가장 기본적인 hello world 프로그램을 만들어 보자.

#### Project 생성

앞서 `cargo-generate`를 설치 했다면 다음 명령으로 project를 생성 할 수 있다.

```console
cargo generate --git https://github.com/rustwasm/wasm-pack-template
```

Project 이름에는 `hello-wasm-pack`을 입력하자.

```console
$ cargo generate --git https://github.com/rustwasm/wasm-pack-template
🤷  Project Name: hello-wasm-pack
🔧   Creating project called `hello-wasm-pack`...
The given paths are neither files nor directories! "~/work/rust/hello-wasm-pack/.genignore"
✨   Done! New project created ~/work/rust/hello-wasm-pack
$ cd cd hello-wasm-pack
$ tree
.
├── Cargo.toml
├── LICENSE_APACHE
├── LICENSE_MIT
├── README.md
├── src
│   ├── lib.rs
│   └── utils.rs
└── tests
    └── web.rs

2 directories, 7 files
```

`lib.rs`를 열어 보면 이미 template code가 생성되어 있는 것을 볼 수 있다.

```rust
extern crate cfg_if;
extern crate wasm_bindgen;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, hello-wasm-pack!");
}
```

이 코드는 `wasm_bindgen`을 통해 javascript의 `alert()` function을 import하고 이 function을 호출하는 `greet()` function을 define하고 있다.

여기서는 node.js를 target으로 하고 있기 때문에 이 코드 대신 다음과 같이 변경 해 보자.

```rust
extern crate cfg_if;
extern crate wasm_bindgen;
extern crate web_sys;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    web_sys::console::log_1(&"Hello, hello-wasm-pack!".into());
}
```

`web_sys` crate은 `wasm-bindgen`의 sub crate으로 web browser의 각종 API에 대한 wrapper를 제공한다. 이 외에도 순수 ECMAScript의 API에 대한 binding을 위한 `js_sys` crate은 별도로 분리되어 있다. 여기서는 익숙한 `console.log()`를 사용해서 message를 출력하고 있다.

이제 `Cargo.toml`을 열어서 맨 마지막에 다음과 같이 `web-sys` crate을 추가해 준다.

```toml
[dependencies.web-sys]
version = "0.3"
features = [ "console" ]
```

#### Build

이제 build 해 보자. 참고로 `--target nodejs`를 지정하지 않으면 기본적으로 web browser용으로 build 된다.

```console
wasm-pack build --target nodejs
```

```console
$ wasm-pack build --target=nodejs

  [1/9] 🦀  Checking `rustc` version...
  [2/9] 🔧  Checking crate configuration...
  [3/9] 🎯  Adding WASM target...
  info: component 'rust-std' for target 'wasm32-unknown-unknown' is up to date
  [4/9] 🌀  Compiling to WASM...
     Compiling proc-macro2 v0.4.24
     Compiling unicode-xid v0.1.0
     Compiling wasm-bindgen-shared v0.2.28
     Compiling cfg-if v0.1.6
     Compiling lazy_static v1.2.0
     Compiling wasm-bindgen v0.2.28
     Compiling log v0.4.6
     Compiling quote v0.6.10
     Compiling syn v0.15.22
     Compiling wasm-bindgen-backend v0.2.28
     Compiling wasm-bindgen-macro-support v0.2.28
     Compiling wasm-bindgen-macro v0.2.28
     Compiling console_error_panic_hook v0.1.5
     Compiling hello-wasm-pack v0.1.0 (~/work/rust/hello-wasm-pack)
      Finished release [optimized] target(s) in 39.44s
  [5/9] 📂  Creating a pkg directory...
  [6/9] 📝  Writing a package.json...
  ℹ️   [INFO]: Optional fields missing from Cargo.toml: 'description', 'repository', and 'license'. These are not necessary, but recommended
  [7/9] 👯  Copying over your README...
  wasm-bindgen 0.2.28 (c85f1b74e)
  [8/9] ⬇️  wasm-bindgen already installed...
  [9/9] 🏃‍♀️  Running WASM-bindgen...
  ✨   Done in 39 seconds
| 📦   Your wasm pkg is ready to publish at "~/work/rust/hello-wasm-pack/pkg".
```

`./pkg`에 npm module이 생성되어 있고 다음과 같이 테스트해 볼 수 있다.

```console
$ node -e 'require("./pkg").greet()'
Hello, hello-wasm-pack!
```

### 데이터 타입과 JsValue

앞의 예제에서 만든 `greet()`는 parameter와 return 값이 없었다. 하지만 실제 응용에서는 이 둘의 처리가 매우 중요한데 이 경우에는 어떻게 처리해야 할까?

이 역시 [wasm-bindgen 문서의 3.13장]에 잘 정리되어 있다. 기본적인 primitive type들은 대부분 그대로 사용하면 알아서 변환 처리를 해 주며, 복잡한 type이나 javascript object의 경우 [`JsValue`]를 사용하면 된다.

역시나 자세한 내용은 기본적인 소개를 위한 이 글의 목적을 넘어서기 때문에 더 이상 다루지 않는다.

본격적으로 공부해 보고 싶다면 [wasm-bindgen] 문서와 특히 [The Rust and WebAssembly Book]에 아주 잘 정리된 tutorial이 있으니 참고하기 바란다.

## 마무리

wasm으로 만들면 매우 고성능의 모듈을 만들 수 있을 것 같으나, 막상 이렇게 무언가를 만들어 테스트 해 보면 대부분 javascript 보다 성능이 느린 경우가 많다. 이는 javascript engine이 wasm runtime을 호출할 때 생기는 overhead가 매우 크기 때문인데, 단순한 응용이라면 pure javascript가 훨씬 빠르다. 특히나 json parsing과 같이 javascript engine에 내장된 함수들의 경우 이미 극도로 최적화 된 C 코드로 되어 있어서 wasm을 사용해서 얻는 성능상의 이점은 없다고 봐야 한다.

아직 신생 기술이고 빠른 속도로 개발되고 있으니 앞으로 점차 개선 되어 갈 것이지만, 지금으로써는 앞의 demo site들 처럼 한번 호출되면 장시간 돌아가는 computation intensive한 작업의 경우 wasm으로 구현해 볼 만 하다고 본다.

하지만 어느 경우에도 실제 구현 전에 interface stub코드만 이라도 미리 만들어서 call overhead에 대해 미리 테스트 해 본 다음 시작하는게 불필요한 시행착오를 줄이는 길이라 생각한다.

이상으로 지금까지 `wasm-pack`(그리고 `wasm-bindgen`)에 대해 아주 간단하게 알아 보았다.

[WebAssembly 사이트]: https://webassembly.org/
[WebAssembly Demo]: https://webassembly.org/demo/
[MDN WebAssembly]: https://developer.mozilla.org/en-US/docs/WebAssembly
[Epic Zen Garden]: https://s3.amazonaws.com/mozilla-games/ZenGarden/EpicZenGarden.html
[wasm-pack]: https://rustwasm.github.io/wasm-pack/
[wasm-bindgen]: https://rustwasm.github.io/wasm-bindgen/
[The Rust and WebAssembly Book]: https://rustwasm.github.io/book
[wasm-bindgen 문서의 3.13장]: https://rustwasm.github.io/wasm-bindgen/reference/types.html
[`JsValue`]: https://rustwasm.github.io/wasm-bindgen/reference/types/jsvalue.html