export const handleScroll = (items: React.RefObject<HTMLDivElement>, indicators: React.RefObject<HTMLDivElement>, styles: CSSModuleClasses) => {
    if (items.current && indicators.current) {
      const allWidth = items.current.scrollWidth;

      // Cкролл сейчас
      const nowScroll = items.current.scrollLeft;

      // Все элементы слайдера
      const allArray: ChildNode[] = [];
      items.current.childNodes.forEach((item) => {
        allArray.push(item);
      });
      const elems: HTMLDivElement[] = Array.prototype.slice.call(allArray);
      const elemsLength = elems.length;
      
      const gap = (allWidth - (elems[0].scrollWidth * elemsLength)) / (elemsLength - 1)

      // Все индикаторы
      const allIndicators: ChildNode[] = [];
      indicators.current.childNodes.forEach((item) => {
        allIndicators.push(item);
      });
      const indicatorsElems: HTMLDivElement[] =
        Array.prototype.slice.call(allIndicators);

      // Длина всех элементов слайдера
      const allItemsWidth: number[] = [];
      

      for(let i = 0; i < elemsLength; i++){
        if(allItemsWidth[i - 1]){
          const thisItemWidth = allItemsWidth[i - 1] + elems[i].scrollWidth + gap;
          allItemsWidth.push(thisItemWidth);
        } else {
          const thisItemWidth = elems[i].scrollWidth;
          allItemsWidth.push(thisItemWidth);
        }
      }

      // Проверка на активный элемент
      allItemsWidth.forEach((_, index) => {
        if(nowScroll >= allItemsWidth[index]){
          indicatorsElems.forEach((indicator) => {
            indicator.classList.remove(styles.active);
          });
          
          indicatorsElems[index + 1].classList.add(styles.active);
        } else if (nowScroll <= allItemsWidth[0]){
          indicatorsElems.forEach((indicator) => {
            indicator.classList.remove(styles.active);
          });

          indicatorsElems[0].classList.add(styles.active);
        }
      })
    }
  };