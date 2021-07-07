CREATE TABLE "Out_Of_State" (
    "Address" varchar(100)   NOT NULL,
    "Neighborhood" varchar(100)   NOT NULL,
    "Owner_Name" varchar(100)    NULL,
    "Owner_Address" varchar(100)   NULL,
    "Owner_City" varchar(100)    NULL,
    "Owner_State" varchar(100)   NULL,
    "Owner_Zip" varchar(100)    NULL,
    "Legal" varchar(3000)    NULL
);

CREATE TABLE "64130_Research" (
	"address" varchar(100)   NOT NULL,
	"case_opened" varchar(100)   NOT NULL,
	"zip_code" varchar(100)   NOT NULL,
	"statusofcase" varchar(100)   NOT NULL
);

CREATE TABLE "64110_Research" (
	"address" varchar(100)   NOT NULL,
	"case_opened" varchar(100)   NOT NULL,
	"zip_code" varchar(100)   NOT NULL,
	"statusofcase" varchar(100)   NOT NULL
);

CREATE TABLE "64109_Research" (
	"address" varchar(100)   NOT NULL,
	"case_opened" varchar(100)   NOT NULL,
	"zip_code" varchar(100)   NOT NULL,
	"statusofcase" varchar(100)   NOT NULL
);

CREATE TABLE "Out_Of_State_Danger_List" (
    "Address" varchar(100)   NOT NULL,
    "Neighborhood" varchar(100)   NOT NULL,
    "Owner_Name" varchar(100)   NOT NULL,
    "Owner_Address" varchar(100)  NOT NULL,
    "Owner_City" varchar(100)   NOT NULL,
    "Owner_State" varchar(100) NOT NULL,
    "Owner_Zip" varchar(100)   NOT NULL,
    "Legal" varchar(3000)   NOT NULL,
	"case_opened" varchar(100)   NOT NULL,
	"zip_code" varchar(100)   NOT NULL,
	"statusofcase" varchar(1000)   NOT NULL
	
);

CREATE TABLE "Codes_Violations" (
	"address" varchar(100)   NOT NULL,
	"violation_description" varchar(1000)   NOT NULL,
	"case_opened" varchar(100)   NOT NULL,
	"violation_entry_date" varchar(100)   NOT NULL,
	"status" varchar(100)   NOT NULL,
	"neighborhood" varchar(100)   NOT NULL,
	"owner" varchar(100)    NULL,
	"Legal_Description" varchar(3000)    NULl,
	"Possible_Phone_Number" varchar(1000)   NULL
);
