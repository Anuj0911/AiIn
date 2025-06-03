import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockinterview',{
    id:serial('id').primaryKey(),
    jsonmockresp:text('jsonmockresp'),
    jobposition:varchar('jobposition').notNull(),
    jobdesc:varchar('jobdesc').notNull(),
    jobexperience:varchar('jobexperience').notNull(),
    createdby:varchar('createdby').notNull(),
    createdat:varchar('createdat'),
    mockid:varchar('mockid').notNull()
})

export const UserAnswer=pgTable('useranswer',{
    id:serial('id').primaryKey(),
    mockidref:varchar('mockid').notNull(),
    question:varchar('question').notNull(),
    correctans:text('correctans'),
    userans:text('userans'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    useremail:varchar('useremail'),
    createdat:varchar('createdat'),

})