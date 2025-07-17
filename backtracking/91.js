function restoreIpAddresses(s: string): string[] {
    let result: string[] = []
    dfs(1, 0, result, "", s)
    return result
};



function dfs(leavel: number, start: number, result: string[], curr: string, ip: string) {

    let sum: number = 0


    for (let i = start; i < ip.length; i++) {
        if (sum * 10 + Number(ip[i]) > 255) break

        curr += ip[i]
        sum = sum * 10 + Number(ip[i])

        if (ip[start] == "0" && i - start > 0) {
            // console.log(curr, leavel, start, sum, curr.length, ip.length)
            continue
        }

        // if (curr == '2.254') console.log(curr, leavel, start, sum, curr.length, ip.length)

        if (leavel < 4) {
            dfs(leavel + 1, i + 1, result, curr + ".", ip)
        }

        if (i === ip.length-1 && leavel == 4) {
            result.push(curr)
            return
        }
    }
}
