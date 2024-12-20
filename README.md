# project_weather-open-api-widget / Виджет с прогнозом погоды

**Ссылка для просмотра проекта:** ***https://project-weather-open-api-widget.vercel.app/***

**Для запуска проекта (на своем устройстве в IDE) выполнить действия:**

&nbsp; __1.__ Клонировать репозиторий на свой ПК: 
```bash
git clone https://github.com/Ivan-ISS/project_weather-open-api-widget.git
```
&nbsp; __2.__ Поставить пакеты в корне проекта:
```bash
npm install
```
&nbsp; __3.__ Для запуска приложения в режиме development выполнить:
```bash
npm run dev
```

---

## Цель:
***Создать виджет с прогнозом погоды***

## Описание проекта
__Проект *Виджет с прогнозом погоды*__ - это виджет, который сообщает пользователю о погоду в его локации или любом другом населённом пункте.<br>

__Проект *Виджет с прогнозом погоды*__ представлен в виде приложения, которое позволяет:
- Получать информацию о погоде в любом городе по запросу (запрос вводится в поле *"Поиска"*);
- Получать информацию о погоде по текущей геолокации пользователя (кнопка *"Геолокация"*);
- Выбрать, на какой период получить и отобразить информацию о погоде: на текущее время или на ближайшие 5 дней.<br>

**Все данные о погоде собираются из OpenWeatherMap по API**
**Проект написан на React + TypeScript**

__Интерфейс приложения__ представлен элементами:
- *"Поле поиска"*, - поисковая строка для ввода города или населенного пункта;
- кнопка *"Поиск"* - при клике отправляется запрос на поиск информации о погоде;
- кнопка *"Геолокация"* - для получения текущей геолокации пользователя и выполнения запроса о погоде по текущей геолокации.<br>

## Технологии:
<img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white" alt="TS"/>&nbsp;
<img src="https://img.shields.io/badge/-REACT-000000?logo=React&logoColor=#00fff" alt="REACT"/>&nbsp;
<img src="https://img.shields.io/badge/HTML5-red?logo=html5&logoColor=white" alt="HTML5"/>&nbsp;
<img src="https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white" alt="CSS3"/>&nbsp;
<img src="https://img.shields.io/badge/-Sass-DB7093?logo=sass&logoColor=white" alt="SASS"/>&nbsp;

## В проекте реализованы функциональные требования:
&nbsp; :heavy_check_mark: Можно вводить вручную местоположение в строку поиска<br>
&nbsp; :heavy_check_mark: Можно получать текущую геопозицию пользователя<br>
&nbsp; :heavy_check_mark: По текущей геопозиции или вручную введенному местоположению можно получать информацию о погоде из OpenWeatherMap<br>
&nbsp; :heavy_check_mark: Можно получать 2 вида информации о погоде — прогноз на 5 дней или только на сегодня<br>

## В проекте реализованы технические требования:
&nbsp; :heavy_check_mark: Проект написан с помощью React<br>
&nbsp; :heavy_check_mark: Использован компонентный подход<br>
&nbsp; :heavy_check_mark: Использование осмысленных имен для всех компонентов, переменных и функций<br>
&nbsp; :heavy_check_mark: Для получения данных о погоде используется сторонний сервис OpenWeatherMap<br>
&nbsp; :heavy_check_mark: Отзывчивая и адаптивная верстка (десктоп, планшет и мобильные телефоны)<br>
&nbsp; :heavy_check_mark: Соблюдение семантической верстки<br>

---

**Для запуска проекта (на своем устройстве в IDE) выполнить действия:**

&nbsp; __1.__ Клонировать репозиторий на свой ПК: 
```bash
git clone https://github.com/Ivan-ISS/project_weather-open-api-widget.git
```
&nbsp; __2.__ Поставить пакеты в корне проекта:
```bash
npm install
```
&nbsp; __3.__ Для запуска приложения в режиме development выполнить:
```bash
npm run dev
```

**Ссылка для просмотра проекта:** ***https://project-weather-open-api-widget.vercel.app/***