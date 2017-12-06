Task:

Do the todos list app with time tracking based on React and Flux (Redux)

Done:
  Based functionality:
    - user can add todo
    - user can delete todo
    - user can mark todo as done
    - user can start/stop timer for a todo; started timer means user is working with todo
    - user can not work with multiple todos at the same time
    - user can see time spent for each todo

Planned:
  Special Feature with drag and drop todos in the list changing the priority

For russian speakers:
    Базовый​ ​функционал:
    ■ аутентификация​ ​и​ ​авторизация​ ​не​ ​требуется
    ■ пользователь​ ​должен​ ​иметь​ ​возможность​ ​добавить​ ​задачу
    ■ пользователь​ ​должен​ ​иметь​ ​возможность​ ​отметить​ ​задачу,​ ​как выполненная
    ■ пользователь​ ​должен​ ​иметь​ ​возможность​ ​удалить​ ​задачу
    ■ пользователь​ ​должен​ ​иметь​ ​возможность​ ​включить/выключить таймер​ ​для​ ​задачи,​ ​тем​ ​самым​ ​показывая,​ ​что​ ​он​ ​начал​ ​над​ ​ней
    работать.​ ​Он​ ​может​ ​работать​ ​только​ ​над​ ​одной​ ​задачей​ ​одновременно.
    ■ пользователь​ ​должен​ ​иметь​ ​возможность​ ​увидеть,​ ​сколько​ ​времени​ ​он потратил​ ​на​ ​задачу
    ■ упаковать​ ​вашу​ ​страничку​ ​в​ ​Electron​,​ ​чтобы​ ​вышло​ ​приложение​ ​на десктоп.

    Planned:
    ■ Special​ ​feature​ ​(большой​ ​плюс​ ​в​ ​рейтинг):​ ​ ​пользователь​ ​должен​ ​иметь
    возможность​ ​изменить​ ​приоритет​ ​задачи​ ​с​ ​помощью​ ​drag-and-drop.
    Неуточненные​ ​детали​ ​реализуются​ ​по​ ​усмотрению​ ​разработчика.

To deploy:
  git clone https://github.com/TexxUkr/Tasks.git
  cd Tasks
  yarn install

For dev tests with webpack sev server:
  yarn dev-server
  open 127.0.0.1:8080 in a browser on the host

For dev tests with node js express:
  yarn build:dev 
  yarn start 
  open 127.0.0.1:3000 

For prod tests with node js express:
  yarn build:prod 
  yarn start 
  open 127.0.0.1:3000 

For tests with electron:
  yarn build:prod OR yarn build:dev
  yarn electron

For build a package with electron:
  yarn build:prod OR yarn build:dev
  yarn electron-dist
  package will be located in ./dist folder

For block/components testing please see/add/modify files under ./test folder and use yart test

enjoy
