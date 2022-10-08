export function useCore() {
    function getNavBarHeight() {
        return parseInt(
            document.getElementById("pr-mainMenu").offsetHeight,
            10
        );
    }
    return { getNavBarHeight };
}
