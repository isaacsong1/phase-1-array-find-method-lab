// code your solution here
function superbowlWin (objArr) {
    const result = objArr.find( objArr => objArr.result === "W" );
    return result ? result.year : undefined;
}