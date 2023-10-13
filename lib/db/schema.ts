import { relations } from "drizzle-orm";
import {
    boolean,
    integer,
    json,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";



export const topic_count = pgTable("topic_count", {
    id: serial("id").primaryKey(),
    userId: text("userId").notNull(),
    topic: text("topic").notNull(),
    count: integer("count").notNull(),
});
//one user can have multiple games

export const gametypeEnum = pgEnum("game_type", ['mcq', 'open_ended']);


export const question = pgTable("question", {
    id: serial("id").primaryKey(),
    // userId: text("userId").references(() => user.userId),
    topic: text("topic").notNull(),
    userId: text("userId").notNull(),
    question: text("question").notNull(),
    answer: text("answer").notNull(),
    timeStarted: timestamp("timeStarted").notNull(),
    timeEnded: timestamp("timeEnded").notNull(),
    userAnswer: text("userAnswer").notNull(),
    score: text("score").notNull(),
    questionType: gametypeEnum("game_type")
  });;
  
export const course = pgTable("course", {
    id: serial("id").primaryKey(),
    //courseName: text("courseName").notNull(),
    courseName: text("courseName").notNull(),
    onChapter: integer("onChapter").notNull(),
    chapterLength: integer("chapterLength").notNull(),
    progress: integer("progress").notNull(),
    isEnrolled: boolean("isEnrolled").notNull(),
    isComplete: boolean("isComplete").notNull(),
    userId: text("userId").notNull(),
    // userId: text("userId").notNull().references(() => user.userId),
})
//one game must have mny questions

// Define the relationship between User and Game (one-to-many)
// export const userRelations = relations(user, ({ many }) => ({
//     questions: many(question)
// }));
// export const courseRelations = relations(user, ({ many }) => ({
//     courses: many(course)
// }));

// export type User = typeof user.$inferInsert;
// export type Users = typeof user.$inferSelect;
export type Courses = typeof course.$inferSelect;
export type Course = typeof course.$inferInsert;
export type Questions = typeof question.$inferSelect;
export type Question = typeof question.$inferInsert;
