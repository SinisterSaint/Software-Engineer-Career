-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).



-- https://app.quickdatabasediagrams.com/#/d/CskJiA  Diagram Link

CREATE TABLE "Players" (
    "PlayerID" int   NOT NULL,
    "TeamID" int   NOT NULL,
    "Name" text   NOT NULL,
    "Position" text   NOT NULL,
    "Number" int   NOT NULL,
    "Height" text   NOT NULL,
    "Weight" text   NOT NULL,
    "League" text   NOT NULL,
    CONSTRAINT "pk_Players" PRIMARY KEY (
        "PlayerID"
     )
);

CREATE TABLE "Sport" (
    "SportID" int   NOT NULL,
    "Name" text   NOT NULL,
    CONSTRAINT "pk_Sport" PRIMARY KEY (
        "SportID"
     )
);

CREATE TABLE "Team" (
    "TeamID" int   NOT NULL,
    "SportID" int   NOT NULL,
    "Name" text   NOT NULL,
    "Location" text   NOT NULL,
    "TeamMembers" text   NOT NULL,
    "Competition" text   NOT NULL,
    CONSTRAINT "pk_Team" PRIMARY KEY (
        "TeamID"
     )
);

ALTER TABLE "Players" ADD CONSTRAINT "fk_Players_TeamID" FOREIGN KEY("TeamID")
REFERENCES "Team" ("TeamID");

ALTER TABLE "Team" ADD CONSTRAINT "fk_Team_SportID" FOREIGN KEY("SportID")
REFERENCES "Sport" ("SportID");

