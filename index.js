const puppeteer = require('puppeteer')

const run = async () => {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox'
        ]
    })
    const page = await browser.newPage()

    const url = 'https://uat.guandata.com/bi-test/page/i66e0ee0567434fbf88121a6'
    await page.setCookie({
        name: 'uIdToken',
        expires: Date.now() / 1000 + 3600,
        path: '/',
        httpOnly: true,
        value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxLTJsVnRoZTF5TWk2a0tDb0pnUnF6cEZMV2tBQmVqRSs1VzJhRlh1cVg5b3l2QUlLdDNhMEU3aUNhMXVxZEQyRDNKM25nemFIQTRNSjBMellkN29KbnRvQ25kYXNwMWMySEtKSkdLaWxpd3BmdDZ2eTkiLCJpc3MiOiJndWFuZGF0YS5jb20iLCJleHAiOjE2OTQzOTYzOTQsImlhdCI6MTY5MzIyMDc3OCwiaW5pdFRpbWUiOiIyMDIzLTA4LTI4IDA5OjM5OjU0IiwianRpIjoiODg5ZWIxMDU3NDFjMWI1YTQ4ZmQ3ODg0NDMzMTJlNDlkOWFkNjgyYzRhYjBmMzdmNTY1YTRmOGE1ODdkNDZmNzNhMWZjNmFkNzllMTBkZjY1OTFmZWFhNjlhMGMzN2ZlMzJlNzQ5OGFkZmY3ZWVhY2E4OGU2MmU3OTY4ZWM0MjA5OThiZjRlMzdiYWE1YjI5ZDgzMWNmNWJhYTMzODk2YzU4OTdmMGJkOWFkMGNmYWQ1NjczZjJkYjk4OTk3Nzk5N2ZiYWQzNWRiMGEyYTM3OTBmMjk3NWI0NzRmMWUyMThkY2UzYzQyZTU5MWE3YWYzNTU3OGNkMWZhYWUxNWNmMCIsInB3ZFZlcnNpb24iOjB9.gO70_XLq5XdahxNaaPSAiZvtSHwmR8nuSM8MLZQd1CU',
        url,
    })
    await page.goto('https://uat.guandata.com/bi-test/page/i66e0ee0567434fbf88121a6', {
        waitUntil: 'load',
        timeout: 0
    })
    await page.waitForTimeout(3000)
    await page.screenshot({
        path: './test.png'
    })

    await page.close()
    await browser.close()
}

run()
setTimeout(() => {
    console.log(1)
}, 10000000);