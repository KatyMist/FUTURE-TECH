//Импорт утилиты
import pxToRem from './utils/pxToRem.js'

//Селектор для поиска всех expandable блоков в DOM
const rootSelector = '[data-js-expandable-content]'


//Это один раскрывающийся блок
class ExpandableContent {
    //Селекторы внутри компонента
    selectors = {
        root: rootSelector,
        button: '[data-js-expandable-content-button]'
    }

    //CSS класс состояния "открыто".
    stateClasses = {
        isExpanded: 'is-expanded',
    }

    //Параметры для element.animate() (это Web Animations API, не CSS animation)
    animationParams = {
        duration: 500, //duration — 500ms
        easing: 'ease', //плавность
    }

    constructor(rootElement) {
        this.rootElement = rootElement //сохраняем root
        this.buttonElement = this.rootElement.querySelector(this.selectors.button) //находим кнопку внутри блока
        this.bindEvents() //вешаем события
    }


    //Метод раскрытия блока
    expand() {
        const { offsetHeight, scrollHeight } = this.rootElement // offsetHeight — текущая высота (закрытая), scrollHeight — полная высота контента

        this.rootElement.classList.add(this.stateClasses.isExpanded) //Добавляем класс -> теперь блок считается раскрытым
        this.rootElement.animate([ //Анимация:
            {
                maxHeight: `${pxToRem(offsetHeight)}rem`,
            },
            {
                maxHeight: `${pxToRem(scrollHeight)}rem`,
            },
        ], this.animationParams)
    }

    //Отбработчик клика
    onButtonClick = () => {
        this.expand()
    }

    //Навешиваем обработчик
    bindEvents() {
        this.buttonElement.addEventListener('click', this.onButtonClick)
    }
}

//Инициализатор всех блоков на странице
class ExpandableContentCollection {
    //При создании сразу инициализируем
    constructor() {
    this.init()
  }

  //ищем все expandable блоки - создаем экземпляр для каждого
  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new ExpandableContent(element)
    })
  }
}

//Экспортируем коллекцию
export default ExpandableContentCollection