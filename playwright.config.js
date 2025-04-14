import { devices } from '@playwright/test'

export default {
    webServer : {
        command : 'npm run dev',
        URL : 'http://localhost:5173/',
        reuseExistingServer : !process.env.CI,
    },
    projects : [
        {
            name : 'chromium',
            use : { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
    ],
    use : {
        baseURL : 'http://localhost:5173/',
        screenshot : 'only-on-failure',
        trace : 'on-first-retry'
    }
}