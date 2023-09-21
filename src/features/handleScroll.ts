export const handleScroll = (items: React.RefObject<HTMLDivElement>, indicators: React.RefObject<HTMLDivElement>, styles: CSSModuleClasses, gap: number) => {
    if (items.current && indicators.current) {

      // Cкролл сейчас
      const nowScroll = items.current.scrollLeft;

      // Все элементы слайдера
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
      const indicatorsElems: HTMLDivElement[] =
        Array.prototype.slice.call(allIndicators);

      // Длина всех элементов слайдера
      const allWidth: number[] = [];
      
      const elemsLength = elems.length;

      for(let i = 0; i < elemsLength; i++){
        if(allWidth[i - 1]){
          const thisItemWidth = allWidth[i - 1] + elems[i].scrollWidth + gap;
          allWidth.push(thisItemWidth);
        } else {
          const thisItemWidth = elems[i].scrollWidth;
          allWidth.push(thisItemWidth);
        }
      }

      // Проверка на активный элемент
      allWidth.forEach((_, index) => {
        if(nowScroll >= allWidth[index]){
          indicatorsElems.forEach((indicator) => {
            indicator.classList.remove(styles.active);
          });
          
          indicatorsElems[index + 1].classList.add(styles.active);
        } else if (nowScroll <= allWidth[0]){
          indicatorsElems.forEach((indicator) => {
            indicator.classList.remove(styles.active);
          });

          indicatorsElems[0].classList.add(styles.active);
        }
      })
    }
  };