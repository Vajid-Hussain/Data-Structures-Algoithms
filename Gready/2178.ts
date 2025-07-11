function maximumEvenSplit(finalSum: number): number[] {

    if (finalSum % 2 != 0) {
        return []
    }

    let result: number[] = []
    let currSum: number = 0
    let i: number = 2

    while (finalSum - i >= 0) {
        result.push(i)
        finalSum -= i
        i += 2
    }

    result[result.length - 1] += finalSum 
    return result
};
