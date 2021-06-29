# HTML

- 웹 페이지 기술을 위한 마크업 언어

- ###### <!DOCTYPE html>으로 반드시 문서의 형식을 지정하여야 함

- <html>...</html>에 내용들을 기술한다

- <head>...</head>에는 title, 외부 파일 참조, 메타데이터 설정 등이 위치하며 브라우저에 표시되지 않는다

- <body>...<body>에 위치한 내용들이 웹 브라우저에 표시된다

  

## 요소

<p>Hello</p>

 HTML  문서는 시작태그와 종료태그 사이의 콘텐츠로 구성된다.



## 속성

###### <img src="C:\apps\web\html.png">

요소는 속성을 가질 수 있으며 요소의 추가적 정보(이미지 파일의 경로, 크기 등)등을 제공한다

위에서의 src는 속성명, 뒤의 "html.png"는 속성값이다

속성은 시작 태그에 위치해야 하면 이름과 값의 쌍을 이룬다



## 주석

<!-- 주석 내용 -->

코드를 설명하기 위해 사용되며 브라우저에 표시되지 않는다.



## Tag

1. ###### <!DOCTYPE html> : 문서 형식 정의 태그

2. ###### <html> : 전체 문서를 감싸는 태그, 하나만 존재하며 html 외부에 DOCTYPE 를 제외한 태그 불가

3. ###### <head> : 문서에 대한 정보를 나타내는 부분, 외부 소스를 참조해야 할 경우 사용, 하나만 존재

4. ###### <body> : 실제적으로 보여지는 부분, 하나만 존재

   

### head Tag

1. ###### <title> : 문서의 제목 정의, 브라우저의 탭에 표시

2. ###### <style> : 문서의 style 정보를 정의

3. ###### <link> : 외부 리소스 와의 연계 정보 정의, 외부 CSS파일 연계시 사용

4. ###### <script> : 데이터와 실행 가능한 코드를 문서에 포함할 때 사용, 주로 JavaScript코드와 함께 사용

   ######  				           src 속성을 사용하여 외부 JavaScript 파일 로드 가능

5. ###### <meta> : description, keyword, author, 기타 메타데이터 정의에 사용

   ######  			        메타데이터는 브라우저, 검색엔진 등에 의해 사용됨

   ######     			        charset 속성은 브라우저가 사용할 문자 셋 정의

- ###### <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript"> : 검색엔진의  최적화를 위해 사용할 keyword 정의

- ###### <meta name="description" content="Web tutorial on HTML and CSS"> : 웹 페이지 설명 정의

- ###### <meta name="author" content="Name"> : 저자 명시

- ###### <meta http-equiv="refresh" content="30"> : 새로고침 시간 정의

  

### body Tag

1. Heading Tag : 제목 태그

   - 제목을 나타날 때 사용하는 태그로 h1~h6태그가 존재

2. Text Tag : 글자 태그

   1. 굵은 글씨

      - <p style = 'font-weight:bold'>style bold<p>

      - <b>b태그</b>

      - <strong>strong  태그</strong>

   2. Italic

      - <p style = 'font-style:italic'>style italic<p>

      - <i>i태그</i>

      - <em>em 태그</em>

   3. 작은 글씨

      - <small>Small</small>

   4. 하이라이트 효과

      - <mark>하이라이트</mark>효과

3. p Tag : 단락을 지정하는 태그로 본문 내용에서 주로 사용

4. br Tag : 강제 줄바꿈 지정, 종료태그를 사용하지 않음, 연속적 사용 가능

5. hr Tag : 수평줄 삽입

   <hr>

6. blockquote Tag : 긴 인용문 블록 지정

   <blockquote>태그안의 요소를 들여쓰기 형식으로 표현</blockquote>



### Hyperlink

1. href 속성

   - 이동하고자 하는 경로/파일의 위치 를 값으로 받는다

     <p><a href = "http://www.google.com">Google</a></p>

2. 디렉토리

   | 루트 디렉토리 |     파일 시스템 계층 최상위 디렉토리     |        C:\         |
   | :-----------: | :--------------------------------------: | :----------------: |
   |  홈 디렉토리  | 시스템의 사용자에게 할당된 개별 디렉토리 | C:\Users\\{계정명} |
   | 작업 디렉토리 |     작업 중인 파일이 위치한 디렉토리     |         ./         |
   | 부모 디렉토리 |      작업 디렉토리의 부모 디렉토리       |        ../         |

3. 파일의 경로

   | 절대경로 | 현재 작업 디렉토리와 관계없이<br>특정 파일의 절대적인 위치 지정 | http://www.google.com <br>c:\apps\01.html |
   | :------: | :----------------------------------------------------------: | :---------------------------------------: |
   | 상대경로 | 현재 작업 디렉토리를 기준으로<br>특정 파일의 상대적인 위치 지정 |  ./index.thml <br> ../route/second.html   |

4. href 속성에서 사용 가능한 값

   | 절대 URL            | 웹사이트의 URL (http://www.google.com)            |
   | ------------------- | ------------------------------------------------- |
   | 상대 URL            | 자신의 위치를 기준으로 한 대상 URL (./index.html) |
   | Fragment identifier | 페이지 내의 특정 id 요소에 대한 링크 (#{id값})    |
   | 메일                | mailto:                                           |
   | script              | javascript:alert('test')                          |



### list Tag

1. 비 순서형 리스트

   <!DOCTYPE html>
       <html>
           <body>
               <ul>
                   <li>아메리카노</li>
                   <li>카페라떼</li>
                   <li>카페모카</li>
               </ul>
           </body>
   	</html>
   </!doctype>

2. 순서형 리스트

   <!DOCTYPE html>
       <html>
           <body>
               <ol>
                   <li>아메리카노</li>
                   <li>카페라떼</li>
                   <li>카페모카</li>
               </ol>
           </body>
   	</html>
   </!doctype>

3. 순서형 리스트 type ( typora에서는 지원하지 않는것 같다 )

   | "1"  |   숫자(기본)    |
   | :--: | :-------------: |
   | "A"  |  대문자 알파벳  |
   | "a"  |  소문자 알파벳  |
   | "I"  | 대문자 로마숫자 |
   | "i"  | 소문자 로마숫자 |

   

   <!DOCTYPE html>
       <html>
           <body>
               <ol type="I">
                   <li>아메리카노</li>
                   <li>카페라떼</li>
                   <li>카페모카</li>
               </ol>
           </body>
   	</html>
   </!doctype>



### table

<!DOCTYPE html>
    <html>
        <body>
            <table border = "1">
                <tr>
                    <th>태그</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>table</td>
                    <td>표를 감싸는 태그</td>
                </tr>
                <tr>
                    <td>tr</td>
                    <td>표의 행을 나타내는 태그</td>
                </tr>
                <tr>
                    <td>th</td>
                    <td>표의 열을 나타내는 태그 중 제목을 표현하는 태그</td>
                </tr>
                <tr>
                    <td>td</td>
                    <td>표의 열을 나타내는 일반 태그</td>
                </tr>
            </table>
        </body>
	</html>
</!doctype>


![image-20210628113331783](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210628113331783.png)

- table 속성

  | border  | 테두리 두께 지정 (주로 CSS에서 사용) |
  | :-----: | :----------------------------------: |
  | rowspan |     해당하는 셀의 행의 수를 지정     |
  | colspan |     해당하는 셀의 열의 수를 지정     |

  

### image

1. HTML img tag : 웹 페이지에 이미지를 삽입하는 경우 img tag 를 사용한다.

2. img 속성

   |  src   |           이미지 파일의 경로            |
   | :----: | :-------------------------------------: |
   |  alt   | 이미지 파일이 없을 경우 나타나는 메세지 |
   | width  |              이미지의 너비              |
   | height |              이미지의 높이              |

   <!DOCTYPE html>
       <html>
           <body>
               <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20151021_61%2Fgonggamcom_14454090756396FPUJ_JPEG%2F%25C4%25B8%25C3%25B3.JPG&type=a340" width="100">
               <img src=".bitcoin2.png" width="100" alt="이미지가 없습니다">
           </body>
   	</html>
   </!doctype>



### form

- 유저가 입력한 데이터를 수집하기 위하여 사용
- input, textarea, button, select, checkbox, radiobutton,, submit button 등

1. from 속성

   - action : 입력 데이터가 전송될 URL 지정
   - method : 입력 데이터 전달 방식 지정 ( get / post )

2. get

   - 전송 URL에 입력 데이터를 쿼리스트링 형식으로 보내는 방식
   - URL바로 뒤에 '?'을 통하여 데이터의 시작을 알리고 'key=value' 형태의 데이터 추가
   - URL에 전송 데이터가 노출되기 때문에 보안에 문제가 될 수 있으며, 전송 가능한 데이터의 한계 존재 ( 최대 255자 )

3. post

   - get 형식과 다르게 request body에 데이터를 담아 보내는 방식
   - URL에 전송 데이터가 노출되지 않아 보안적으로는 뛰어나나 get 형식에 비해 속도가 느림

4. input

   - 사용자로부터 데이터를 입력받기 위해 사용되는 태그
   - form 태그 내에 존재하여야 입력 데이터 전송 가능
   - 서버에 전송되는 데이터는 name이라는 속성을 키로 value 속성을 값으로 하여 'key=value' 형태로 전송

   |  button  |       버튼 생성       |
   | :------: | :-------------------: |
   | Checkbox |     Checkbox생성      |
   |  Color   |    색상 선택 생성     |
   |   Date   | 날짜 (연,월,일) 생성  |
   |  Email   |  이메일 입력 폼 생성  |
   |   File   |   파일 선택 폼 생성   |
   |  Image   | 이미지로 된 버튼 생성 |
   |  Month   |     월 선택 생성      |
   |  Number  |    숫자 입력 생성     |
   | Password |  비밀번호 입력 생성   |
   |  Radio   |    Radio 버튼 생성    |
   |  Range   |    범위 선택 생성     |

   | Reset  | 초기화 버튼 생성   |
   | ------ | ------------------ |
   | Search | 검색어 입력 생성   |
   | Submit | 제출 버튼 생성     |
   | Tel    | 전화번호 입력 생성 |
   | Text   | 텍스트 입력 생성   |
   | Time   | 시간 선택 생성     |
   | url    | url 입력 생성      |
   | Week   | 주 선택 생성       |

<!DOCTYPE html>
    <html>
        <body>
            <h3>button</h3>
            <input type="button" value="click" onclick="alert('button click')">
            <br>
            <h3>checkbox</h3>
            <input type="checkbox" name="coffee1" value="coffee1" checked>아메리카노
            <input type="checkbox" name="coffee2" value="coffee2" checked>카페라떼
            <input type="checkbox" name="coffee3" value="coffee3" checked>카페모카
            <br>
            <h3>date</h3>
            <input type="date" name="date">
            <br>
            <h3>email</h3>
            <input type="email" name="email">
            <br>
            <h3>file</h3>
            <input type="file" name="upload">
            <br>
            <h3>number</h3>
            <input type="number" name="num" min="2" max="8" step="2" value="2">
            <br>
            <h3>password</h3>
            <input type="password" name="pwd">
            <br>
            <h3>radio</h3>
            <input type="radio" name="gender" value="male" checked>남자
            <input type="radio" name="gender" value="female">여자
            <br>
            <h3>submit</h3>
            <input type="submit" value="submit">
            <br>
            <h3>text</h3>
            <input type="text" name="text" value="text">
            <br>
            <h3>time</h3>
            <input type="time" name="time">
            <br>
        </body>
	</html>
</!doctype>




### 그 외의 tag

HTML Tag 사이트

- http://www.w3schools.com/
- http://tcpschool.com/html-tags/intro

### select

- 여러 개의 리스트 중 여러 개의 아이템을 선택할 때 사용된다.

- 서버에 전송되는 데이터는 select 요소의 name을 속성 키 값으로, option 요소의 value를 key 값으로 하여  key=value 형태로 전송

  |  select  |       select 생성        |
  | :------: | :----------------------: |
  |  option  |       option 생성        |
  | optgroup | option을 그룹화하여 표시 |

  <!DOCTYPE html>
      <html>
          <body>
              <select name="cafe">
                  <optgroup label="coffee">
                  	<option value="americano" selected>아메리카노</option>
                      <option value="latte" selected>카페라떼</option>
                      <option value="moka" selected>카페모카</option>
                  </optgroup>
                  <optgroup label="Non-coffee">
                  	<option value="greentea" selected>녹차</option>
                      <option value="choco" selected>핫초코</option>
                      <option value="lemonade" selected>레몬에이드</option>
                  </optgroup>
              </select>
          </body>
  	</html>
  </!doctype>

