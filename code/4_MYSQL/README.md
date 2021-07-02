# DB : 데이터 베이스

- 통합하여 관리되는 데이터의 집합체

- 중복된 데이터를 제거하고, 자료를 구조화하여, 효율적인 처리를 할 수 있도록 관리

- 응용 프로그램과는 다른 별도의 미들웨어에 의해 관리

- 이를 관리하는 미들웨어를 DBMS(데이터베이스 관리 시스템)

  

## 특징

1. 사용자의 질의에 대해 즉각적인 처리 및 응답
2. 생성, 수정, 삭제를 통해 최신 데이터 유지
3. 원하는 데이터를 사용자들에게 동시 공유
4. 원하는 데이터를 주소가 아닌 내용에 따라 참조 가능
   (N번째 데이터가 아닌 key 값에 따를 구분 등)
5. 응용 프로그램과 데이터베이스는 독립되어,
   데이터의 논리적 구조와 응용 프로그램은 별도로 동작



## SQL

- Structured Query Language

- 데이터베이스에서 데이터를 정의, 조작, 제어하기 위해 사용하는 언어

- | 속성 |                             설명                             |            주요명령어            |
  | :--: | :----------------------------------------------------------: | :------------------------------: |
  | DDL  | 데이터베이스나 테이블 등을 생성, 삭제하거나 그 구조를 변경하기 위한 명령어 |       CREATE, ALTER, DROP        |
  | DML  | 데이터베이스에 저장된 데이터를 처리하거나 조회, 검색하기 위한 명령어 | INSERT,UPDATE, DELETE, SELECT 등 |
  | DCL  | 데이터베이스에 저장된 데이터를 관리하기 위해 데이터의 보안성 및 무결성 등을 제어하기 위한 명령어 |         GRANT, REVOKE 등         |



## MySQL 접속 (cmd)

- Local Server
  mysql -u 계정명 -p
  ex) mysql -u root -p

- 원격지에 접속
  mysql -h 호스트주소(ip) -P 포트번호 -u 계정명 -p
  ex) mysql -h 192.168.0.33 -P 13306 -u root -p

- 원격지의 특정 database에 접속
  mysql -h 호스트주소(ip) -P 포트번호 -u 계정명 -p 디비이름
  mysql -h 192.168.0.33 -P 13306 -u root -p userDB

  

## CREATE 문

- 새로운 데이터베이스 생성
  CREATE DATABASE "데이터베이스 이름";

- 새로운 데이터베이스 선택
  USE "데이터베이스 이름";

- 테이블 생성
  CREATE TABLE "테이블 이름"
  (
      필드이름1 필드타입1,
      필드이름2 피드타입2,
      ...

  );



### 데이터 필드 타입

|  유형  |     표현     | byte |                  표현 범위                   |       비고       |
| :----: | :----------: | :--: | :------------------------------------------: | :--------------: |
| 숫자형 | TINYINT[(M)] |  1   |            -128 ~ 127<br />0~255             |                  |
|        |   INT[(M)]   |  4   | -2147483648 ~ 2147483647<br />0 ~ 4294967295 |                  |
| 문자형 |   CHAR(M)    | 고정 |   1 ~ 255 까지 고정형, 남은 공간 공백채움    |                  |
|        |  VARCHAR(M)  | 가변 |   1 ~ 255 까지 가변길이, 문자길이 + 1byte    |                  |
|        |     TEXT     | 가변 |                    ~65535                    | 문자 데이터 저장 |



### 제약조건

- 데이터의 무결성을 지키기 위해 데이터를 입력받을 때 실행되는 검사 규칙
- CREATE문으로 테이블을 생성할 때, ALTER문으로 필드를 추가할 때도 설정 가능
- CREATE TABLE문에서 사용 가능한 제약조건
  - NOT NULL : 해당 필드 NULL 값 저장 불가
  - UNIQUE : 해당 필드의 값들이 같은 값 저장 불가
  - PRIMARY KEY : NOT NULL 과 UNIQUE의 제약 조건 모두 해당
  - FOREIGN KEY : 하나의 테이블을 다른 테이블에 의존시킴
  - DEFAULT : 해당 필드의 기본값을 설정
  - AUTO_INCREMENT : 해당 필드의 값을 1부터 시작하여 새로운 레코드가 추가될 때마다 1씩 증가된 값 저장
     AUTO_INCREMENT 키워드 다음에 = 을 사용해 시작 값을 변경 가능



## ALTER 문

- 데이터베이스 수정

  ALTER DATABASE 데이터베이스이름 CHARACTER = 문자집합이름
  ALTER DATABASE 데이터베이스이름 COLLATE = 콜레이션이름

- 테이블 수정

  ALTER TABLE 테이블이름 OPTION



### ALTER TABLE OPTION

1. ADD
   - ALTER TABLE 테이블이름 ADD 필드이름 필드타입;
2. DROP
   - ALTER TABLE 테이블이름 DROP 필드이름
3. MODIFY COLUMN
   - ALTER TABLE 테이블이름 MODIFY COLUMN 필드이름 필드타입



## DROP 문

- 데이터베이스나 테이블 삭제
  DROP DATABASE 데이터베이스이름
  DROP TABLE 테이블이름



## INSERT INTO 문

- 테이블에 새로운 값 추가
  INSERT INTO 테이블이름 (필드이름1,필드이름2, ...) VALUES (데이터값1,데이터값2, ...)
  INSERT INTO 테이블이름 VALUES (데이터값1,데이터값2, ...)
- 두번째 문법과 같이 사용할 경우, 테이블의 필드에 순서대로 자동 대입



## UPDATE  문

- 테이블의 내용 수정
  UPDATE 테이블이름 SET 필드이름1=데이터값1, 필드이름2=데이터값2, ... WHERE 필드이름=데이터값;
- WHERE절의 조건에 맞는 테이블의 값을 수정
- WHERE절이 없다면 테이블의 모든 값을 수정



## DELETE 문

- 테이블의 데이터 값을 삭제
  DELETE FROM 테이블이름 WHERE 필드이름 = 데이터값;
- WHERE 절에 만족하는 테이블의 값만 삭제
- UPDATE와 마찬가지로 WHERE 절이 없으면 테이블의 모든 데이터 삭제
- DROP 문과의 차이점 : DROP 문은 테이블을 삭제 / DELETE 문은  데이터만 삭제



## SELECT 문

- 테이블의 데이터를 선택
  SELECT 필드이름 FROM 테이블이름 [WHERE 조건식];
  SELECT * FROM 테이블이름
- 2번과 같이 필드이름에 *을 넣게되면 모든 필드 값의 데이터 선택



## WHERE 문

- SQL속에서 if 문과 같은 조건문을 사용할 수 있게해주는 것
  WHERE {COLUMN} = {VALUE};
- "=" 위치에 <>, !=, <, >, <=, >= 등의 비교연산사 사용 가능 (if문과 다른점은 == 이 아닌 = 을 사용)
  WHERE {COLUMN} IN (VALUE_LIST);
- 리스트에 없는 값을 선택할 땐  NOT IN  사용



## 그 외에 사용하는 쿼리

- JOIN
- LIMIT
- ORDER BY
- MySQL 함수들