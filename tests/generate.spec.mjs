import { test, expect } from '@playwright/test';


test('test', async({ page }) => {

    // Go to https://tempmail.plus/en/
    await page.goto('https://tempmail.plus/en/');

    // Go to https://tempmail.plus/en/#!
    await page.goto('https://tempmail.plus/en/#!');

    // Click button:has-text("New random name")
    await page.click('button:has-text("New random name")');
    await expect(page).toHaveURL('https://tempmail.plus/en/#!');

    // Click #pre_copy
    await page.click('#pre_copy');


    const textRand = await navigator.clipboard.readText();


    // Fill [placeholder="Email"]
    await page1.fill('[id = "pre_button"]', '');

    // Fill [placeholder="Email"]
    await page1.fill('[id = "pre_button"]', textRand);




    //     // Click [placeholder="Password"]
    //     await page1.click('[placeholder="Password"]');

    //     // Fill [placeholder="Password"]
    //     await page1.fill('[placeholder="Password"]', '1260C0tiki1260');

    //     // Click button:has-text("Log in")
    //     await Promise.all([
    //         page1.waitForNavigation( /*{ url: 'https://vdcnew.xelon.ch/' }*/ ),
    //         page1.click('button:has-text("Log in")')
    //     ]);

    //     // Click text=Manage All Organizations
    //     await page1.click('text=Manage All Organizations');
    //     await expect(page1).toHaveURL('https://vdcnew.xelon.ch/all-organizations');

    //     // Click [placeholder="Search Organization"]
    //     await page1.click('[placeholder="Search Organization"]');

    //     // Fill [placeholder="Search Organization"]
    //     await page1.fill('[placeholder="Search Organization"]', 'eyqocg@mailto.plus');

    // });

    // // Go to https://vdcnew.xelon.ch/
    // await page1.goto('https://vdcnew.xelon.ch/');

    // // Go to https://vdcnew.xelon.ch/login
    // await page1.goto('https://vdcnew.xelon.ch/login');

    // // Click [placeholder="Email"]
    // await page1.click('[placeholder="Email"]');

    // // Fill [placeholder="Email"]
    // await page1.fill('[placeholder="Email"]', 'a.taraniuk@bitcat.agency');

    // // Click [placeholder="Password"]
    // await page1.click('[placeholder="Password"]');

    // // Fill [placeholder="Password"]
    // await page1.fill('[placeholder="Password"]', '1260C0tiki1260');

    // // Click button:has-text("Log in")
    // await Promise.all([
    //     page1.waitForNavigation( /*{ url: 'https://vdcnew.xelon.ch/' }*/ ),
    //     page1.click('button:has-text("Log in")')
    // ]);

    // // Click text=Manage All Organizations
    // await page1.click('text=Manage All Organizations');
    // await expect(page1).toHaveURL('https://vdcnew.xelon.ch/all-organizations');

    // // Click [placeholder="Search Organization"]
    // await page1.click('[placeholder="Search Organization"]');

    // // Fill [placeholder="Search Organization"]
    // await page1.fill('[placeholder="Search Organization"]', 'eyqocg@mailto.plus');

});