interface IHandleIndicators {
    index: number;
    items: React.RefObject<HTMLDivElement>;
    indicators: React.RefObject<HTMLDivElement>;
    styles: CSSModuleClasses;
}

export const handleIndicators = ({index, items, indicators, styles}: IHandleIndicators) => {
    if (items.current && indicators.current) {
      const allItems = items.current.children;

      const allArray: ChildNode[] = [];
      indicators.current.childNodes.forEach((item) => {
        allArray.push(item);
      });

      const elems = Array.prototype.slice.call(allArray);

      elems.map((item) => {
        item.classList.remove(styles.active);
      });
      indicators.current.children[index].classList.add(styles.active);

      items.current.scrollTo({
        left: allItems[index].scrollWidth * index + 30 * index,
        behavior: "smooth",
      });
    }
  };