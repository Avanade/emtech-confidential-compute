-- List all users

Select * from [dbo].[Users]

-- Get current user (individual user by ID)
Select * from 
    [dbo].[Users]
WHERE 
    UserID == *INPUT*;

-- Get current user (individual user by user name)

Select * from 
    [dbo].[Users]
WHERE 
    UserName == *INPUT*;

-- Grant user access

INSERT INTO [dbo].[Document_Store_Acess](
    AccessID,
    DocumentStoreID,
    UserID ,
    UserRole
)
VALUES(
    *newID*,
    *Doc store D to grant*,
    *Input user ID*,
    *User Role*
)

--revoke access by access ID

DELETE FROM 
    [dbo].[Document_Store_Acess]
WHERE
    AccessID = *Input Access ID*;

-- Add annotation
INSERT INTO [dbo].[Annotations]
(
    AnnotationID,
    DocumentID,
    Contents,
    CreateDate,
    CreatedByUserID
)
VALUES
(
    *New annotation ID*,
    *DocID*,
    *Contents*,
    GETDATE(),
    *Current UserID*
)
-- Mark as hidden

UPDATE [dbo].[Document_Store]
SET IsActive = 0
WHERE DocumentStoreID = *Input DocID*;

--- get autherise docs from auserID

select
  A.*
from
  [dbo].[Document_Store] A
  inner join [dbo].[Document_Store_Acess] B on A.DocumentStoreID = B.DocumentStoreID
where
  B.UserId = * Search User ID * -- insert User Id
