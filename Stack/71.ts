function simplifyPath(path: string): string {
    let stack: string[] = []
    let start: number = 0
    let canLoop: boolean = true
    let i = 1
    let subPath: string
    let result: string = ""
    let isAdd: number

    while (i < path.length) {
        for (i; i < path.length; i++) {
            if (path[i] == "/") break
        }

        subPath = path.substring(start + 1, i)
        start = i
        i++

        isAdd = validate(subPath)
        if (isAdd == 0) {
            stack.push(subPath)
        } else if (isAdd == 1) {
            stack.pop()
        }
    }

    function validate(path: string): number {
        switch (path) {
            case "..":
                return 1
            case ".":
                return 2
            case "":
                return 2
            default:
                return 0
        }
    }

    return "/" + stack.join("/")
};
