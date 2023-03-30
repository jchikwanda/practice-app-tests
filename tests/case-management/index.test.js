const { test, expect } = require("../../fixtures/data.fixture");
const { taskData, editData } = require("../../test-data");
const { addReportCase, deleteReportCase, editReportCase, searchReportCase } = require("../../utils/case-management/reports/cases");
const { addReportClient, deleteReportClient, editReportClient, searchReportClient } = require("../../utils/case-management/reports/clients");
const { deleteReportContact, editReportContact, searchReportContact, addReportContact } = require("../../utils/case-management/reports/contacts");
const { addReportEntity, deleteReportEntity, editReportEntity, searchReportEntity } = require("../../utils/case-management/reports/entities");
const { addReportExpense, deleteReportExpense, editReportExpense, searchReportExpense } = require("../../utils/case-management/reports/expenses");
const { addReportPayment, deleteReportPayment, editReportPayment, searchReportPayment } = require("../../utils/case-management/reports/payments");
const { addReportTE, deleteReportTE, editReportTE, searchReportTE } = require("../../utils/case-management/reports/time-entries");
const { addTask, editTask, deleteTask, searchTask } = require("../../utils/case-management/task");
const { handleLogin } = require('../../utils/misc');

test.describe("Case Management Test Suite", () => {

    let page;
    
    test.beforeAll(async ({browser, data}) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await handleLogin({ page, data, expect });
        await page.getByRole('menuitem', { name: 'Case Management' }).click();
    })
    
    test.afterAll(async ({browser}) => {
        browser.close()
    })

    /**** | CASE MANAGEMENT TASKS TEST STARTS HERE | ****/
    
    test("Run Add, Delete, Edit & Search Tests on Tasks Section", async () => {
        await page.getByRole('treeitem', { name: 'Tasks' }).locator('div').first().click();
        
         /* Add Task */
         await addTask({ page, data: taskData[0] });

         /* Delete Task */
         await deleteTask({ page });

         /* Edit Task */
         await editTask({ page, data: editData[0] });

         /* Search Task */
         await searchTask({ page });
     })

     /**** | CASE MANAGEMENT TASKS TEST ENDS HERE | ****/
    
    /**** | CASE MANAGEMENT REPORTS TEST STARTS HERE | ****/
    
     test('Run Add, Delete, Edit & Search Tests on Reports Case Section', async() => { 
         await page.getByRole('treeitem', { name: 'Reports' }).locator('div').first().click();
         await page.getByRole('treeitem', { name: 'Cases' }).locator('div').first().click();
        
         /* Add Report Case */
         await addReportCase({ page });

         /* Delete Report Case */
         await deleteReportCase({ page });

         /* Edit Report Case */
         await editReportCase({ page });
        
         /* Search Report Case */
         await searchReportCase({ page });
     })

     test('Run Add, Delete, Edit & Search Tests on Reports Clients Section', async() => { 
         await page.getByRole('treeitem', { name: 'Reports' }).locator('div').first().click();
         await page.getByRole('treeitem', { name: 'Clients' }).locator('div').first().click();
        
         /* Add Report Case */
         await addReportClient({ page });

         /* Delete Report Case */
         await deleteReportClient({ page });

         /* Edit Report Case */
         await editReportClient({ page });
        
         /* Search Report Case */
         await searchReportClient({ page });
     })

     test('Run Add, Delete, Edit & Search Tests on Reports Contacts Section', async() => { 
         await page.getByRole('treeitem', { name: 'Reports' }).locator('div').first().click();
         await page.getByRole('treeitem', { name: 'Contacs' }).locator('div').first().click();
        
         /* Add Report Case */
         await addReportContact({ page });

         /* Delete Report Case */
         await deleteReportContact({ page });

         /* Edit Report Case */
         await editReportContact({ page });
        
         /* Search Report Case */
         await searchReportContact({ page });
     })

     test('Run Add, Delete, Edit & Search Tests on Reports Entity Section', async() => { 
         await page.getByRole('treeitem', { name: 'Reports' }).locator('div').first().click();
         await page.getByRole('treeitem', { name: 'Entities' }).locator('div').first().click();
        
         /* Add Report Case */
         await addReportEntity({ page });

         /* Delete Report Case */
         await deleteReportEntity({ page });

         /* Edit Report Case */
         await editReportEntity({ page });
        
         /* Search Report Case */
         await searchReportEntity({ page });
     })

     test('Run Add, Delete, Edit & Search Tests on Reports Expense Section', async() => { 
         await page.getByRole('treeitem', { name: 'Reports' }).locator('div').first().click();
         await page.getByRole('treeitem', { name: 'Expenses' }).locator('div').first().click();
        
         /* Add Report Case */
         await addReportExpense({ page });

         /* Delete Report Case */
         await deleteReportExpense({ page });

         /* Edit Report Case */
         await editReportExpense({ page });
        
         /* Search Report Case */
         await searchReportExpense({ page });
     })

     test('Run Add, Delete, Edit & Search Tests on Reports Payment Section', async() => { 
         await page.getByRole('treeitem', { name: 'Reports' }).locator('div').first().click();
         await page.getByRole('treeitem', { name: 'Payments' }).locator('div').first().click();
        
         /* Add Report Case */
         await addReportPayment({ page });

         /* Delete Report Case */
         await deleteReportPayment({ page });

         /* Edit Report Case */
         await editReportPayment({ page });
        
         /* Search Report Case */
         await searchReportPayment({ page });
     })

    test('Run Add, Delete, Edit & Search Tests on Reports Time Entry Section', async() => { 
        await page.getByRole('treeitem', { name: 'Reports' }).locator('div').first().click();
        await page.getByRole('treeitem', { name: 'Time Entries' }).locator('div').first().click();
        
        /* Add Report Case */
        await addReportTE({ page });

        /* Delete Report Case */
        await deleteReportTE({ page });

        /* Edit Report Case */
        await editReportTE({ page });
        
        /* Search Report Case */
        await searchReportTE({ page });
    })

    /**** | CASE MANAGEMENT REPORTS TEST ENDS HERE | ****/
})