export const startProgress = (div: HTMLDivElement | null) => {
    setTimeout(() => {
        if (div) {
        div.style.width = "15%";
        }
    }, 500);
    setTimeout(() => {
        if (div) {
        div.style.width = "30%";
        }
    }, 1000);
    setTimeout(() => {
        if (div) {
        div.style.width = "45%";
        }
    }, 1500);
    setTimeout(() => {
        if (div) {
        div.style.width = "60%";
        }
    }, 2000);
    setTimeout(() => {
        if (div) {
        div.style.width = "80%";
        }
    }, 2500);
    setTimeout(() => {
        if (div) {
        div.style.width = "100%";
        }
    }, 3000);
}