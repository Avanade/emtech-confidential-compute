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
    'xxxxxxxxxxxx'
    )

INSERT INTO
    [dbo].[Document_Store](
        DocumentStoreID,
        DocumentStoreName,
        DocumentDescription,
        IsActive,
        CreateDate
    )
VALUES
    (
    2001,
    'Document name',
    'An example document used as a placeholder',
    1,
    '2021-08-2T10:40:34'
    )


INSERT INTO
    [dbo].[Document_List](
        DocumentID,
        DocumentName,
        LedgerID,
        Metadata,
        DocumentStoreID,
    )
VALUES
    (
    1,
    'Test Document',
    1,
    '{"document_type":".pdf"}',
    '2022-02-22T10:40:34'
    )