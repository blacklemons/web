# CSS

- HTML이나 XML과 같은 구조화 된 문서를 화면 및 종이에 어떻게 렌더링 할 것인지를 정의하기 위한 언어

- HTML의 각 요소의 style( design, layout, etc... )을 정의

  

## 적용 방법

1. Link Style

   - 외부의 CSS 파일을 로드하는 방식
   - 밑의 예시에서는 외부 CSS 파일을 로드하지 못하여 작용 X

   <!DOCTYPE html>
       <html>
           <head>
   			<link rel="stylesheet" href="css/style.css">
           </head>
           <body>
               <h1>Hello World</h1>
               <p>This is a web page</p>
           </body>
   	</html>
   </!doctype>

2. Embedding Style

   - HTML 내부에 CSS을 포함시키는 방식

   <!DOCTYPE html>
       <html>
           <head>
   			<style>
                   /* h1 {color: red;} h1에 해당하는 글자색 변경이나 typora의 ## 전체에 작용하여 주석처리*/
                   /* p {background: aqua;} 본문 배경을 aqua로 지정하는 것인데 typora 전체에서 작용하여 주석처리*/ 
               </style>
           </head>
           <body>
               <h1>Hello World</h1>
               <p>This is a web page</p>
           </body>
   	</html>
   </!doctype>

3. Inline Style

   - HTML요소의 style에 CSS 기술

   <!DOCTYPE html>
       <html>
           <body>
               <!--<h1 style="color:red">Hello World</h1> typora 전체에 적용하기에 주석처리-->
               <h1>Hello World</h1>
               <!--<p style="background:aqua">This is a web page</p> typora 전체에 적용하기에 주석처리-->
               <p>This is a web page</p>
           </body>
   	</html>
   </!doctype>



## CSS 의 요소

​	p{ color : white; font-size : 12px; }

- 위의 예시에서 { p : 셀렉터 , color : 프로퍼티, white : 값 }

- 셀렉터는 HTML 요소를 지정

- 복수의 셀렉터를 지정하는 경우는 , 로 구분

  h1, p {color : white;}

  

## Selector

### *

- 문서 내의 모든 요소에 적용

  <!DOCTYPE html>
      <html>
          <head>
              <style>
                  /* * {color:blue;} typora 전체에 color를 blue로 바꾸어 주석처리*/
              </style>
          </head>
          <body>
              <h1>Hello World</h1>
              <p>This is a web page</p>
          </body>
  	</html>
  </!doctype>



### 태그명

- 지정된 태그명을 가지는 요소만 적용

  <!DOCTYPE html>
      <html>
          <head>
              <style>
                  /* p {color:blue;} typora 전체에 p의 color를 blue로 바꾸어 주석처리*/
              </style>
          </head>
          <body>
              <h1>Hello World</h1>
              <p>This is a web page</p>
          </body>
  	</html>
  </!doctype>



### #id 값

- id 속성 값과 일치하는 요소들에만 적용

- id 속성 값은 중복될 수 없는 unique한 값

  <!DOCTYPE html>
      <html>
          <head>
              <style>
                  #p1 {color:red; background:aqua;}
              </style>
          </head>
          <body>
              <h1>Hello World</h1>
              <p>This is a web page</p>
              <p id="p1">This is a web page1</p>
              <p id="p2">This is a web page2</p>
          </body>
  	</html>
  </!doctype>



### .class 값

- class 값이 일치하는 요소에 적용

  <!DOCTYPE html>
      <html>
          <head>
              <style>
                  .container{ color : red;}
              </style>
          </head>
          <body>
              <h1>Hello World</h1>
              <p>This is a web page</p>
              <div class="container">
                  <p id="p1">This is a web page1</p>
                  <p id="p2">This is a web page2</p>
              </div>
                  <p id="p3">This is a web page3</p>
          </body>
    </html>

- class 값을 이용한 셀렉터는 동시 여러개 지정 가능

  <!DOCTYPE html>
      <html>
          <head>
              <style>
                  .text-center {text-align:center;}
                  .text-large {font-size:200%;}
                  .text-red {color:red;}
                  .text-blue {color:blue;}
              </style>
          </head>
          <body>
              <h1>Hello World</h1>
              <p class="text-center">This is a web page1</p>
              <p class="text-large text-red">This is a web page2</p>
              <p class="text-center text-large text-red">This is a web page3</p>
              <p class="text-center text-large text-red text-blue">This is a web page4</p>
          </body>
    </html>

- 복합셀렉터

  <!DOCTYPE html>
      <html>
          <head>
  			<style>
                  /*div p {color:red;} 원래는 <div>tag 하위 요소의 <p>에만 적용되어야하는데 그렇지 않아 주석*/
              </style>
          </head>
          <body>
              <h1>Hello World</h1>
              <div>
                  <p>This is a web page1</p>
              </div>
              <p>This is a web page2</p>
          </body>
  	</html>
  </!doctype>



## CSS 크기 단위

- px : 절대값
- em, % : 상대값
- 대부분의 기본 폰트 사이즈 : 16px, 1em, 100%



### px

- 원 의미는 화소 1개의 크기

- 디바이스의 해상도에 따라 상대적인 크기를 가짐

- 대부분의 브라우저는 1px를 1/96의 절대 단위로 인식

  ![image-20210628163649952](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628163649952.png)![image-20210628163713143](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628163713143.png)



### %

- 지정된 사이즈의 상대적인 사이즈를 설정

  ![image-20210628164106254](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628164106254.png)![image-20210628164120520](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628164120520.png)



### em

- 배수의 단위로 된 상대 단위

- ![image-20210628164237519](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628164237519.png)![image-20210628164249945](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628164249945.png)

- 중첩된 자식 요소에 em을 지정하면 모든 자식 요소의 사이즈에 영향을 미치기에 주의 (%도 마찬가지)

  ![image-20210628164447553](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628164447553.png)![image-20210628164555948](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628164555948.png)

  

### rem

- 최상위 요소의 사이즈를 기준으로 하는 em

- r은 root를 의미

  ![image-20210628164658448](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628164658448.png)![image-20210628164714761](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628164714761.png)



## Viewpoint 단위

- 상대적인 단위로써 주로 반응형 웹에서 자주 사용

  |  vw  |         Viewpoint 너비의 1/100          |  너비가 1000px 라면 10px로 지정   |
  | :--: | :-------------------------------------: | :-------------------------------: |
  |  vh  |         Viewpoint 높이의 1/100          |    높이가 600px라면 6px로 지정    |
  | vmin | Viewpoint 너비, 높이 중 작은 쪽의 1/100 | 높이가 더 작기 때문에 6px로 지정  |
  | vmax |  Viewpoint 너비, 높이 중 큰 쪽의 1/100  | 너비가 더 크기 때문에 10px로 지정 |

  ![image-20210628165205311](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628165205311.png)![image-20210628165239343](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628165239343.png)![image-20210628165259295](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628165259295.png)



## 색상 표현 단위

|         HEX 코드(Hexadecimal Colors)         |       #000000       |
| :------------------------------------------: | :-----------------: |
|            RGB(Red, Green, Blue)             |   rgb(255,255,0)    |
| RGBA(Red, Green, Blue, Alpha (Alpha=투명도)) |  rgba(255,255,0,1)  |
|       HSL(Hue, Saturation, Lightness)        |   hsl(0,100%,25%)   |
|   HSLA(Hue, Saturation, Lightness, Alpha)    | hsla(60,100%,50%,1) |

![image-20210628165856261](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628165856261.png)![image-20210628165913985](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628165913985.png)



## Box 영역

- HTML 요소는 Box 형태의 영역을 가짐
- Box는 Content, Padding, Border, Margin으로 구성

| Content | 텍스트나 이미지 등 실제 내용이 위치하는 영역 |
| ------- | -------------------------------------------- |
| Border  | 테두리 영역                                  |
| Padding | Border 안쪽에 위치하는 내부 여백 영역        |
| Margin  | Border 바깥에 위치하는 외부 여백 영역        |

![image-20210628171236943](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628171236943.png)![image-20210628171253349](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628171253349.png)



## margin / padding 속성

- content 의 4개의 방향 (top, right, left, bottom)에 대한 지정 가능

  ![image-20210628172718274](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628172718274.png)![image-20210628172747450](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628172747450.png)

  |   지정 갯수   |          지정 방법           |                  지정 결과                   |
  | :-----------: | :--------------------------: | :------------------------------------------: |
  | 4개의 값 지정 | margin : 10px 20px 30px 40px | top:10px, right:20px, left:30px, bottom:40px |
  | 3개의 값 지정 |   margin : 10px 20px 30px    | top:10px, right:20px, left:20px, bottom:30px |
  | 2개의 값 지정 |      margin : 10px 20px      | top:10px, right:20px, left:20px, bottom:10px |
  | 1개의 값 지정 |        margin : 10px         | top:10px, right:10px, left:10px, bottom:10px |



## border

### border-style

- 테두리 선의 스타일 지정

- dotted, dashed, solid, double, groove, ridge, inset, outset

  ![image-20210628174017311](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628174017311.png)![image-20210628174028190](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628174028190.png)



### border-width

- 테두리 선의 두께 지정

- border-style이 지정 되어있어야 사용 가능

- default, thin, medium, thick, px, mix

  ![image-20210628174523112](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628174523112.png)![image-20210628174536194](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628174536194.png)



### border-color

- 테두리 선의 색 지정

- default, red, blue, mix, etc

  ![image-20210629092024369](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629092024369.png)![image-20210629092037806](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629092037806.png)



### border-radius

- 테두리 모서리 둥글게 표현

- 속성값으로 px, em, % 사용

  ![image-20210629092344488](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629092344488.png)![image-20210629092411841](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629092411841.png)

