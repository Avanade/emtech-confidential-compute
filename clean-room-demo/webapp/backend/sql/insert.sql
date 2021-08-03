INSERT INTO
    [dbo].[Users](
        UserID,
        UserName,
        UserEmail,
        Yubikey
    )
VALUES
    (
    1001,
    'Example User',
    'exampe.user@emailrovider.com',
    '00000000-0000-0000-0000-000000000000'
    )

INSERT INTO
    [dbo].[Document_Store](
        DocumentStoreID int NOT NULL,
        DocumentStoreName varchar(255),
        DocumentDescription varchar(255),
        IsActive BIT,
        CreateDate DATETIME,
    )
VALUES
    (
    2001,
    'Document name',
    'An example document used as a placeholder',
    1,
    '2021-08-2T10:40:34'
    )