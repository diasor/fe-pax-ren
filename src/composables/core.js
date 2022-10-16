export function useCore() {
    function getNavBarHeight() {
        return parseInt(
            document.getElementById("pr-main-menu").offsetHeight,
            10
        );
    }
    return { getNavBarHeight };
}
