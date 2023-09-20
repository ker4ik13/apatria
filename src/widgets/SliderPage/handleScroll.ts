export const handleScroll = (items: React.RefObject<HTMLDivElement>, indicators: React.RefObject<HTMLDivElement>, styles: CSSModuleClasses) => {
    if (items.current && indicators.current) {
      // Общий скролл
      const itemsScrollWidth = items.current.scrollWidth;

      // Cкролл сейчас
      const nowScroll = items.current.scrollLeft;

      // Все скролл элементы
      const allArray: ChildNode[] = [];
      items.current.childNodes.forEach((item) => {
        allArray.push(item);
      });
      const elems: HTMLDivElement[] = Array.prototype.slice.call(allArray);

      // Все индикаторы
      const allIndicators: ChildNode[] = [];
      indicators.current.childNodes.forEach((item) => {
        allIndicators.push(item);
      });
      const indicatorsElems: HTMLButtonElement[] =
        Array.prototype.slice.call(allIndicators);

      indicatorsElems.forEach((indicator) => {
        indicator.classList.remove(styles.active);
      });

      // Ширина всех элементов
    //   const elem6Width = itemsScrollWidth - elems[5].scrollWidth - 150;
      const elem5Width = itemsScrollWidth - elems[4].scrollWidth - 120;
      const elem4Width =
        itemsScrollWidth - elems[4].scrollWidth - elems[5].scrollWidth - 90;
      const elem3Width =
        itemsScrollWidth -
        elems[3].scrollWidth -
        elems[4].scrollWidth -
        elems[5].scrollWidth -
        60;
      const elem2Width =
        itemsScrollWidth -
        elems[2].scrollWidth -
        elems[3].scrollWidth -
        elems[4].scrollWidth -
        elems[5].scrollWidth -
        90;
      const elem1Width =
        itemsScrollWidth -
        elems[1].scrollWidth -
        elems[2].scrollWidth -
        elems[3].scrollWidth -
        elems[4].scrollWidth -
        elems[5].scrollWidth -
        120;

      if (nowScroll >= elem5Width) {
        indicatorsElems[5].classList.add(styles.active);
      } else if (nowScroll >= elem4Width) {
        indicatorsElems[4].classList.add(styles.active);
      } else if (nowScroll >= elem3Width) {
        indicatorsElems[3].classList.add(styles.active);
      } else if (nowScroll >= elem2Width) {
        indicatorsElems[2].classList.add(styles.active);
      } else if (nowScroll >= elem1Width) {
        indicatorsElems[1].classList.add(styles.active);
      } else if (nowScroll <= elem1Width) {
        indicatorsElems[0].classList.add(styles.active);
      }
    }
  };