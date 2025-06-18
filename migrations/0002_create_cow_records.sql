-- Migration number: 0001 	 2024-12-27T22:04:18.794Z
CREATE TABLE IF NOT EXISTS cow_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tag_id TEXT NOT NULL,
    insemination_date TEXT,
    exam_date TEXT
);

-- Insert some sample data into our comments table.
INSERT INTO cow_records (tag_id, insemination_date, exam_date)
VALUES
    ('112233445566778899', '22-04-2025', '06-05-2025'),
    ('deadbeefcofeecofee', '22-04-2025', '05-05-2025')
;
