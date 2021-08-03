CREATE TABLE [Users](
UserID int NOT NULL,
UserName varchar(255),
UserEmail varchar(255),
Yubikey varchar(255),
PRIMARY KEY (UserID)
)WITH (SYSTEM_VERSIONING = ON, LEDGER = ON);
CREATE TABLE [Document_Store](
DocumentStoreID int NOT NULL,
DocumentStoreName varchar(255),
DocumentDescription varchar(255),
IsActive BIT,
CreateDate DATETIME,
PRIMARY KEY (DocumentStoreID)
)WITH (SYSTEM_VERSIONING = ON, LEDGER = ON);

CREATE TABLE [Document_Store_Acess](
AccessID int NOT NULL,
DocumentStoreID int NOT NULL,
UserID int NOT NULL,
UserRole varchar(255),
PRIMARY KEY (AccessID),
FOREIGN KEY (UserID) REFERENCES Users(UserId),
FOREIGN KEY (DocumentStoreID) REFERENCES Document_Store(DocumentStoreID)
)WITH (SYSTEM_VERSIONING = ON, LEDGER = ON);

CREATE TABLE [Document_List](
DocumentID int NOT NULL,
DocumentName varchar(255),
LedgerID int NOT NULL,
Metadata varchar (255),
DocumentStoreID int NOT NULL,
PRIMARY KEY (DocumentID),
FOREIGN KEY (DocumentStoreID) REFERENCES Document_Store(DocumentStoreID)
)WITH (SYSTEM_VERSIONING = ON, LEDGER = ON);

CREATE TABLE [Annotations](
  AnnotationID int NOT NULL,
  DocumentID int NOT NULL,
  Contents varchar(255),
  CreateDate DATETIME,
  CreatedByUserID int NOT NULL,
  PRIMARY KEY (AnnotationID),
  FOREIGN KEY (DocumentID) REFERENCES Document_List(DocumentId),
  FOREIGN KEY (CreatedByUserID) REFERENCES Users(UserId),
) WITH (SYSTEM_VERSIONING = ON, LEDGER = ON);